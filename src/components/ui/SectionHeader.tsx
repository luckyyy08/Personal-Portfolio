"use client";

import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
}

export default function SectionHeader({ title, subtitle, badge }: SectionHeaderProps) {
  const headerRef = useScrollReveal<HTMLDivElement>({ direction: "up", distance: 40, duration: 0.8 });

  return (
    <div ref={headerRef} className="text-center mb-20">
      {badge && (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-5 tracking-wider uppercase">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-outfit text-white mb-4">
        {title}
      </h2>
      <div className="flex items-center justify-center gap-2 mb-5">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-indigo-500/50" />
        <div className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
        <div className="h-1.5 w-1.5 rounded-full bg-violet-500" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-violet-500/50" />
      </div>
      <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}
