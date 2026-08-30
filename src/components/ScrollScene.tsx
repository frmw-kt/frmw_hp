"use client";

import { useEffect, useRef } from "react";

export default function ScrollScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animId: number;
    let renderer: { dispose: () => void } | null = null;

    (async () => {
      const THREE = await import("three");
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const W = container.clientWidth || 800;
      const H = container.clientHeight || 600;

      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100);
      camera.position.z = 20;

      const canvas = document.createElement("canvas");
      canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;";
      container.appendChild(canvas);

      const webglRenderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      webglRenderer.setSize(W, H);
      webglRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      webglRenderer.setClearColor(0x000000, 0);
      renderer = webglRenderer;

      // Particle geometry — two concentric shells
      const COUNT = 900;
      const positions = new Float32Array(COUNT * 3);
      for (let i = 0; i < COUNT; i++) {
        const r = 5 + Math.random() * 8;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const mat = new THREE.PointsMaterial({
        color: 0xc9a84c,
        size: 0.07,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      });

      const points = new THREE.Points(geo, mat);
      scene.add(points);

      // Connecting lines — sparse
      const lineMat = new THREE.LineBasicMaterial({
        color: 0xc9a84c,
        transparent: true,
        opacity: 0.06,
        blending: THREE.AdditiveBlending,
      });
      const lineGeo = new THREE.BufferGeometry();
      const linePositions: number[] = [];
      for (let i = 0; i < 80; i++) {
        const a = Math.floor(Math.random() * COUNT);
        const b = Math.floor(Math.random() * COUNT);
        linePositions.push(
          positions[a * 3], positions[a * 3 + 1], positions[a * 3 + 2],
          positions[b * 3], positions[b * 3 + 1], positions[b * 3 + 2],
        );
      }
      lineGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(linePositions), 3));
      scene.add(new THREE.LineSegments(lineGeo, lineMat));

      let progress = 0;
      ScrollTrigger.create({
        trigger: container.parentElement,
        start: "top 70%",
        end: "bottom 30%",
        scrub: 1,
        onUpdate: (self) => { progress = self.progress; },
      });

      const clock = new THREE.Clock();
      const animate = () => {
        animId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();
        points.rotation.y = t * 0.08 + progress * Math.PI * 0.6;
        points.rotation.x = Math.sin(t * 0.04) * 0.3 + progress * 0.25;
        mat.opacity = 0.25 + progress * 0.45;
        points.scale.setScalar(0.7 + progress * 0.5);
        webglRenderer.render(scene, camera);
      };
      animate();

      // Resize
      const onResize = () => {
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        webglRenderer.setSize(w, h);
      };
      window.addEventListener("resize", onResize);

      (webglRenderer as typeof webglRenderer & { _onResize?: () => void })._onResize = onResize;
    })();

    return () => {
      cancelAnimationFrame(animId);
      if (renderer) renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0" aria-hidden="true" />;
}
