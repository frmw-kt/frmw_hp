"use client";

import { useEffect, useRef } from "react";

/**
 * どこから見ても幾何学模様に見える、無限に続く光の格子空間。
 * 格子の節点から 縦横・面の対角・立体の対角 の13方向に光の線が伸び、
 * その単位が上下左右前後に繰り返される。カメラはその中をゆっくり飛び続ける。
 * 線は「形」ではなく「光のにじみ」として足し合わせて描く（グロー方式）。
 */

const vertex = `
attribute vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }
`;

const fragment = (steps: number) => `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec3 uCam;
uniform mat3 uRot;

const float C = 4.0;   // 格子1マスの大きさ

float hash(vec3 p) {
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

const float S = C / 8.0;  // 面に並ぶ光の点の間隔（1マスの1辺に8個）

// 光の点：節点を通る3枚の面（縦・横・水平）の上に、方眼状に並ぶ。
// x＝いちばん近い点までの距離、y＝その点の明るさのばらつき
vec2 lights(vec3 p, vec3 q) {
  vec2 g; float d, best = 1e9, face = 0.0;
  g = (floor(q.yz / S) + 0.5) * S; d = length(vec3(q.x, q.yz - g));
  if (d < best) { best = d; face = 0.0; }
  g = (floor(q.xz / S) + 0.5) * S; d = length(vec3(q.y, q.xz - g));
  if (d < best) { best = d; face = 3.1; }
  g = (floor(q.xy / S) + 0.5) * S; d = length(vec3(q.z, q.xy - g));
  if (d < best) { best = d; face = 5.3; }
  // 明るさのばらつきは、いちばん近い点の分だけ計算する（軽くするため）
  return vec2(best, hash(floor(p / S) + face));
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / min(uRes.y, uRes.x * 1.1);
  vec3 rd = normalize(uRot * vec3(uv, 1.15));
  vec3 ro = uCam;

  vec3 glowLight = vec3(0.0), glowFace = vec3(0.0), glowNode = vec3(0.0), glowDust = vec3(0.0);
  float t = 0.05;
  for (int i = 0; i < ${steps}; i++) {
    vec3 p = ro + rd * t;
    vec3 q = p - C * floor(p / C + 0.5);           // いちばん近い節点を原点にした座標
    vec2 lt = lights(p, q);
    float dn = length(q);
    // 浮かぶ光の粒（マスごとに位置を変える）
    vec3 cell = floor(p / C);
    vec3 off = vec3(hash(cell), hash(cell + 7.1), hash(cell + 3.7)) * C;
    vec3 dp = p - cell * C - off;
    dp.y -= sin(uTime * 0.6 + hash(cell + 1.3) * 6.28) * 0.4;
    float dd = length(dp);

    // 鏡の面の照り返し：いちばん近い面を、中心から放射状に8つの三角形に分け、
    // 三角形ごとに明るさを少し変える（元動画の、面ごとに光り方が違う質感）
    vec3 aq = abs(q);
    float pd; vec2 fq; float pl;
    if (aq.x < aq.y && aq.x < aq.z) { pd = aq.x; fq = q.yz; pl = 0.0; }
    else if (aq.y < aq.z) { pd = aq.y; fq = q.xz; pl = 1.0; }
    else { pd = aq.z; fq = q.xy; pl = 2.0; }
    float facet = (fq.x > 0.0 ? 1.0 : 0.0) + (fq.y > 0.0 ? 2.0 : 0.0) + (abs(fq.x) > abs(fq.y) ? 4.0 : 0.0);
    float sheen = 0.45 + 0.55 * hash(floor(p / C + 0.5) + vec3(pl * 1.7, facet * 0.37, 0.0));

    float fade = exp(-0.08 * t);                    // 遠いほど弱く
    // 光の点は小さく強く（点ごとに明るさを少し変える）
    glowLight += fade * vec3(1.0, 0.95, 0.8) * (0.25 + 0.75 * lt.y * lt.y) * 0.0006 / (lt.x * lt.x + 0.000025);
    glowFace += fade * sheen * vec3(1.0, 0.78, 0.4) * 0.00006 / (pd * pd + 0.0005);
    glowNode += fade * vec3(1.0, 0.95, 0.78) * 0.004 / (dn * dn + 0.002);
    glowDust += fade * vec3(1.0, 0.9, 0.7) * step(0.6, hash(cell + 9.0)) * 0.003 / (dd * dd + 0.0015);

    float d = min(dn, min(dd, lt.x));
    t += clamp(d * 0.6, 0.02, 0.6);
    if (t > 60.0) break;
  }

  vec3 haze = vec3(1.0, 0.7, 0.25);                  // 空間全体を満たす金色のもや
  vec3 col = haze * 0.42 + glowFace * 0.22 + glowLight * 0.2 + glowNode * 0.05 + glowDust * 0.035;
  float far = 1.0 - exp(-0.06 * t);
  col = mix(col, haze * 1.05, far * 0.55);

  col = 1.0 - exp(-col * 2.0);                      // 明るすぎる部分をなめらかに抑える
  col *= 1.0 - 0.18 * dot(uv, uv);                   // 四隅を少し暗く
  gl_FragColor = vec4(col, 1.0);
}
`;

// カメラが通る道筋。格子の線とぶつからないよう、マスの中ほどをうねりながら進む
function path(s: number): [number, number, number] {
  return [
    1.0 + Math.sin(s * 0.21) * 3.2 + Math.sin(s * 0.07) * 6.0,
    1.0 + Math.sin(s * 0.17 + 1.0) * 2.6,
    s * 2.0,
  ];
}

function lookAt(from: number[], to: number[], roll: number) {
  const f = norm([to[0] - from[0], to[1] - from[1], to[2] - from[2]]);
  const upHint = [Math.sin(roll), Math.cos(roll), 0];
  const r = norm(cross(upHint, f));
  const u = cross(f, r);
  return { r, u, f };
}
function cross(a: number[], b: number[]) { return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]; }
function norm(a: number[]) { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; }
function rotate(v: number[], axis: number[], ang: number) {
  const c = Math.cos(ang), s = Math.sin(ang), d = v[0] * axis[0] + v[1] * axis[1] + v[2] * axis[2];
  const x = cross(axis, v);
  return [0, 1, 2].map((i) => v[i] * c + x[i] * s + axis[i] * d * (1 - c));
}

export default function LatticeSpace() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const status = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // 表示の更新は毎秒なので、Reactの再描画を通さず直接書き換える
    const say = (text: string) => { if (status.current) status.current.textContent = text; };
    const el = canvas.current!;
    const gl = el.getContext("webgl", { antialias: false, powerPreference: "high-performance" });
    if (!gl) { say("この端末ではWebGLが使えません"); return; }

    const mobile = matchMedia("(max-width: 767px), (pointer: coarse)").matches;
    const steps = mobile ? 70 : 110;
    const forced = Number(new URLSearchParams(location.search).get("scale")) || 0; // 確認用：?scale=1 で解像度を固定
    let scale = forced || (mobile ? 0.5 : Math.min(devicePixelRatio, 1.5) * 0.7);

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s) || "shader");
      return s;
    };
    const prog = gl.createProgram()!;
    try {
      gl.attachShader(prog, compile(gl.VERTEX_SHADER, vertex));
      gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fragment(steps)));
      gl.linkProgram(prog);
    } catch (e) { say(String(e)); return; }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const uRes = gl.getUniformLocation(prog, "uRes");
    const uTime = gl.getUniformLocation(prog, "uTime");
    const uCam = gl.getUniformLocation(prog, "uCam");
    const uRot = gl.getUniformLocation(prog, "uRot");

    // 操作：ドラッグで見回す／ホイール・上下スワイプで速さを変える
    const look = { yaw: 0, pitch: 0, ty: 0, tp: 0 };
    let speed = 1, targetSpeed = 1, dragging = false, lx = 0, ly = 0;
    const down = (e: PointerEvent) => { dragging = true; lx = e.clientX; ly = e.clientY; };
    const up = () => { dragging = false; };
    const moveP = (e: PointerEvent) => {
      if (!dragging) return;
      look.ty = Math.max(-1.4, Math.min(1.4, look.ty + (e.clientX - lx) * -0.005));
      look.tp = Math.max(-1.2, Math.min(1.2, look.tp + (e.clientY - ly) * -0.005));
      lx = e.clientX; ly = e.clientY;
    };
    const wheel = (e: WheelEvent) => { targetSpeed = Math.max(-2, Math.min(6, targetSpeed + e.deltaY * 0.004)); };
    el.addEventListener("pointerdown", down);
    addEventListener("pointerup", up);
    addEventListener("pointermove", moveP);
    addEventListener("wheel", wheel, { passive: true });

    const resize = () => {
      el.width = Math.round(el.clientWidth * scale);
      el.height = Math.round(el.clientHeight * scale);
      gl.viewport(0, 0, el.width, el.height);
    };
    resize();
    addEventListener("resize", resize);

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t0 = performance.now();
    let raf = 0, frames = 0, last = t0, prev = t0, s = 3;
    const draw = (now: number) => {
      const dt = Math.min((now - prev) / 1000, 0.1);
      prev = now;
      speed += (targetSpeed - speed) * 0.05;
      targetSpeed += (1 - targetSpeed) * 0.01;   // しばらくすると元の速さに戻る
      if (!reduce) s += dt * 0.9 * speed;
      if (!dragging) { look.ty *= 0.985; look.tp *= 0.985; }
      look.yaw += (look.ty - look.yaw) * 0.08;
      look.pitch += (look.tp - look.pitch) * 0.08;

      const cam = path(s);
      const ahead = path(s + 1.5);
      // 進行方向を見つつ、ときどきゆっくり見上げる・見回す
      const auto = Math.sin(s * 0.11) * 0.5;
      const basis = lookAt(cam, ahead, Math.sin(s * 0.09) * 0.35);
      let f = rotate(basis.f, basis.u, look.yaw + Math.sin(s * 0.13) * 0.3);
      f = rotate(f, norm(cross(basis.u, f)), -(look.pitch + auto));
      const r = norm(cross(basis.u, f));
      const u = cross(f, r);

      gl.uniform2f(uRes, el.width, el.height);
      gl.uniform1f(uTime, (now - t0) / 1000);
      gl.uniform3f(uCam, cam[0], cam[1], cam[2]);
      gl.uniformMatrix3fv(uRot, false, [...r, ...u, ...f]);
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      frames++;
      if (now - last > 1000) {
        const fps = (frames * 1000) / (now - last);
        if (!forced && now - t0 > 3000 && fps < 28 && scale > 0.3) { scale *= 0.8; resize(); } // 重い端末では自動で解像度を下げる
        say(`${Math.round(fps)} fps ・ 解像度 ${Math.round(scale * 100)}% ・ ドラッグで見回す／スクロールで加速`);
        frames = 0; last = now;
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const onVis = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduce) { prev = performance.now(); raf = requestAnimationFrame(draw); }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerdown", down);
      removeEventListener("pointerup", up);
      removeEventListener("pointermove", moveP);
      removeEventListener("wheel", wheel);
      removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <>
      <canvas ref={canvas} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block", cursor: "grab" }} role="img" aria-label="光の線が無限に続く金色の幾何学空間を飛んでいくアニメーション" />
      <p ref={status} style={{ position: "absolute", left: 16, bottom: 12, margin: 0, color: "#fff8", font: "12px/1.6 monospace", pointerEvents: "none" }}>
        描画を準備しています…
      </p>
    </>
  );
}
