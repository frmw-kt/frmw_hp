"use client";

import { useState } from "react";
import { faqs as allFaqs, type FaqItem } from "@/lib/faq";

const GOLD_DARK = "#A8892E";

export default function FaqAccordion({
  items,
  limit,
}: {
  items?: FaqItem[];
  limit?: number;
}) {
  const source = items ?? allFaqs;
  const list = limit ? source.slice(0, limit) : source;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[#e5e5e5] border-t border-b border-[#e5e5e5]">
      {list.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-start gap-4 py-6 text-left group"
            >
              <span className="text-sm font-mono shrink-0 mt-0.5" style={{ color: GOLD_DARK }}>Q</span>
              <span className="flex-1 text-sm md:text-base font-semibold text-[#0a0a0a] group-hover:text-[#0a0a0a]/80 transition-colors">
                {faq.question}
              </span>
              <svg
                className={`w-4 h-4 text-[#737373] shrink-0 mt-1 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="flex items-start gap-4 pb-6 pl-0">
                  <span className="text-sm font-mono shrink-0 text-[#737373]/40">A</span>
                  <p className="flex-1 text-sm text-[#737373] leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
