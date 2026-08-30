import Link from "next/link";

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  href: string;
  category: string;
}

export default function ServiceCarousel({ services }: { services: ServiceItem[] }) {
  const loop = [...services, ...services];

  return (
    <section className="relative bg-[#0a0a0a] py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <span className="text-[10px] uppercase tracking-[0.35em] text-white/20">Services</span>
      </div>

      <div className="overflow-hidden">
        <div
          className="marquee-track-pausable flex gap-4 will-change-transform"
          style={{ animationDuration: `${services.length * 6}s` }}
        >
          {loop.map((service, i) => (
            <Link
              key={`${service.href}-${i}`}
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
