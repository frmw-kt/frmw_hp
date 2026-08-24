"use client";

import { useEffect } from "react";

export default function ServicePageAnimations() {
  useEffect(() => {
    (async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Hero parallax — text drifts up
      gsap.to(".service-hero-content", {
        yPercent: -22,
        ease: "none",
        scrollTrigger: {
          trigger: ".service-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Section headings fade up
      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });

      // Feature cards — staggered fade up
      const cardGroups = document.querySelectorAll<HTMLElement>(".gsap-cards");
      cardGroups.forEach((group) => {
        const cards = group.querySelectorAll<HTMLElement>(".gsap-card");
        if (!cards.length) return;
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: { trigger: group, start: "top 82%", once: true },
          }
        );
      });

      // Process steps — slide in from left with stagger
      const processGroups = document.querySelectorAll<HTMLElement>(".gsap-process");
      processGroups.forEach((group) => {
        const steps = group.querySelectorAll<HTMLElement>(".gsap-step");
        if (!steps.length) return;
        gsap.fromTo(
          steps,
          { opacity: 0, x: 48 },
          {
            opacity: 1,
            x: 0,
            duration: 0.65,
            ease: "power2.out",
            stagger: 0.12,
            scrollTrigger: { trigger: group, start: "top 85%", once: true },
          }
        );
      });
    })();
  }, []);

  return null;
}
