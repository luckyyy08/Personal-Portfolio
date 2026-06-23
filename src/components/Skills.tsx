"use client";

import React, { useEffect, useRef } from "react";
import { Code2, Server, Wrench } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import { useStaggerReveal } from "@/hooks/useScrollReveal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SkillItem {
  name: string;
  percentage: number;
}

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
  gradientFrom: string;
  gradientTo: string;
  iconColor: string;
  index: number;
}

function SkillCard({ title, icon, skills, gradientFrom, gradientTo, iconColor, index }: SkillCategoryProps) {
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barsRef.current) return;
    const bars = barsRef.current.querySelectorAll(".skill-fill");
    
    bars.forEach((bar) => {
      const width = bar.getAttribute("data-width") || "0";
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: `${width}%`,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        const el = trigger.trigger;
        if (el && barsRef.current?.contains(el as Node)) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <GlassCard
      className="p-6 md:p-8 flex flex-col text-left h-full"
      tiltStrength={6}
      glowColor={`${gradientFrom}33`}
    >
      <div className="flex items-center gap-3.5 mb-8">
        <div className={`p-3 rounded-2xl bg-white/5 border border-white/[0.06] ${iconColor}`}>
          {icon}
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white font-outfit">
          {title}
        </h3>
      </div>

      <div ref={barsRef} className="space-y-6 flex-1">
        {skills.map((skill, i) => (
          <div key={i} className="flex flex-col">
            <div className="flex justify-between items-center mb-2.5 text-sm">
              <span className="font-semibold text-gray-300">{skill.name}</span>
              <span className="text-gray-500 font-mono text-xs font-bold">{skill.percentage}%</span>
            </div>
            
            {/* Progress Bar Container */}
            <div className="w-full h-2.5 rounded-full bg-white/[0.04] overflow-hidden skill-bar-track">
              <div
                className="skill-fill h-full rounded-full relative"
                data-width={skill.percentage}
                style={{
                  background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
                  width: 0,
                  boxShadow: `0 0 12px ${gradientFrom}40`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

export default function Skills() {
  const gridRef = useStaggerReveal<HTMLDivElement>({ stagger: 0.15, distance: 40 });

  const frontendSkills = [
    { name: "HTML5 / CSS3 (Grid/Flexbox)", percentage: 95 },
    { name: "JavaScript (ES6+) & TypeScript", percentage: 80 },
    { name: "React.js & Next.js", percentage: 80 },
    { name: "Tailwind CSS & Bootstrap 5", percentage: 90 },
  ];

  const backendSkills = [
    { name: "PHP (OOP, MVC Principles)", percentage: 85 },
    { name: "MySQL (Relational Database)", percentage: 80 },
    { name: "Node.js & Express API", percentage: 70 },
  ];

  const toolsSkills = [
    { name: "Git, GitHub & CLI Workflows", percentage: 85 },
    { name: "REST APIs & JSON Integrations", percentage: 80 },
    { name: "Google Cloud APIs & OAuth 2.0", percentage: 75 },
  ];

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-0 w-full section-divider" />

      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-indigo-500/5 glow-blur -z-10" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-violet-500/5 glow-blur -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <SectionHeader
          title="Technical Skillset"
          subtitle="Professional stack and developer tools I leverage to build scalable and responsive software."
          badge="Skills"
        />

        {/* Skill Card Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard
            title="Frontend Stack"
            icon={<Code2 className="w-5 h-5" />}
            skills={frontendSkills}
            gradientFrom="#6366f1"
            gradientTo="#818cf8"
            iconColor="text-indigo-400"
            index={0}
          />
          <SkillCard
            title="Backend & Database"
            icon={<Server className="w-5 h-5" />}
            skills={backendSkills}
            gradientFrom="#8b5cf6"
            gradientTo="#c084fc"
            iconColor="text-violet-400"
            index={1}
          />
          <SkillCard
            title="APIs & Dev Tools"
            icon={<Wrench className="w-5 h-5" />}
            skills={toolsSkills}
            gradientFrom="#a855f7"
            gradientTo="#e879f9"
            iconColor="text-fuchsia-400"
            index={2}
          />
        </div>
      </div>
    </section>
  );
}
