"use client";

import { useEffect } from "react";

export default function HomeAnimations() {
  useEffect(() => {
    (async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Hero parallax — inner content drifts up gently
      gsap.to("#hero-inner", {
        yPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Reveal all gsap-reveal elements
      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      // Stats number count-up
      gsap.utils.toArray<HTMLElement>(".stat-number").forEach((el, i) => {
        const endVal = parseFloat(el.dataset.value || "0");
        const hasDecimal = el.dataset.value?.includes(".");
        gsap.fromTo(
          { val: 0 },
          { val: endVal },
          {
            val: endVal,
            duration: 1.4,
            ease: "power2.out",
            delay: i * 0.1,
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
            onUpdate: function () {
              el.textContent = hasDecimal
                ? (this as { targets: () => Array<{ val: number }> }).targets()[0].val.toFixed(1)
                : Math.round((this as { targets: () => Array<{ val: number }> }).targets()[0].val).toLocaleString();
            },
          }
        );
      });
    })();
  }, []);

  return null;
}
