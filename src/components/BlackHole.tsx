"use client";

import { useEffect, useRef } from "react";

/**
 * 画像を使わず、シェーダーだけで描くブラックホール。
 * 画面の1画素ごとに光線を飛ばし、重力で曲げながら進める（シュワルツシルト時空の近似）。
 * 円盤は厚みのある雲として、光線が中を通るあいだ少しずつ光と濃さを足していく。
 *
 * 速くするための工夫
 * 1. 円盤の雲の模様は、最初に1回だけ計算して画像（diskTex）にしておく。毎フレームは回転させて読むだけ。
 * 2. 背景（星・星雲・中心の黒）と「その光線が円盤の近くを通るか」は、視点が動いた時だけ計算して
 *    画像（staticTex）に覚えておく。円盤を通らない画素は、毎フレームそれを読むだけで済ませる。
 */

const vertex = `
attribute vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }
`;

const common = `
precision highp float;
uniform vec2 uRes;
uniform vec2 uView;

float hash(vec3 p) {
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
float noise(vec3 x) {
  vec3 i = floor(x), f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float fbm(vec3 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * noise(p); p = p * 2.03 + 11.7; a *= 0.5; }
  return v;
}

// 円盤の内側・外側の半径と厚み（外側ほど少しふくらむ）
const float R_IN = 2.3;
const float R_OUT = 17.0;
float thick(float r) { return 0.04 + 0.024 * r; }

// 画面の位置からカメラの光線を作る。横長は高さ、縦長は幅を基準にして全体が収まるようにする
vec2 screenUv() { return (gl_FragCoord.xy - 0.5 * uRes) / min(uRes.y, uRes.x * 0.95); }
void camera(vec2 uv, out vec3 ro, out vec3 rd) {
  float yaw = uView.x, pitch = uView.y;
  ro = 22.0 * vec3(sin(yaw) * cos(pitch), sin(pitch), -cos(yaw) * cos(pitch));
  vec3 fw = normalize(-ro);
  vec3 rt = normalize(cross(vec3(0.0, 1.0, 0.0), fw));
  vec3 up = cross(fw, rt);
  rd = normalize(fw * 1.35 + uv.x * rt + uv.y * up);  // 画角を広げ、周りの星空が見えるようにする
}
// 1歩ぶん光線を進める。円盤の近くでは細かく進む
bool nearDisk(vec3 pos, float r) { return abs(pos.y) < 2.6 * thick(length(pos.xz)) && r > 2.0 && r < R_OUT + 1.0; }
float stepSize(vec3 pos, float r, bool near) {
  float dt = clamp(0.06 * r, 0.02, 1.2);
  if (near) dt = min(dt, max(0.04, 0.4 * thick(length(pos.xz))));
  return dt;
}
`;

// 1. 円盤の模様を作る（最初に1回だけ）。横＝角度、縦＝半径。R=雲のかたまり G=筋 B=暗い溝 A=細かいもや
const bakeDisk = `
${common}
void main() {
  vec2 t = gl_FragCoord.xy / uRes;
  float a = t.x * 6.2831853, r = mix(R_IN, R_OUT, t.y);
  float ca = cos(a), sa = sin(a);
  float clump = fbm(vec3(ca * 2.6, sa * 2.6, r * 1.8));
  float streak = fbm(vec3(ca * 6.0, sa * 6.0, r * 10.0));
  float lanes = fbm(vec3(ca * 3.0, sa * 3.0, r * 4.0) + 5.0);
  float detail = fbm(vec3(ca * 14.0, sa * 14.0, r * 6.0));
  gl_FragColor = vec4(clump, streak, lanes, detail);
}
`;

// 2. 背景と「円盤の近くを通るか」を作る（視点が動いた時だけ）
const bakeStatic = (steps: number) => `
${common}
// 星の色：温度に合わせて青白〜白〜黄〜橙
vec3 starColor(float t) {
  vec3 c = mix(vec3(0.62, 0.74, 1.0), vec3(1.0, 0.97, 0.92), smoothstep(0.0, 0.4, t));
  c = mix(c, vec3(1.0, 0.84, 0.6), smoothstep(0.45, 0.8, t));
  return mix(c, vec3(1.0, 0.62, 0.45), smoothstep(0.85, 1.0, t));
}

vec3 sky(vec3 d) {
  // 天の川：画面の左右に少し傾いて流れる帯
  float lat = dot(d, normalize(vec3(0.16, 1.0, 0.02)));
  float band = exp(-lat * lat / 0.07);
  float core = exp(-lat * lat / 0.018);
  float glow = fbm(d * 3.0 + 1.7);
  float dust = smoothstep(0.48, 0.72, fbm(d * 7.0 + vec3(4.0, 0.0, 2.0)) * 0.7 + fbm(d * 18.0) * 0.3);

  // 空の地の色：真っ黒ではなく、細かい星の集まりでわずかに紫がかった灰色
  vec3 c = vec3(0.04, 0.034, 0.052) * (0.5 + 1.0 * fbm(d * 60.0));
  // 天の川の明るい光（白〜黄みのある灰色）と、それを遮る暗いちりの筋
  vec3 milky = mix(vec3(0.36, 0.34, 0.4), vec3(0.62, 0.57, 0.52), core);
  c += milky * band * smoothstep(0.3, 0.8, glow) * (0.45 + 0.9 * fbm(d * 45.0)) * (1.0 - 0.85 * dust * band);
  // ところどころのピンク〜赤の星雲
  float pink = smoothstep(0.62, 0.82, fbm(d * 9.0 + 7.3)) * band;
  c += vec3(0.45, 0.1, 0.18) * pink * (1.0 - 0.7 * dust);

  // 星：方向を細かいマス目に分け、まれなマスにだけ星を置く。天の川の中ほど多い
  for (int k = 0; k < 4; k++) {
    float s = k == 0 ? 220.0 : k == 1 ? 520.0 : k == 2 ? 1000.0 : 1800.0;
    vec3 cell = floor(d * s), f = fract(d * s) - 0.5;
    float h = hash(cell + float(k) * 13.1);
    float th = (k == 0 ? 0.985 : k == 1 ? 0.96 : k == 2 ? 0.93 : 0.9) - 0.035 * band * float(k);
    if (h > th) {
      float b = (h - th) / (1.0 - th);
      float size = k == 0 ? 0.32 : 0.26;
      float lum = (k == 0 ? 3.6 : k == 1 ? 2.0 : k == 2 ? 1.3 : 0.9) * (0.4 + b);
      c += starColor(hash(cell * 1.7 + 3.0)) * smoothstep(size, 0.0, length(f)) * lum * (1.0 - 0.6 * dust * band);
    }
  }
  return c;
}
void main() {
  vec3 pos, vel;
  camera(screenUv(), pos, vel);
  float h2 = dot(cross(pos, vel), cross(pos, vel));
  bool hole = false, touch = false;
  for (int i = 0; i < ${steps}; i++) {
    float r2 = dot(pos, pos), r = sqrt(r2);
    if (r < 1.0) { hole = true; break; }
    bool near = nearDisk(pos, r);
    touch = touch || near;
    float dt = stepSize(pos, r, near);
    vel += -1.5 * h2 * pos / (r2 * r2 * r) * dt;
    pos += vel * dt;
    if (r > 40.0 && dot(pos, vel) > 0.0) break;
  }
  touch = touch || nearDisk(pos, length(pos));
  // 中心はわずかに青みのある黒。明るい星が飽和しないよう半分の値で保存する
  vec3 bg = hole ? vec3(0.01, 0.035, 0.07) : sky(normalize(vel));
  gl_FragColor = vec4(min(bg * 0.5, 1.0), touch ? 1.0 : 0.0);
}
`;

// 3. 毎フレームの描画
const render = (steps: number) => `
${common}
uniform float uTime;
uniform sampler2D uDisk;
uniform sampler2D uStatic;

// 円盤の中の1点の色と濃さ（模様は作っておいた画像から読む）
vec4 disk(vec3 p) {
  float r = length(p.xz);
  if (r < R_IN || r > R_OUT) return vec4(0.0);
  float y = p.y / thick(r);
  float a = atan(p.z, p.x) + uTime * 1.6 / pow(r, 1.5);   // 内側ほど速く回る
  // 上下の位置で読む場所を少しずらし、雲に立体感を出す
  vec4 n = texture2D(uDisk, vec2(a / 6.2831853, (r + y * 0.12 - R_IN) / (R_OUT - R_IN)));
  float clump = n.r, streak = n.g, lanes = smoothstep(0.3, 0.7, n.b), detail = n.a;
  // ふちが毛羽立つよう、上下の広がりも雲で揺らす
  float edge = 1.0 + 0.9 * (clump - 0.5);
  float vert = exp(-y * y * 1.6 / (edge * edge));
  float dens = smoothstep(R_IN, R_IN + 1.0, r) * smoothstep(R_OUT, 6.5, r) * vert;
  dens *= 0.3 + 0.7 * smoothstep(15.0, 4.0, r);   // 外側ほど薄く、透けるように
  dens *= (0.04 + 2.8 * smoothstep(0.32, 0.78, clump) * (0.45 + 1.0 * detail) + 0.8 * streak * streak) * (0.25 + 0.85 * lanes);
  float heat = smoothstep(13.0, 2.6, r);
  vec3 col = mix(vec3(0.62, 0.32, 0.17), vec3(1.0, 0.82, 0.62), heat);  // 外側は茶色、内側はクリーム色
  col = mix(col * 0.55, col, smoothstep(0.25, 0.75, streak));            // 筋の谷はくすませる
  col *= 0.7 + 1.6 * heat * heat;
  return vec4(col, dens);
}

void main() {
  vec2 uv = screenUv();
  vec4 cached = texture2D(uStatic, gl_FragCoord.xy / uRes);
  vec3 bg = cached.rgb * 2.0;
  vec3 col = bg;
  // 円盤の近くを通る光線だけ、毎フレーム進めて円盤を描く
  if (cached.a > 0.5) {
    vec3 pos, vel;
    camera(uv, pos, vel);
    float h2 = dot(cross(pos, vel), cross(pos, vel));
    col = vec3(0.0);
    float T = 1.0;          // まだ届く光の割合
    for (int i = 0; i < ${steps}; i++) {
      float r2 = dot(pos, pos), r = sqrt(r2);
      if (r < 1.0) break;
      bool near = nearDisk(pos, r);
      float dt = stepSize(pos, r, near);
      vel += -1.5 * h2 * pos / (r2 * r2 * r) * dt;
      pos += vel * dt;
      if (near) {
        vec4 d = disk(pos);
        // 光る量より吸う量を小さくして、奥の明るい部分が透けて見えるようにする
        col += T * d.rgb * d.a * dt * 4.6;
        T *= exp(-d.a * dt * 1.4);
        if (T < 0.02) break;
      }
      if (r > 40.0 && dot(pos, vel) > 0.0) break;
    }
    col += T * bg;
  }
  col = 1.0 - exp(-col * 0.9);               // 明るすぎる部分をなめらかに抑える
  col = pow(col, vec3(0.92, 0.96, 1.0));
  col *= 1.0 - 0.35 * dot(uv * 0.9, uv * 0.9); // 四隅を少し暗く
  gl_FragColor = vec4(col, 1.0);
}
`;

export default function BlackHole({ stats = true }: { stats?: boolean }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const status = useRef<HTMLParagraphElement>(null);
  // 表示の更新は毎秒なので、Reactの再描画を通さず直接書き換える
  const say = (text: string) => { if (status.current) status.current.textContent = text; };

  useEffect(() => {
    const el = canvas.current!;
    const gl = el.getContext("webgl", { antialias: false, powerPreference: "high-performance" });
    if (!gl) { say("この端末ではWebGLが使えません"); return; }

    const mobile = matchMedia("(max-width: 767px), (pointer: coarse)").matches;
    const steps = mobile ? 220 : 420;
    const forced = Number(new URLSearchParams(location.search).get("scale")) || 0;  // 確認用：?scale=0.5 で解像度を固定
    let scale = forced || (mobile ? 0.5 : 1);

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s) || "shader");
      return s;
    };
    const program = (src: string) => {
      const prog = gl.createProgram()!;
      gl.attachShader(prog, compile(gl.VERTEX_SHADER, vertex));
      gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, src));
      gl.bindAttribLocation(prog, 0, "p");
      gl.linkProgram(prog);
      return prog;
    };
    let diskProg: WebGLProgram, staticProg: WebGLProgram, mainProg: WebGLProgram;
    try {
      diskProg = program(bakeDisk);
      staticProg = program(bakeStatic(steps));
      mainProg = program(render(steps));
    } catch (e) { say(String(e)); return; }

    // 画面全体を覆う三角形
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    const target = (w: number, h: number, repeat: boolean) => {
      const tex = gl.createTexture()!;
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, repeat ? gl.LINEAR_MIPMAP_LINEAR : gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, repeat ? gl.LINEAR : gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, repeat ? gl.REPEAT : gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      const fb = gl.createFramebuffer()!;
      gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      return { tex, fb };
    };
    const draw = (prog: WebGLProgram, fb: WebGLFramebuffer | null, w: number, h: number) => {
      gl.useProgram(prog);
      gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
      gl.viewport(0, 0, w, h);
      gl.uniform2f(gl.getUniformLocation(prog, "uRes"), w, h);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    // 1. 円盤の模様（角度2048×半径1024）を最初に1回だけ作る
    const DW = 2048, DH = 1024;
    const diskT = target(DW, DH, true);
    draw(diskProg, diskT.fb, DW, DH);
    gl.bindTexture(gl.TEXTURE_2D, diskT.tex);
    gl.generateMipmap(gl.TEXTURE_2D);

    // マウス・指の位置で視点を少し動かす
    const view = { x: 0, y: 0.07, tx: 0, ty: 0.07 };
    const onPointer = (e: PointerEvent) => {
      view.tx = (e.clientX / innerWidth - 0.5) * 0.5;
      view.ty = 0.07 + (e.clientY / innerHeight - 0.5) * -0.12;
    };
    addEventListener("pointermove", onPointer);

    // 2. 背景と「円盤の近くを通るか」は、画面サイズか視点が変わった時だけ作り直す
    let staticT = target(1, 1, false);
    let baked = { x: NaN, y: NaN };
    const resize = () => {
      el.width = Math.max(1, Math.round(el.clientWidth * scale));
      el.height = Math.max(1, Math.round(el.clientHeight * scale));
      gl.deleteTexture(staticT.tex);
      gl.deleteFramebuffer(staticT.fb);
      staticT = target(el.width, el.height, false);
      baked = { x: NaN, y: NaN };
    };
    resize();
    addEventListener("resize", resize);

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t0 = performance.now();
    let raf = 0, frames = 0, last = t0;
    const frame = (now: number) => {
      view.x += (view.tx - view.x) * 0.06;
      view.y += (view.ty - view.y) * 0.06;
      // ほぼ止まったら、視点をぴったり目標に合わせて作り直しを止める
      if (Math.abs(view.tx - view.x) < 1e-4 && Math.abs(view.ty - view.y) < 1e-4) { view.x = view.tx; view.y = view.ty; }
      const moved = view.x !== baked.x || view.y !== baked.y;
      if (moved) {
        gl.useProgram(staticProg);
        gl.uniform2f(gl.getUniformLocation(staticProg, "uView"), view.x, view.y);
        draw(staticProg, staticT.fb, el.width, el.height);
        baked = { x: view.x, y: view.y };
      }

      gl.useProgram(mainProg);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, diskT.tex);
      gl.uniform1i(gl.getUniformLocation(mainProg, "uDisk"), 0);
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, staticT.tex);
      gl.uniform1i(gl.getUniformLocation(mainProg, "uStatic"), 1);
      gl.uniform1f(gl.getUniformLocation(mainProg, "uTime"), reduce ? 4 : (now - t0) / 1000);
      gl.uniform2f(gl.getUniformLocation(mainProg, "uView"), view.x, view.y);
      draw(mainProg, null, el.width, el.height);
      gl.activeTexture(gl.TEXTURE0);

      frames++;
      if (now - last > 1000) {
        const fps = (frames * 1000) / (now - last);
        // 重い端末では自動で解像度を下げる
        if (!forced && fps < 28 && scale > 0.35) { scale *= 0.8; resize(); }
        say(`${Math.round(fps)} fps ・ 解像度 ${Math.round(scale * 100)}% ・ 計算 ${steps}回/画素${moved ? "（視点を再計算中）" : ""}`);
        frames = 0; last = now;
      }
      if (!reduce) raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    // 画面に見えていない間（別タブ・スクロールで画面外）は描画を止める
    let inView = true;
    const onVis = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && inView && !reduce) raf = requestAnimationFrame(frame);
    };
    const io = new IntersectionObserver(([e]) => { inView = e.isIntersecting; onVis(); });
    io.observe(el);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      removeEventListener("resize", resize);
      removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <>
      <canvas ref={canvas} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} aria-label="回転する円盤をもつブラックホールのアニメーション" role="img" />
      <p ref={status} hidden={!stats} style={{ position: "absolute", left: 16, bottom: 12, margin: 0, color: "#ffffff80", font: "12px/1.6 monospace" }}>
        描画を準備しています…
      </p>
    </>
  );
}
