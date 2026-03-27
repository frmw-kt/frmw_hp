"use client";

import { useEffect, useRef } from "react";

interface Particle {
  baseX: number;
  baseY: number;
  opacity: number;
  size: number;
  phase: number;
  speed: number;
  driftAmp: number;
  type: "edge" | "interior" | "aura";
}

export default function MysteryAvatar() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let t = 0;
    let particles: Particle[] = [];

    // Realistic head+shoulders silhouette path
    const buildPath = (W: number, H: number): Path2D => {
      const path = new Path2D();
      const cx = W / 2;

      // Head: slightly oval (taller than wide), with subtle chin taper
      const headCX = cx;
      const headCY = H * 0.225;
      const headRX = W * 0.148;
      const headRY = H * 0.178;
      path.ellipse(headCX, headCY, headRX, headRY, 0, 0, Math.PI * 2);

      // Neck + shoulders + upper body
      const neckW   = W * 0.082;
      const neckTopY   = headCY + headRY * 0.80;
      const neckBottomY = neckTopY + H * 0.068;

      path.moveTo(cx - neckW, neckTopY);
      // Left: neck → trapezius → shoulder → arm-edge → bottom
      path.bezierCurveTo(
        cx - neckW,     neckBottomY,
        cx - W * 0.17,  neckBottomY + H * 0.015,
        cx - W * 0.28,  H * 0.50
      );
      path.bezierCurveTo(
        cx - W * 0.34,  H * 0.535,
        cx - W * 0.40,  H * 0.565,
        cx - W * 0.415, H * 0.605
      );
      path.bezierCurveTo(
        cx - W * 0.44,  H * 0.66,
        cx - W * 0.445, H * 0.76,
        cx - W * 0.445, H * 1.03
      );
      // Bottom
      path.lineTo(cx + W * 0.445, H * 1.03);
      // Right: mirror
      path.bezierCurveTo(
        cx + W * 0.445, H * 0.76,
        cx + W * 0.44,  H * 0.66,
        cx + W * 0.415, H * 0.605
      );
      path.bezierCurveTo(
        cx + W * 0.40,  H * 0.565,
        cx + W * 0.34,  H * 0.535,
        cx + W * 0.28,  H * 0.50
      );
      path.bezierCurveTo(
        cx + W * 0.17,  neckBottomY + H * 0.015,
        cx + neckW,     neckBottomY,
        cx + neckW,     neckTopY
      );
      path.closePath();

      return path;
    };

    const initParticles = () => {
      const W = canvas.width;
      const H = canvas.height;
      if (W === 0 || H === 0) return;

      // Rasterize silhouette on offscreen canvas
      const off = document.createElement("canvas");
      off.width = W;
      off.height = H;
      const offCtx = off.getContext("2d")!;
      offCtx.fillStyle = "white";
      offCtx.fill(buildPath(W, H));
      const data = offCtx.getImageData(0, 0, W, H).data;

      const isIn = (x: number, y: number): boolean => {
        if (x < 0 || x >= W || y < 0 || y >= H) return false;
        return data[(y * W + x) * 4] > 128;
      };

      const next: Particle[] = [];
      const eStep = Math.max(2, Math.round(Math.min(W, H) / 90));
      const iStep = Math.max(3, Math.round(Math.min(W, H) / 55));

      // Edge & interior particles
      for (let y = 0; y < H; y += eStep) {
        for (let x = 0; x < W; x += eStep) {
          if (!isIn(x, y)) continue;
          const edge =
            !isIn(x - eStep, y) || !isIn(x + eStep, y) ||
            !isIn(x, y - eStep) || !isIn(x, y + eStep);

          if (edge) {
            next.push({
              baseX: x, baseY: y,
              opacity: 0.55 + Math.random() * 0.45,
              size: Math.random() < 0.25 ? 2 : 1,
              phase: Math.random() * Math.PI * 2,
              speed: 0.6 + Math.random() * 1.0,
              driftAmp: 0.5 + Math.random() * 0.6,
              type: "edge",
            });
          }
        }
      }

      for (let y = iStep; y < H; y += iStep) {
        for (let x = iStep; x < W; x += iStep) {
          if (!isIn(x, y)) continue;
          const edge =
            !isIn(x - eStep, y) || !isIn(x + eStep, y) ||
            !isIn(x, y - eStep) || !isIn(x, y + eStep);
          if (edge) continue;

          next.push({
            baseX: x, baseY: y,
            opacity: 0.04 + Math.random() * 0.12,
            size: 1,
            phase: Math.random() * Math.PI * 2,
            speed: 0.25 + Math.random() * 0.55,
            driftAmp: 0.8 + Math.random() * 1.2,
            type: "interior",
          });
        }
      }

      // Aura: scatter points just outside the edge
      const edgePs = next.filter(p => p.type === "edge");
      for (let i = 0; i < 300; i++) {
        const ref = edgePs[Math.floor(Math.random() * edgePs.length)];
        const angle = Math.random() * Math.PI * 2;
        const dist  = 2 + Math.random() * 7;
        const ax = ref.baseX + Math.cos(angle) * dist;
        const ay = ref.baseY + Math.sin(angle) * dist;
        if (isIn(Math.round(ax), Math.round(ay))) continue;
        next.push({
          baseX: ax, baseY: ay,
          opacity: 0.04 + Math.random() * 0.16,
          size: 1,
          phase: Math.random() * Math.PI * 2,
          speed: 0.3 + Math.random() * 0.7,
          driftAmp: 1.2 + Math.random() * 1.5,
          type: "aura",
        });
      }

      particles = next;
    };

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      if (W === 0 || H === 0) { animationId = requestAnimationFrame(draw); return; }

      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, W, H);

      for (const p of particles) {
        const s = t * p.speed;
        const dx = Math.sin(s         + p.phase)        * p.driftAmp;
        const dy = Math.cos(s * 0.73  + p.phase * 1.31) * p.driftAmp * 0.8;

        let flicker: number;
        if (p.type === "edge") {
          flicker = 0.68 + Math.sin(t * 3.0 + p.phase) * 0.32;
        } else if (p.type === "interior") {
          flicker = 0.45 + Math.sin(t * 1.1 + p.phase) * 0.55;
        } else {
          flicker = 0.3  + Math.sin(t * 1.8 + p.phase) * 0.7;
        }

        const alpha = Math.max(0, Math.min(1, p.opacity * flicker));
        ctx.fillStyle = `rgba(201,168,76,${alpha.toFixed(3)})`;
        ctx.fillRect(Math.floor(p.baseX + dx), Math.floor(p.baseY + dy), p.size, p.size);
      }

      t += 0.016;
      animationId = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
