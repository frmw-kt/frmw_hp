"use client";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** 共通フッターを、トップページ以外で表示する（トップは独自のフッターを持つ）。ヘッダーは全ページ共通。 */
export default function HomeChrome({ children }: { children: ReactNode }) {
  return usePathname() === "/" ? null : children;
}
