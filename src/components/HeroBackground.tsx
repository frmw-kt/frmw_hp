"use client";

import { useEffect, useRef } from "react";

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let t = 0;
    const LINE_COUNT = 55;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const W = canvas.width;
      const H = canvas.height;

      for (let i = 0; i < LINE_COUNT; i++) {
        const progress = i / LINE_COUNT;
        const baseY = progress * H;
        const phase = progress * Math.PI * 5;

        // 中央付近ほど明るく・振幅大
        const centerFactor = 1 - Math.abs(progress - 0.5) * 2;
        const opacity =
          (0.08 + centerFactor * 0.22) *
          (0.65 + Math.sin(t * 0.5 + phase * 1.2) * 0.35);
        const amp = H * (0.022 + centerFactor * 0.065);

        ctx.beginPath();

        for (let x = 0; x <= W; x += 3) {
          const xn = x / W;
          const y =
            baseY +
            Math.sin(xn * 5   + t * 1.0  + phase)        * amp +
            Math.sin(xn * 2.2 - t * 0.55 + phase * 0.6)  * amp * 0.55 +
            Math.sin(xn * 11  + t * 1.8  + phase * 1.3)  * amp * 0.22;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.strokeStyle = `rgba(255,255,255,${Math.max(0, opacity)})`;
        ctx.lineWidth = 0.65;
        ctx.stroke();
      }

      t += 0.011;
      animationId = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(() => resize());
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
