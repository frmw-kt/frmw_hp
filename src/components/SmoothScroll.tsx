"use client";

import { useEffect, type ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    let lenis: { raf: (t: number) => void; destroy: () => void; on: (e: string, cb: unknown) => void } | null = null;

    (async () => {
      const { default: Lenis } = await import("lenis");
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 1.5,
      });

      lenis.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time: number) => {
        lenis!.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    })();

    return () => {
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
