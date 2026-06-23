"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Mail, ArrowRight, Code2, Download, Sparkles, ChevronDown, Terminal, Play } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";
import { gsap } from "gsap";

// Typewriter role rotation
const roles = [
  "Full Stack Developer",
  "Frontend Engineer",
  "PHP Backend Developer",
  "React Specialist",
];

// Console Command Types
interface ConsoleLine {
  text: string;
  type: "input" | "output" | "error" | "system";
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const consoleRef = useRef<HTMLDivElement>(null);

  // Console state
  const [showConsole, setShowConsole] = useState(false);
  const [consoleHistory, setConsoleHistory] = useState<ConsoleLine[]>([
    { text: "Welcome to Lokesh.Dev interactive shell!", type: "system" },
    { text: "Type 'help' to see list of available commands.", type: "system" },
  ]);
  const [consoleInput, setConsoleInput] = useState("");
  const consoleBottomRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  // Auto-scroll terminal history to bottom
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    consoleBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [consoleHistory]);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedRole.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayedRole.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedRole(currentRole.slice(0, displayedRole.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex]);

  // GSAP entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, delay: 0.3 }
      )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.3"
        )
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        );

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          "-=0.2"
        );
      }

      if (socialsRef.current) {
        tl.fromTo(
          socialsRef.current.children,
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 0.4, stagger: 0.08 },
          "-=0.2"
        );
      }

      if (statsRef.current) {
        tl.fromTo(
          statsRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 },
          "-=0.1"
        );
      }

      if (photoRef.current) {
        tl.fromTo(
          photoRef.current,
          { opacity: 0, scale: 0.85, x: 50 },
          { opacity: 1, scale: 1, x: 0, duration: 1, ease: "power2.out" },
          0.5
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Console command handler
  const handleConsoleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = consoleInput.trim().toLowerCase();
    if (!query) return;

    const newLines: ConsoleLine[] = [
      ...consoleHistory,
      { text: `visitor@lokesh.dev:~$ ${consoleInput}`, type: "input" },
    ];

    setConsoleInput("");

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
            { text: "1. RiverDine     - Luxury Restaurant Website (HTML5, CSS3, JS)", type: "output" },
            { text: "2. GramSetu      - Rural-Tech Super App (PHP, MySQL, Bootstrap 5)", type: "output" },
            { text: "3. CleanBox AI   - Inbox decluttering tool (Gmail API, OAuth 2.0)", type: "output" },
            { text: "4. SkyCast       - Weather Dashboard (JS ES6, Open-Meteo, Chart.js)", type: "output" },
            { text: "5. CineWave      - Movie search (OMDB API, LocalStorage)", type: "output" },
            { text: "6. CakeCraft     - E-commerce bakery (PHP OOP, catalog)", type: "output" },
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
    { value: "6", label: "Projects Built" },
    { value: "2", label: "Simulation Internships" },
    { value: "10+", label: "Developer Skills" },
    { value: "100%", label: "Placement Ready" },
  ];

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden"
    >
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 mesh-gradient-hero -z-20" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-40 -z-10" />

      {/* Floating Accent Orbs */}
      <div className="absolute top-[15%] left-[10%] w-3 h-3 rounded-full bg-indigo-500/30 animate-float blur-[2px]" />
      <div className="absolute top-[60%] right-[15%] w-2 h-2 rounded-full bg-violet-500/40 animate-float-delayed blur-[1px]" />
      <div className="absolute bottom-[25%] left-[20%] w-2.5 h-2.5 rounded-full bg-indigo-400/20 animate-float-slow blur-[2px]" />
      <div className="absolute top-[30%] right-[25%] w-1.5 h-1.5 rounded-full bg-purple-400/30 animate-float blur-[1px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            <div>
              {/* Status pill indicator */}
              <div className="hero-badge">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-6 shadow-sm shadow-indigo-500/10 tracking-wide">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  Available for Opportunities
                </span>
              </div>

              {/* Main title with animated text */}
              <AnimatedText
                text="Hi, I'm Lokesh"
                as="h1"
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-extrabold tracking-tight font-outfit text-white leading-[1.05]"
                delay={0.4}
                stagger={0.04}
              />
              
              <div className="mt-2 mb-5">
                <AnimatedText
                  text="Dipak Ahire"
                  as="h1"
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-extrabold tracking-tight font-outfit text-white leading-[1.05]"
                  delay={0.9}
                  stagger={0.04}
                />
              </div>

              {/* Typewriter role */}
              <div className="hero-subtitle flex items-center gap-2 mb-5">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span className="text-xl md:text-2xl font-semibold text-gray-200 font-outfit">
                  {displayedRole}
                  <span className="inline-block w-[2px] h-6 bg-indigo-400 ml-1 animate-blink align-middle" />
                </span>
              </div>

              {/* Description */}
              <p className="hero-description text-base md:text-lg text-gray-400 mb-2 max-w-xl leading-relaxed">
                Building modern web applications with clean code and creative solutions.
                Specializing in React, PHP, and full-stack development.
              </p>
            </div>

            {/* Call to action buttons */}
            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="btn-primary flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white rounded-full shadow-lg shadow-indigo-600/20"
              >
                Let&apos;s Connect
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="btn-outline flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white rounded-full"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                download="Lokesh_Ahire_Resume.pdf"
                className="btn-outline flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-indigo-300 rounded-full"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>

            {/* Social profiles */}
            <div ref={socialsRef} className="flex gap-3 pt-1">
              {[
                { href: "https://github.com/luckyyy08", Icon: GithubIcon, label: "GitHub Profile" },
                { href: "https://www.linkedin.com/in/lokesh-ahire", Icon: LinkedinIcon, label: "LinkedIn Profile" },
                { href: "mailto:lokeshahire85@gmail.com", Icon: Mail, label: "Email Lokesh" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-400 hover:text-white hover:bg-indigo-600/15 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-[18px] h-[18px] group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>

            {/* Quick statistics */}
            <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-t border-white/[0.06] w-full">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col group">
                  <span className="text-2xl md:text-3xl font-extrabold text-white gradient-text-primary group-hover:gradient-text-accent transition-all duration-300">
                    {stat.value}
                  </span>
                  <span className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Profile Right Container */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* Profile Photo */}
            <div ref={photoRef} className="relative mx-auto select-none mt-10 lg:mt-0">
              <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full p-[3px] bg-gradient-to-tr from-indigo-500 via-violet-500 to-purple-600 shadow-2xl shadow-indigo-500/15 flex items-center justify-center glow-ring animate-glow-border">
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-black/40 bg-[#07070a]">
                  <Image
                    src="/assets/image/Pic.jpg"
                    alt="Lokesh Dipak Ahire"
                    fill
                    className="object-cover object-top scale-105"
                    priority
                  />
                </div>

                {/* Animated Rotating Rings */}
                <div className="absolute -inset-4 border border-indigo-500/15 border-dashed rounded-full animate-orbit-clockwise pointer-events-none" />
                <div className="absolute -inset-8 border border-violet-500/10 rounded-full animate-orbit-counter pointer-events-none" />
                <div className="absolute -inset-12 border border-purple-500/5 border-dashed rounded-full animate-spin-slow pointer-events-none" />
              </div>

              {/* Floating Skill Indicators */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-4 px-4 py-2 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-xl flex items-center gap-2 text-xs text-indigo-300 font-semibold shadow-xl"
              >
                <Code2 className="w-3.5 h-3.5" />
                Full Stack
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-14 -left-6 px-4 py-2 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-xl flex items-center gap-2 text-xs text-violet-300 font-semibold shadow-xl"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
                React & PHP
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 -right-10 px-3 py-1.5 rounded-xl bg-black/70 border border-white/10 backdrop-blur-xl flex items-center gap-1.5 text-[10px] text-emerald-300 font-semibold shadow-xl"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                MySQL
              </motion.div>
            </div>
          </div>

        </div>

        {/* Collapsible Console HUD - Below Hero */}
        <div className="mt-12 lg:mt-16">
          <button
            onClick={() => setShowConsole(!showConsole)}
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-indigo-400 transition-colors mb-3 group"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span className="font-semibold tracking-wide uppercase">
              {showConsole ? "Hide" : "Open"} Interactive Terminal
            </span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showConsole ? "rotate-180" : ""}`} />
          </button>

          <motion.div
            initial={false}
            animate={{ height: showConsole ? "auto" : 0, opacity: showConsole ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div ref={consoleRef} className="max-w-3xl">
              <div className="hud-console glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col h-[230px]">
                {/* Console Header Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-black/60 border-b border-white/5 select-none">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400 text-[10px] font-semibold tracking-wide">
                    <Terminal className="w-3 h-3" />
                    visitor@lokesh.dev:~$
                  </div>
                  <span className="text-[9px] text-gray-500 font-mono">v2.0.0</span>
                </div>

                {/* Console Body */}
                <div className="p-3.5 flex-1 overflow-y-auto font-mono text-[11px] space-y-2 text-left bg-black/45">
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

                {/* Input Form */}
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

              {/* Quick terminal tags */}
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono text-gray-500 justify-start select-none mt-3">
                <span>Try:</span>
                {["about", "skills", "projects", "contact"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleQuickCommand(tag)}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 hover:border-indigo-500/30 hover:text-indigo-400 transition-colors cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
