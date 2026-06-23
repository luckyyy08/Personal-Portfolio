"use client";

import React, { useEffect, useRef } from "react";
import { ExternalLink, Cpu } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import { useStaggerReveal } from "@/hooks/useScrollReveal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProfileCardProps {
  title: string;
  username: string;
  icon: React.ReactNode;
  url: string;
  metrics: { label: string; value: string }[];
  details: string;
  colorClass: string;
  glowColor: string;
}

function ProfileCard({ title, username, icon, url, metrics, details, colorClass, glowColor }: ProfileCardProps) {
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!metricsRef.current) return;
    const counters = metricsRef.current.querySelectorAll(".counter-value");

    counters.forEach((counter) => {
      const target = counter.textContent || "";
      // Only animate if it starts with a number
      const numericMatch = target.match(/^(\d+)/);
      if (!numericMatch) return;

      const targetNum = parseInt(numericMatch[1]);
      const suffix = target.replace(numericMatch[1], "");

      gsap.fromTo(
        counter,
        { textContent: "0" + suffix },
        {
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: counter,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          onUpdate: function () {
            const progress = this.progress();
            const currentVal = Math.round(targetNum * progress);
            counter.textContent = currentVal + suffix;
          },
          onComplete: function () {
            counter.textContent = target;
          },
        }
      );
    });
  }, []);

  return (
    <GlassCard
      className="p-6 md:p-8 flex flex-col justify-between text-left relative overflow-hidden group h-full"
      tiltStrength={6}
      glowColor={glowColor}
    >
      {/* Glow Blur backdrop */}
      <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none ${colorClass === "text-indigo-400" ? "bg-indigo-500" : colorClass === "text-yellow-400" ? "bg-yellow-500" : "bg-sky-500"}`} />
      
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className={`p-3 rounded-2xl bg-white/5 border border-white/[0.06] ${colorClass} group-hover:scale-110 transition-transform duration-300`}>
            {icon}
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all group/link"
            aria-label={`Open ${title}`}
          >
            <ExternalLink className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
          </a>
        </div>

        <h3 className="text-xl font-bold text-white font-outfit mb-1 group-hover:text-indigo-300 transition-colors">
          {title}
        </h3>
        <span className="text-xs font-mono text-gray-500 block mb-4">
          @{username}
        </span>

        <p className="text-gray-400 text-xs md:text-sm mb-6 leading-relaxed">
          {details}
        </p>
      </div>

      <div>
        {/* Metric grids */}
        <div ref={metricsRef} className="grid grid-cols-3 gap-3 py-5 border-t border-white/[0.06]">
          {metrics.map((metric, i) => (
            <div key={i} className="flex flex-col text-center sm:text-left">
              <span className="counter-value text-base md:text-lg font-bold text-white font-outfit">
                {metric.value}
              </span>
              <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mt-0.5">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

export default function CodingProfiles() {
  const gridRef = useStaggerReveal<HTMLDivElement>({ stagger: 0.15, distance: 40 });

  const githubMetrics = [
    { label: "Repos", value: "12" },
    { label: "Commits", value: "240+" },
    { label: "Starred", value: "18" },
  ];

  const leetcodeMetrics = [
    { label: "Solved", value: "120+" },
    { label: "Easy/Med", value: "85/35" },
    { label: "Rating", value: "Top 25%" },
  ];

  const linkedinMetrics = [
    { label: "Sims Done", value: "2" },
    { label: "Endorsed", value: "10+" },
    { label: "Status", value: "Seeking" },
  ];

  return (
    <section id="coding-profiles" className="relative py-28 overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-0 w-full section-divider" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/5 blur-[120px] pointer-events-none -z-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <SectionHeader
          title="Coding Profiles"
          subtitle="Exploring my code repositories, data structure achievements, and professional networks."
          badge="Networks"
        />

        {/* Profiles Card Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProfileCard
            title="GitHub Codebase"
            username="luckyyy08"
            icon={<GithubIcon className="w-5.5 h-5.5" />}
            url="https://github.com/luckyyy08"
            metrics={githubMetrics}
            details="Hosting modular rural-tech dashboards, e-commerce storefront architectures, and scanning API integrations. Open-sourced and version-controlled codebase repository."
            colorClass="text-indigo-400"
            glowColor="rgba(99, 102, 241, 0.1)"
          />

          <ProfileCard
            title="LeetCode Algorithms"
            username="luckyyy08"
            icon={<Cpu className="w-5.5 h-5.5" />}
            url="https://leetcode.com/u/luckyyy08/"
            metrics={leetcodeMetrics}
            details="Practicing fundamental algorithms, array operations, hash maps, relational query optimizations, and OOP software designs. Gaining problem solving skills."
            colorClass="text-yellow-400"
            glowColor="rgba(234, 179, 8, 0.1)"
          />

          <ProfileCard
            title="LinkedIn Professional"
            username="lokesh-ahire"
            icon={<LinkedinIcon className="w-5.5 h-5.5" />}
            url="https://www.linkedin.com/in/lokesh-ahire"
            metrics={linkedinMetrics}
            details="Connecting with technology leads, software developers, and recruiters. Highlighting computer science courses, Udemy bootcamps, and verified simulator internship credentials."
            colorClass="text-sky-400"
            glowColor="rgba(14, 165, 233, 0.1)"
          />
        </div>
      </div>
    </section>
  );
}
