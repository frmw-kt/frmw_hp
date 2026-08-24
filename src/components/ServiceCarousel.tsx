"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  href: string;
  category: string;
}

export default function ServiceCarousel({ services }: { services: ServiceItem[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let ctx: { revert: () => void } | null = null;

    (async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

        gsap.to(track, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${Math.abs(getScrollAmount())}`,
            scrub: 1.2,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }, section);
    })();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0a0a] overflow-hidden"
      style={{ height: "100vh" }}
    >
      {/* Labels */}
      <div className="absolute top-10 left-0 w-full flex justify-between items-center px-16 z-20 pointer-events-none select-none">
        <span className="text-[10px] uppercase tracking-[0.35em] text-white/20">Services</span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/15">scroll →</span>
      </div>

      {/* Track */}
      <div className="absolute inset-0 flex items-center overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-4 will-change-transform"
          style={{ paddingLeft: "12vw", paddingRight: "12vw", width: "max-content" }}
        >
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group relative flex flex-col justify-end rounded-2xl overflow-hidden shrink-0 transition-all duration-500 hover:border-white/20"
              style={{
                width: "320px",
                height: "380px",
                background: "#111",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "2rem",
              }}
            >
              {/* Number — absolute watermark top-right */}
              <span
                className="absolute top-4 left-5 leading-none select-none pointer-events-none"
                style={{
                  fontSize: "4.5rem",
                  fontWeight: 900,
                  color: "rgba(201,168,76,0.12)",
                  lineHeight: 1,
                }}
              >
                {service.number}
              </span>

              {/* Content — anchored to bottom */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] mb-2.5" style={{ color: "rgba(201,168,76,0.5)" }}>
                  {service.category}
                </p>
                <h3
                  className="text-lg font-bold text-white mb-3 transition-transform duration-300 group-hover:translate-x-1"
                  style={{ lineHeight: 1.35 }}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {service.description}
                </p>
              </div>

              {/* Arrow icon */}
              <div className="absolute top-6 right-6 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5">
                <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Bottom gold line */}
              <div
                className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700"
                style={{ background: "linear-gradient(90deg, #E2C16A, #C9A84C, transparent)" }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
