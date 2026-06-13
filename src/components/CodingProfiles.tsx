"use client";

import React from "react";
import { ExternalLink, Cpu, BarChart2, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

interface ProfileCardProps {
  title: string;
  username: string;
  icon: React.ReactNode;
  url: string;
  metrics: { label: string; value: string }[];
  details: string;
  colorClass: string;
  glowClass: string;
}

function ProfileCard({ title, username, icon, url, metrics, details, colorClass, glowClass }: ProfileCardProps) {
  return (
    <div className="glass-panel glass-panel-hover rounded-3xl p-6 md:p-8 flex flex-col justify-between border border-white/5 bg-black/40 text-left relative overflow-hidden group">
      {/* Glow Blur backdrop */}
      <div className={`absolute -top-12 -right-12 w-28 h-28 rounded-full blur-3xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-300 ${glowClass}`} />
      
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 ${colorClass}`}>
            {icon}
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            aria-label={`Open ${title}`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <h3 className="text-xl font-bold text-white font-outfit mb-1">
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
        <div className="grid grid-cols-3 gap-2 py-4 border-t border-white/5">
          {metrics.map((metric, i) => (
            <div key={i} className="flex flex-col text-center sm:text-left">
              <span className="text-base md:text-lg font-bold text-white font-outfit">
                {metric.value}
              </span>
              <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mt-0.5">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CodingProfiles() {
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
    <section id="coding-profiles" className="relative py-24 border-t border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/5 blur-[120px] pointer-events-none -z-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Header Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-outfit text-white mb-3">
            Coding Profiles
          </h2>
          <div className="h-1 w-16 bg-indigo-500 rounded-full mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Exploring my code repositories, data structure achievements, and professional networks.
          </p>
        </div>

        {/* Profiles Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* GitHub Profile Card */}
          <ProfileCard
            title="GitHub Codebase"
            username="luckyyy08"
            icon={<GithubIcon className="w-5.5 h-5.5" />}
            url="https://github.com/luckyyy08"
            metrics={githubMetrics}
            details="Hosting modular rural-tech dashboards, e-commerce storefront architectures, and scanning API integrations. Open-sourced and version-controlled codebase repository."
            colorClass="text-indigo-400"
            glowClass="bg-indigo-500"
          />

          {/* LeetCode Profile Card */}
          <ProfileCard
            title="LeetCode Algorithms"
            username="luckyyy08"
            icon={<Cpu className="w-5.5 h-5.5" />}
            url="https://leetcode.com/u/luckyyy08/"
            metrics={leetcodeMetrics}
            details="Practicing fundamental algorithms, array operations, hash maps, relational query optimizations, and OOP software designs. Gaining problem solving skills."
            colorClass="text-yellow-400"
            glowClass="bg-yellow-500"
          />

          {/* LinkedIn Profile Card */}
          <ProfileCard
            title="LinkedIn Professional"
            username="lokesh-ahire"
            icon={<LinkedinIcon className="w-5.5 h-5.5" />}
            url="https://www.linkedin.com/in/lokesh-ahire"
            metrics={linkedinMetrics}
            details="Connecting with technology leads, software developers, and recruiters. Highlighting computer science courses, Udemy bootcamps, and verified simulator internship credentials."
            colorClass="text-sky-400"
            glowClass="bg-sky-500"
          />

        </div>
      </div>
    </section>
  );
}
