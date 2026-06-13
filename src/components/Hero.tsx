"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Mail, Play, Terminal, ArrowRight, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { motion } from "framer-motion";

// Console Command Types
interface ConsoleLine {
  text: string;
  type: "input" | "output" | "error" | "system";
}

export default function Hero() {
  const [consoleHistory, setConsoleHistory] = useState<ConsoleLine[]>([
    { text: "Welcome to Lokesh.Dev interactive shell!", type: "system" },
    { text: "Type 'help' to see list of available commands.", type: "system" },
  ]);
  const [consoleInput, setConsoleInput] = useState("");
  const consoleBottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll terminal history to bottom
  useEffect(() => {
    consoleBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [consoleHistory]);

  const handleConsoleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = consoleInput.trim().toLowerCase();
    if (!query) return;

    const newLines: ConsoleLine[] = [
      ...consoleHistory,
      { text: `visitor@lokesh.dev:~$ ${consoleInput}`, type: "input" },
    ];

    setConsoleInput("");

    // Simulate terminal response
    setTimeout(() => {
      switch (query) {
        case "help":
          setConsoleHistory([
            ...newLines,
            { text: "Available commands:", type: "system" },
            { text: "  about     - Brief summary of Lokesh's profile & aspirations", type: "output" },
            { text: "  skills    - List core programming languages and frameworks", type: "output" },
            { text: "  projects  - Show active project names and verification status", type: "output" },
            { text: "  contact   - Display communication emails and numbers", type: "output" },
            { text: "  clear     - Wipe clean the shell prompt history", type: "output" },
          ]);
          break;
        case "about":
          setConsoleHistory([
            ...newLines,
            { text: "Identity: Lokesh Dipak Ahire", type: "output" },
            { text: "Degree: BSc Computer Science student (2023 - 2026) under SPPU", type: "output" },
            { text: "Focus: Full Stack Engineering, responsive UI, OOP PHP, relational databases", type: "output" },
            { text: "Status: Seeking developer internships and entry-level placements", type: "output" },
          ]);
          break;
        case "skills":
          setConsoleHistory([
            ...newLines,
            { text: "Languages: PHP, JavaScript (ES6+), SQL (MySQL), C++, HTML5, CSS3", type: "output" },
            { text: "Frameworks: React.js, Next.js, Tailwind CSS, Bootstrap 5", type: "output" },
            { text: "Tools: Git, GitHub, VS Code, Vercel, Google Cloud APIs", type: "output" },
          ]);
          break;
        case "projects":
          setConsoleHistory([
            ...newLines,
            { text: "1. GramSetu       - Rural-Tech Super App (PHP, MySQL, Bootstrap 5)", type: "output" },
            { text: "2. CleanBox AI    - Inbox decluttering tool (Gmail API, OAuth 2.0)", type: "output" },
            { text: "3. SkyCast        - Weather Dashboard (JS ES6, Open-Meteo, Chart.js)", type: "output" },
            { text: "4. CineWave       - Movie search (OMDB API, LocalStorage)", type: "output" },
            { text: "5. CakeCraft      - E-commerce bakery (PHP OOP, catalog)", type: "output" },
          ]);
          break;
        case "contact":
          setConsoleHistory([
            ...newLines,
            { text: "Email: lokeshahire85@gmail.com", type: "output" },
            { text: "Phone: +91 9579329098", type: "output" },
            { text: "Location: Nashik, Maharashtra, India", type: "output" },
          ]);
          break;
        case "clear":
          setConsoleHistory([]);
          break;
        default:
          setConsoleHistory([
            ...newLines,
            { text: `bash: command not found: ${query}. Type 'help' for recommendations.`, type: "error" },
          ]);
      }
    }, 150);
  };

  const handleQuickCommand = (cmd: string) => {
    setConsoleInput(cmd);
  };

  // Stat Counters data
  const stats = [
    { value: "5", label: "Projects Built" },
    { value: "2", label: "Simulation Internships" },
    { value: "10+", label: "Developer Skills" },
    { value: "100%", label: "Placement Ready" },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none -z-20" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none -z-20" />

      {/* Grid Overlay background */}
      <div className="absolute inset-0 grid-overlay opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Left Description & HUD Console */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            <div>
              {/* Status pill indicator */}
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-4 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Internships & Placement Roles
              </span>

              {/* Main title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-3 font-outfit text-white">
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
                  Lokesh Dipak Ahire
                </span>
              </h1>

              {/* Large introduction message */}
              <h2 className="text-lg md:text-xl text-gray-300 font-medium mb-3 leading-relaxed max-w-2xl">
                Building modern web applications with clean code and creative solutions
              </h2>

              <p className="text-sm text-gray-400 mb-4 max-w-xl leading-relaxed">
                BSc Computer Science graduate specializing in Frontend, Backend PHP/Node.js, and database engineering. Turning logic parameters into premium, fully responsive web layouts.
              </p>
            </div>

            {/* Call to action buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full shadow-lg shadow-indigo-600/20 hover:brightness-110 hover:shadow-indigo-600/35 transition-all duration-300"
              >
                Let's Connect
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Inspect Work
              </a>
            </div>

            {/* Social profiles linking */}
            <div className="flex gap-3">
              <a
                href="https://github.com/luckyyy08"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-indigo-600/20 hover:border-indigo-500/30 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/lokesh-ahire"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-indigo-600/20 hover:border-indigo-500/30 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4.5 h-4.5" />
              </a>
              <a
                href="mailto:lokeshahire85@gmail.com"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-indigo-600/20 hover:border-indigo-500/30 transition-all duration-300"
                aria-label="Email Lokesh"
              >
                <Mail className="w-4.5 h-4.5" />
              </a>
            </div>

            {/* Developer Console HUD Simulator */}
            <div className="w-full flex flex-col gap-3 pt-2">
              <div className="hud-console glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col h-[230px]">
                {/* Console Header Bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-black/60 border-b border-white/5 select-none">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400 text-[10px] font-semibold tracking-wide">
                    <Terminal className="w-3 h-3" />
                    visitor@lokesh.dev:~$
                  </div>
                  <span className="text-[9px] text-gray-500 font-mono">v1.2.0</span>
                </div>

                {/* Console Body Scroll area */}
                <div className="p-3.5 flex-1 overflow-y-auto font-mono text-[11px] space-y-2 text-left custom-scrollbar bg-black/45">
                  {consoleHistory.map((line, idx) => (
                    <div
                      key={idx}
                      className={`${
                        line.type === "input"
                          ? "text-gray-300"
                          : line.type === "error"
                          ? "text-red-400"
                          : line.type === "system"
                          ? "text-indigo-400"
                          : "text-emerald-400"
                      }`}
                    >
                      {line.text}
                    </div>
                  ))}
                  <div ref={consoleBottomRef} />
                </div>

                {/* Interactive Input Form */}
                <form onSubmit={handleConsoleSubmit} className="flex border-t border-white/5 bg-black/55">
                  <span className="pl-4 pr-1.5 py-2.5 text-[11px] font-mono text-indigo-400 select-none">
                    $
                  </span>
                  <input
                    type="text"
                    value={consoleInput}
                    onChange={(e) => setConsoleInput(e.target.value)}
                    placeholder="type 'help' or 'about'..."
                    className="flex-1 py-2.5 text-[11px] font-mono text-white bg-transparent border-0 focus:outline-none focus:ring-0 placeholder-gray-600"
                    autoComplete="off"
                    spellCheck="false"
                  />
                  <button
                    type="submit"
                    className="px-4 text-indigo-400 hover:text-white bg-white/5 transition-colors"
                    aria-label="Submit command"
                  >
                    <Play className="w-3 h-3 fill-current" />
                  </button>
                </form>
              </div>

              {/* Quick terminal tags helper */}
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono text-gray-500 justify-start select-none">
                <span>Try tags:</span>
                {["about", "skills", "projects", "contact"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleQuickCommand(tag)}
                    className="px-2 py-0.5 rounded bg-white/5 border border-white/5 hover:border-indigo-500/30 hover:text-indigo-400 transition-colors cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick statistics layout */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-5 border-t border-white/10 w-full">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xl md:text-2xl font-extrabold text-white bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <span className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Profile Right Container - Centered and Large */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* Sci-Fi Squircle Frame holding profile pic */}
            <div className="relative mx-auto select-none mt-10 lg:mt-0 max-w-[260px] sm:max-w-[300px] w-full group">
              {/* Soft Backlight glow */}
              <div className="absolute -inset-4 bg-indigo-500/15 blur-xl rounded-[2.5rem] -z-10 group-hover:bg-indigo-500/25 transition-all duration-300 animate-pulse-glow" />

              {/* Main Outer Border container */}
              <div className="relative w-full aspect-[4/5] rounded-[2rem] p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-violet-600 shadow-2xl shadow-indigo-500/10 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden border border-black/30 bg-[#07070a]">
                  <Image
                    src="/assets/image/Pic.jpg"
                    alt="Lokesh Dipak Ahire"
                    fill
                    className="object-cover object-top scale-102 group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>

              {/* Floating Skill Indicators */}
              <div className="absolute -top-2 -right-3 px-3 py-1.5 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md flex items-center gap-1.5 text-xs text-indigo-300 font-semibold shadow-lg">
                <Code2 className="w-3.5 h-3.5" />
                Full Stack
              </div>
              <div className="absolute bottom-6 -left-6 px-3 py-1.5 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md flex items-center gap-1.5 text-xs text-violet-300 font-semibold shadow-lg">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                PHP OOP
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
