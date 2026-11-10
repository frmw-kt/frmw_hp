"use client";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";

export const sections = [
  ["top", "トップ"], ["about", "Frameworkとは"], ["services", "2つの支援"],
  ["approach", "支援の考え方"], ["results", "実績・成果物"], ["process", "ご相談の流れ"],
  ["offers", "支援の条件"], ["faq", "よくある質問"],
] as const;

export default function HomeIndex() {
  const [active, setActive] = useState<string>("top");
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const threshold = window.innerHeight * 0.35;
      let current: string = "top";
      for (const [id] of sections) {
        if ((document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= threshold) current = id;
      }
      setActive(current);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        if (!motion.matches) {
          const animation = entry.target.animate(
            [{ opacity: 0, transform: "translateY(16px)" }, { opacity: 1, transform: "translateY(0)" }],
            { duration: 450, easing: "ease-out" },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        }
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.15 });
    document.querySelectorAll("[data-home-reveal]").forEach(el => observer.observe(el));
    const stop = () => { if (motion.matches) animations.forEach(animation => animation.cancel()); };
    motion.addEventListener("change", stop);
    return () => { observer.disconnect(); animations.forEach(animation => animation.cancel()); motion.removeEventListener("change", stop); };
  }, []);
  return <nav aria-label="トップページの目次" className={styles.index}>
    <p className={styles.indexTitle}>INDEX<span>↙</span></p>
    <ol>{sections.map(([id, label], i) => <li key={id}><a href={`#${id}`} aria-current={active === id ? "location" : undefined}><span>{String(i + 1).padStart(2, "0")}</span>{label}<b aria-hidden="true">↗</b></a></li>)}</ol>
  </nav>;
}
