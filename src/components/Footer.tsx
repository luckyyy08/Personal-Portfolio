"use client";

import React from "react";
import { Mail, Code } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative border-t border-white/5 bg-black/60 backdrop-blur-md py-12 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-2">
            <a href="#home" onClick={(e) => handleClick(e, "#home")} className="flex items-center gap-2 font-bold text-xl tracking-tight text-white select-none mb-4">
              <div className="p-1.5 rounded-lg bg-indigo-600/10 border border-indigo-500/20">
                <Code className="w-5 h-5 text-indigo-400" />
              </div>
              <span className="font-outfit bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
                Lokesh.Dev
              </span>
            </a>
            <p className="text-gray-400 text-xs md:text-sm max-w-sm leading-relaxed">
              Crafting premium, fully responsive, and user-friendly digital experiences. Open for developer placements, internships, and junior entry-level projects.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 select-none">
              Quick Sections
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm">
              <li>
                <a href="#home" onClick={(e) => handleClick(e, "#home")} className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleClick(e, "#about")} className="text-gray-400 hover:text-indigo-400 transition-colors">
                  About Journey
                </a>
              </li>
              <li>
                <a href="#skills" onClick={(e) => handleClick(e, "#skills")} className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleClick(e, "#projects")} className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Selected Work
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Networks Connect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 select-none">
              Social Connect
            </h4>
            <div className="flex gap-3 mb-4">
              <a
                href="https://github.com/luckyyy08"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-indigo-600/20 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/lokesh-ahire"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-indigo-600/20 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:lokeshahire85@gmail.com"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-indigo-600/20 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <span className="text-[10px] text-gray-500 font-mono">Nashik, MH, India</span>
          </div>

        </div>

        {/* Copy details */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 select-none">
          <p>© {new Date().getFullYear()} Lokesh.Dev. All Rights Reserved.</p>
          <p>Created by Lokesh Ahire | Recruiter-Ready Premium Portfolio</p>
        </div>
      </div>
    </footer>
  );
}
