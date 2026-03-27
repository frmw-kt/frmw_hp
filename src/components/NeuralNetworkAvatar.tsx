"use client";

import { useEffect, useRef } from "react";

export default function NeuralNetworkAvatar() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cleanup: (() => void) | null = null;

    (async () => {
      const THREE = await import("three");
      const { OrbitControls } = await import(
        "three/examples/jsm/controls/OrbitControls.js"
      );
      const { EffectComposer } = await import(
        "three/examples/jsm/postprocessing/EffectComposer.js"
      );
      const { RenderPass } = await import(
        "three/examples/jsm/postprocessing/RenderPass.js"
      );
      const { UnrealBloomPass } = await import(
        "three/examples/jsm/postprocessing/UnrealBloomPass.js"
      );
      const { OutputPass } = await import(
        "three/examples/jsm/postprocessing/OutputPass.js"
      );

      // Gold palette matching site theme
      const palette = [
        new THREE.Color(0xe2c16a),
        new THREE.Color(0xc9a84c),
        new THREE.Color(0xa8892e),
        new THREE.Color(0xf0d080),
        new THREE.Color(0xd4a835),
      ];

      const W = container.clientWidth;
      const H = container.clientHeight;

      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x000000, 0.003);

      const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000);
      camera.position.set(0, 4, 22);

      const canvas = document.createElement("canvas");
      canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;";
      container.appendChild(canvas);

      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000);
      renderer.outputColorSpace = THREE.SRGBColorSpace;

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.rotateSpeed = 0.5;
      controls.minDistance = 6;
      controls.maxDistance = 40;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.4;
      controls.enablePan = false;
      controls.enableZoom = false;

      const composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(W, H),
        1.6,
        0.5,
        0.65
      );
      composer.addPass(bloomPass);
      composer.addPass(new OutputPass());

      // ── Shader code ────────────────────────────────────────────────
      const noiseFunctions = `
        vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
        vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
        vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
        vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
        float snoise(vec3 v){
          const vec2 C=vec2(1.0/6.0,1.0/3.0);
          const vec4 D=vec4(0.0,0.5,1.0,2.0);
          vec3 i=floor(v+dot(v,C.yyy));
          vec3 x0=v-i+dot(i,C.xxx);
          vec3 g=step(x0.yzx,x0.xyz);
          vec3 l=1.0-g;
          vec3 i1=min(g.xyz,l.zxy);
          vec3 i2=max(g.xyz,l.zxy);
          vec3 x1=x0-i1+C.xxx;
          vec3 x2=x0-i2+C.yyy;
          vec3 x3=x0-D.yyy;
          i=mod289(i);
          vec4 p=permute(permute(permute(
            i.z+vec4(0.0,i1.z,i2.z,1.0))
            +i.y+vec4(0.0,i1.y,i2.y,1.0))
            +i.x+vec4(0.0,i1.x,i2.x,1.0));
          float n_=0.142857142857;
          vec3 ns=n_*D.wyz-D.xzx;
          vec4 j=p-49.0*floor(p*ns.z*ns.z);
          vec4 x_=floor(j*ns.z);
          vec4 y_=floor(j-7.0*x_);
          vec4 x=x_*ns.x+ns.yyyy;
          vec4 y=y_*ns.x+ns.yyyy;
          vec4 h=1.0-abs(x)-abs(y);
          vec4 b0=vec4(x.xy,y.xy);
          vec4 b1=vec4(x.zw,y.zw);
          vec4 s0=floor(b0)*2.0+1.0;
          vec4 s1=floor(b1)*2.0+1.0;
          vec4 sh=-step(h,vec4(0.0));
          vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
          vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
          vec3 p0=vec3(a0.xy,h.x);
          vec3 p1=vec3(a0.zw,h.y);
          vec3 p2=vec3(a1.xy,h.z);
          vec3 p3=vec3(a1.zw,h.w);
          vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
          p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
          vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
          m=m*m;
          return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
        }`;

      const pulseUniforms = {
        uTime: { value: 0.0 },
        uPulsePositions: {
          value: [
            new THREE.Vector3(1e3, 1e3, 1e3),
            new THREE.Vector3(1e3, 1e3, 1e3),
            new THREE.Vector3(1e3, 1e3, 1e3),
          ],
        },
        uPulseTimes: { value: [-1e3, -1e3, -1e3] },
        uPulseColors: {
          value: [
            new THREE.Color(0xe2c16a),
            new THREE.Color(0xc9a84c),
            new THREE.Color(0xf0d080),
          ],
        },
        uPulseSpeed: { value: 18.0 },
        uBaseNodeSize: { value: 0.55 },
      };

      const nodeVertexShader = `${noiseFunctions}
        attribute float nodeSize;
        attribute float nodeType;
        attribute vec3 nodeColor;
        attribute float distanceFromRoot;
        uniform float uTime;
        uniform vec3 uPulsePositions[3];
        uniform float uPulseTimes[3];
        uniform float uPulseSpeed;
        uniform float uBaseNodeSize;
        varying vec3 vColor;
        varying float vNodeType;
        varying vec3 vPosition;
        varying float vPulseIntensity;
        varying float vDistanceFromRoot;
        varying float vGlow;
        float getPulse(vec3 wp,vec3 pp,float pt){
          if(pt<0.0)return 0.0;
          float ts=uTime-pt;
          if(ts<0.0||ts>4.0)return 0.0;
          float pr=ts*uPulseSpeed;
          float d=distance(wp,pp);
          return smoothstep(3.0,0.0,abs(d-pr))*smoothstep(4.0,0.0,ts);
        }
        void main(){
          vNodeType=nodeType; vColor=nodeColor; vDistanceFromRoot=distanceFromRoot;
          vec3 wp=(modelMatrix*vec4(position,1.0)).xyz;
          vPosition=wp;
          float pi=0.0;
          for(int i=0;i<3;i++) pi+=getPulse(wp,uPulsePositions[i],uPulseTimes[i]);
          vPulseIntensity=min(pi,1.0);
          float breathe=sin(uTime*0.7+distanceFromRoot*0.15)*0.15+0.85;
          float sz=nodeSize*breathe*(1.0+vPulseIntensity*2.5);
          vGlow=0.5+0.5*sin(uTime*0.5+distanceFromRoot*0.2);
          vec3 mp=position;
          if(nodeType>0.5){
            float n=snoise(position*0.08+uTime*0.08);
            mp+=normal*n*0.15;
          }
          vec4 mv=modelViewMatrix*vec4(mp,1.0);
          gl_PointSize=sz*uBaseNodeSize*(1000.0/-mv.z);
          gl_Position=projectionMatrix*mv;
        }`;

      const nodeFragmentShader = `
        uniform float uTime;
        uniform vec3 uPulseColors[3];
        varying vec3 vColor;
        varying float vNodeType;
        varying vec3 vPosition;
        varying float vPulseIntensity;
        varying float vDistanceFromRoot;
        varying float vGlow;
        void main(){
          vec2 c=2.0*gl_PointCoord-1.0;
          float d=length(c);
          if(d>1.0)discard;
          float g1=1.0-smoothstep(0.0,0.5,d);
          float g2=1.0-smoothstep(0.0,1.0,d);
          float gs=pow(g1,1.2)+g2*0.3;
          float bc=0.9+0.1*sin(uTime*0.6+vDistanceFromRoot*0.25);
          vec3 fc=vColor*bc;
          if(vPulseIntensity>0.0){
            fc=mix(fc,mix(vec3(1.0),uPulseColors[0],0.4),vPulseIntensity*0.8);
            fc*=(1.0+vPulseIntensity*1.2);
            gs*=(1.0+vPulseIntensity);
          }
          fc+=vec3(1.0)*smoothstep(0.4,0.0,d)*0.3;
          fc*=(1.0+vGlow*0.1);
          float alpha=gs*(0.95-0.3*d);
          float df=smoothstep(100.0,15.0,length(vPosition-cameraPosition));
          gl_FragColor=vec4(fc,alpha*df);
        }`;

      const connVertexShader = `${noiseFunctions}
        attribute vec3 startPoint;
        attribute vec3 endPoint;
        attribute float connectionStrength;
        attribute float pathIndex;
        attribute vec3 connectionColor;
        uniform float uTime;
        uniform vec3 uPulsePositions[3];
        uniform float uPulseTimes[3];
        uniform float uPulseSpeed;
        varying vec3 vColor;
        varying float vConnectionStrength;
        varying float vPulseIntensity;
        varying float vPathPosition;
        varying float vDistanceFromCamera;
        float getPulse(vec3 wp,vec3 pp,float pt){
          if(pt<0.0)return 0.0;
          float ts=uTime-pt;
          if(ts<0.0||ts>4.0)return 0.0;
          float pr=ts*uPulseSpeed;
          float d=distance(wp,pp);
          return smoothstep(3.0,0.0,abs(d-pr))*smoothstep(4.0,0.0,ts);
        }
        void main(){
          float t=position.x; vPathPosition=t;
          vec3 mp=mix(startPoint,endPoint,0.5);
          vec3 perp=normalize(cross(normalize(endPoint-startPoint),vec3(0,1,0)));
          if(length(perp)<0.1)perp=vec3(1,0,0);
          mp+=perp*sin(t*3.14159)*0.15;
          vec3 p0=mix(startPoint,mp,t);
          vec3 p1=mix(mp,endPoint,t);
          vec3 fp=mix(p0,p1,t);
          fp+=perp*snoise(vec3(pathIndex*0.08,t*0.6,uTime*0.15))*0.12;
          vec3 wp=(modelMatrix*vec4(fp,1.0)).xyz;
          float pi=0.0;
          for(int i=0;i<3;i++) pi+=getPulse(wp,uPulsePositions[i],uPulseTimes[i]);
          vPulseIntensity=min(pi,1.0);
          vColor=connectionColor;
          vConnectionStrength=connectionStrength;
          vDistanceFromCamera=length(wp-cameraPosition);
          gl_Position=projectionMatrix*modelViewMatrix*vec4(fp,1.0);
        }`;

      const connFragmentShader = `
        uniform float uTime;
        uniform vec3 uPulseColors[3];
        varying vec3 vColor;
        varying float vConnectionStrength;
        varying float vPulseIntensity;
        varying float vPathPosition;
        varying float vDistanceFromCamera;
        void main(){
          float f1=sin(vPathPosition*25.0-uTime*4.0)*0.5+0.5;
          float f2=sin(vPathPosition*15.0-uTime*2.5+1.57)*0.5+0.5;
          float cf=(f1+f2*0.5)/1.5;
          vec3 fc=vColor*(0.8+0.2*sin(uTime*0.6+vPathPosition*12.0));
          float fi=0.4*cf*vConnectionStrength;
          if(vPulseIntensity>0.0){
            fc=mix(fc,mix(vec3(1.0),uPulseColors[0],0.3)*1.2,vPulseIntensity*0.7);
            fi+=vPulseIntensity*0.8;
          }
          fc*=(0.7+fi+vConnectionStrength*0.5);
          float alpha=(0.7*vConnectionStrength+cf*0.3);
          alpha=mix(alpha,min(1.0,alpha*2.5),vPulseIntensity);
          float df=smoothstep(100.0,15.0,vDistanceFromCamera);
          gl_FragColor=vec4(fc,alpha*df);
        }`;

      // ── Node class ─────────────────────────────────────────────────
      class Node {
        position: InstanceType<typeof THREE.Vector3>;
        connections: { node: Node; strength: number }[];
        level: number;
        type: number;
        size: number;
        distanceFromRoot: number;

        constructor(
          position: InstanceType<typeof THREE.Vector3>,
          level = 0,
          type = 0
        ) {
          this.position = position;
          this.connections = [];
          this.level = level;
          this.type = type;
          this.size =
            type === 0
              ? THREE.MathUtils.randFloat(0.8, 1.4)
              : THREE.MathUtils.randFloat(0.5, 1.0);
          this.distanceFromRoot = 0;
        }
        addConnection(node: Node, strength = 1.0) {
          if (!this.isConnectedTo(node)) {
            this.connections.push({ node, strength });
            node.connections.push({ node: this, strength });
          }
        }
        isConnectedTo(node: Node) {
          return this.connections.some((c) => c.node === node);
        }
      }

      // ── Crystalline sphere generation ──────────────────────────────
      const generateNetwork = () => {
        const nodes: Node[] = [];
        const root = new Node(new THREE.Vector3(0, 0, 0), 0, 0);
        root.size = 2.0;
        nodes.push(root);

        const layers = 4;
        const goldenRatio = (1 + Math.sqrt(5)) / 2;

        for (let layer = 1; layer <= layers; layer++) {
          const radius = layer * 4;
          const numPoints = Math.floor(layer * 10);

          for (let i = 0; i < numPoints; i++) {
            const phi = Math.acos(1 - (2 * (i + 0.5)) / numPoints);
            const theta = (2 * Math.PI * i) / goldenRatio;
            const pos = new THREE.Vector3(
              radius * Math.sin(phi) * Math.cos(theta),
              radius * Math.sin(phi) * Math.sin(theta),
              radius * Math.cos(phi)
            );
            const isLeaf = layer === layers || Math.random() < 0.3;
            const node = new Node(pos, layer, isLeaf ? 1 : 0);
            node.distanceFromRoot = radius;
            nodes.push(node);

            if (layer > 1) {
              const prev = nodes
                .filter((n) => n.level === layer - 1 && n !== root)
                .sort(
                  (a, b) =>
                    pos.distanceTo(a.position) - pos.distanceTo(b.position)
                );
              for (let j = 0; j < Math.min(3, prev.length); j++) {
                const d = pos.distanceTo(prev[j].position);
                node.addConnection(
                  prev[j],
                  Math.max(0.3, 1 - d / (radius * 2))
                );
              }
            } else {
              root.addConnection(node, 0.9);
            }
          }

          const layerNodes = nodes.filter(
            (n) => n.level === layer && n !== root
          );
          for (const node of layerNodes) {
            const nearby = layerNodes
              .filter((n) => n !== node)
              .sort(
                (a, b) =>
                  node.position.distanceTo(a.position) -
                  node.position.distanceTo(b.position)
              )
              .slice(0, 4);
            for (const nb of nearby) {
              const d = node.position.distanceTo(nb.position);
              if (d < radius * 0.9 && !node.isConnectedTo(nb))
                node.addConnection(nb, 0.55);
            }
          }
        }
        return { nodes, root };
      };

      const { nodes } = generateNetwork();

      // ── Build BufferGeometry for nodes ─────────────────────────────
      const nodePosArr: number[] = [];
      const nodeTypeArr: number[] = [];
      const nodeSizeArr: number[] = [];
      const nodeColorArr: number[] = [];
      const nodeDistArr: number[] = [];

      for (const node of nodes) {
        nodePosArr.push(node.position.x, node.position.y, node.position.z);
        nodeTypeArr.push(node.type);
        nodeSizeArr.push(node.size);
        nodeDistArr.push(node.distanceFromRoot);
        const c = palette[Math.min(node.level, palette.length - 1)].clone();
        c.offsetHSL(
          THREE.MathUtils.randFloatSpread(0.04),
          THREE.MathUtils.randFloatSpread(0.1),
          THREE.MathUtils.randFloatSpread(0.1)
        );
        nodeColorArr.push(c.r, c.g, c.b);
      }

      const nodeGeo = new THREE.BufferGeometry();
      nodeGeo.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(nodePosArr, 3)
      );
      nodeGeo.setAttribute(
        "nodeType",
        new THREE.Float32BufferAttribute(nodeTypeArr, 1)
      );
      nodeGeo.setAttribute(
        "nodeSize",
        new THREE.Float32BufferAttribute(nodeSizeArr, 1)
      );
      nodeGeo.setAttribute(
        "nodeColor",
        new THREE.Float32BufferAttribute(nodeColorArr, 3)
      );
      nodeGeo.setAttribute(
        "distanceFromRoot",
        new THREE.Float32BufferAttribute(nodeDistArr, 1)
      );

      const nodeMat = new THREE.ShaderMaterial({
        uniforms: THREE.UniformsUtils.clone(pulseUniforms),
        vertexShader: nodeVertexShader,
        fragmentShader: nodeFragmentShader,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      palette.forEach((c, i) => {
        if (i < 3) nodeMat.uniforms.uPulseColors.value[i].copy(c);
      });
      const nodeMesh = new THREE.Points(nodeGeo, nodeMat);
      scene.add(nodeMesh);

      // ── Build BufferGeometry for connections ───────────────────────
      const connPosArr: number[] = [];
      const connStartArr: number[] = [];
      const connEndArr: number[] = [];
      const connStrArr: number[] = [];
      const connColorArr: number[] = [];
      const connPathArr: number[] = [];
      const seen = new Set<string>();
      let pathIdx = 0;

      nodes.forEach((node, ni) => {
        node.connections.forEach(({ node: nb, strength }) => {
          const nj = nodes.indexOf(nb);
          if (nj === -1) return;
          const key = `${Math.min(ni, nj)}-${Math.max(ni, nj)}`;
          if (seen.has(key)) return;
          seen.add(key);

          const segs = 20;
          for (let s = 0; s < segs; s++) {
            const t = s / (segs - 1);
            connPosArr.push(t, 0, 0);
            connStartArr.push(
              node.position.x,
              node.position.y,
              node.position.z
            );
            connEndArr.push(nb.position.x, nb.position.y, nb.position.z);
            connPathArr.push(pathIdx);
            connStrArr.push(strength);
            const avgLvl = Math.min(
              Math.floor((node.level + nb.level) / 2),
              palette.length - 1
            );
            const c = palette[avgLvl].clone();
            c.offsetHSL(
              THREE.MathUtils.randFloatSpread(0.04),
              THREE.MathUtils.randFloatSpread(0.1),
              THREE.MathUtils.randFloatSpread(0.1)
            );
            connColorArr.push(c.r, c.g, c.b);
          }
          pathIdx++;
        });
      });

      const connGeo = new THREE.BufferGeometry();
      connGeo.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(connPosArr, 3)
      );
      connGeo.setAttribute(
        "startPoint",
        new THREE.Float32BufferAttribute(connStartArr, 3)
      );
      connGeo.setAttribute(
        "endPoint",
        new THREE.Float32BufferAttribute(connEndArr, 3)
      );
      connGeo.setAttribute(
        "connectionStrength",
        new THREE.Float32BufferAttribute(connStrArr, 1)
      );
      connGeo.setAttribute(
        "connectionColor",
        new THREE.Float32BufferAttribute(connColorArr, 3)
      );
      connGeo.setAttribute(
        "pathIndex",
        new THREE.Float32BufferAttribute(connPathArr, 1)
      );

      const connMat = new THREE.ShaderMaterial({
        uniforms: THREE.UniformsUtils.clone(pulseUniforms),
        vertexShader: connVertexShader,
        fragmentShader: connFragmentShader,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      palette.forEach((c, i) => {
        if (i < 3) connMat.uniforms.uPulseColors.value[i].copy(c);
      });
      const connMesh = new THREE.LineSegments(connGeo, connMat);
      scene.add(connMesh);

      // ── Click → pulse ──────────────────────────────────────────────
      const raycaster = new THREE.Raycaster();
      const pointer = new THREE.Vector2();
      const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const hit = new THREE.Vector3();
      let pulseIdx = 0;

      const onClick = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(pointer, camera);
        plane.normal.copy(camera.position).normalize();
        plane.constant =
          -plane.normal.dot(camera.position) + camera.position.length() * 0.5;
        if (raycaster.ray.intersectPlane(plane, hit)) {
          const t = clock.getElapsedTime();
          pulseIdx = (pulseIdx + 1) % 3;
          nodeMat.uniforms.uPulsePositions.value[pulseIdx].copy(hit);
          nodeMat.uniforms.uPulseTimes.value[pulseIdx] = t;
          connMat.uniforms.uPulsePositions.value[pulseIdx].copy(hit);
          connMat.uniforms.uPulseTimes.value[pulseIdx] = t;
        }
      };
      canvas.addEventListener("click", onClick);

      // ── Resize ─────────────────────────────────────────────────────
      const ro = new ResizeObserver(() => {
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
        composer.setSize(w, h);
        bloomPass.resolution.set(w, h);
      });
      ro.observe(container);

      // ── Animation loop ─────────────────────────────────────────────
      const clock = new THREE.Clock();
      let animId: number;

      const animate = () => {
        animId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();
        nodeMat.uniforms.uTime.value = t;
        connMat.uniforms.uTime.value = t;
        nodeMesh.rotation.y = Math.sin(t * 0.04) * 0.05;
        connMesh.rotation.y = Math.sin(t * 0.04) * 0.05;
        controls.update();
        composer.render();
      };
      animate();

      cleanup = () => {
        cancelAnimationFrame(animId);
        ro.disconnect();
        canvas.removeEventListener("click", onClick);
        renderer.dispose();
        nodeGeo.dispose();
        nodeMat.dispose();
        connGeo.dispose();
        connMat.dispose();
        if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
      };
    })();

    return () => {
      cleanup?.();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0" />;
}
