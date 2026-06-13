"use client";

import React from "react";
import { Code2, Server, Wrench, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

interface SkillItem {
  name: string;
  percentage: number;
}

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
  color: string;
}

function SkillCard({ title, icon, skills, color }: SkillCategoryProps) {
  return (
    <div className="glass-panel glass-panel-hover rounded-3xl p-6 md:p-8 flex flex-col border border-white/5 bg-black/40 text-left">
      <div className="flex items-center gap-3.5 mb-6">
        <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 ${color}`}>
          {icon}
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white font-outfit">
          {title}
        </h3>
      </div>

      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex justify-between items-center mb-2 text-sm">
              <span className="font-semibold text-gray-300">{skill.name}</span>
              <span className="text-gray-400 font-mono text-xs">{skill.percentage}%</span>
            </div>
            
            {/* Progress Bar Container */}
            <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className={`h-full rounded-full bg-gradient-to-r ${
                  title.includes("Frontend") 
                    ? "from-indigo-500 to-violet-500" 
                    : title.includes("Backend") 
                    ? "from-violet-500 to-fuchsia-500" 
                    : "from-fuchsia-500 to-rose-500"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
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
    <section id="skills" className="relative py-24 border-t border-white/5 overflow-hidden">
      {/* Background glow lamps */}
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-indigo-500/5 glow-blur -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Header Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-outfit text-white mb-3">
            Technical Skillset
          </h2>
          <div className="h-1 w-16 bg-indigo-500 rounded-full mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Professional stack and developer tools I leverage to build scalable and responsive software.
          </p>
        </div>

        {/* Skill Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard
            title="Frontend Stack"
            icon={<Code2 className="w-5 h-5" />}
            skills={frontendSkills}
            color="text-indigo-400"
          />
          <SkillCard
            title="Backend & Database"
            icon={<Server className="w-5 h-5" />}
            skills={backendSkills}
            color="text-violet-400"
          />
          <SkillCard
            title="APIs & Dev Tools"
            icon={<Wrench className="w-5 h-5" />}
            skills={toolsSkills}
            color="text-fuchsia-400"
          />
        </div>
      </div>
    </section>
  );
}
