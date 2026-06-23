"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Info, X, CheckCircle2, Server, Globe, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

interface Project {
  id: string;
  title: string;
  category: "full-stack" | "frontend";
  image: string;
  shortDesc: string;
  fullDesc: string;
  technologies: string[];
  features: string[];
  demoUrl: string;
  githubUrl: string;
  badge?: string;
  badgeColor?: string;
}

const projectsData: Project[] = [
  {
    id: "riverdine",
    title: "RiverDine",
    category: "frontend",
    image: "/assets/image/riverdine.png",
    shortDesc: "A premium riverside restaurant & banquet website featuring customizable theme engines, live menu searching, and booking forms.",
    fullDesc: "RiverDine is a luxury digital platform created for a riverside dining and banquet venue. Built with optimized performance and sleek dark-mode aesthetics, it features an interactive theme changer (Obsidian Gold, Midnight Rose, Royal Emerald), real-time menu searches with dietary filters, immersive scroll animations, and table/banquet reservation forms.",
    technologies: ["HTML5", "CSS3 Variables", "JavaScript ES6", "Font Awesome", "Scroll Animations"],
    features: [
      "Dynamic Theme Selector: Client-side CSS variables switcher between Gold, Rose, and Emerald styles.",
      "Live Menu Filter: Real-time query search and dietary toggles (Veg/Non-Veg) with instant UI updates.",
      "Lead Capture Forms: Interactive and validated booking structures for events and reservations.",
      "Immersive Layout: Smooth scroll-reveal animations, custom toast notifications, and premium aesthetics."
    ],
    demoUrl: "https://river-dine-restaurant-banquet.vercel.app/",
    githubUrl: "https://github.com/luckyyy08/River-Dine-Restaurant-Banquet.git",
    badge: "Luxury UI",
    badgeColor: "from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/20",
  },
  {
    id: "gramsetu",
    title: "GramSetu",
    category: "full-stack",
    image: "/assets/image/Gramsetu.png",
    shortDesc: "A digital ecosystem for rural development, bridging communication gaps between citizens and local governance.",
    fullDesc: "GramSetu is a rural-tech dashboard framework designed for low-bandwidth village connections. Built with object-oriented PHP and modular classes, it aggregates official notice boards, local database registries, SOS request logs, and online certificate requests.",
    technologies: ["PHP OOP", "MySQL", "Bootstrap 5", "SweetAlert2", "CSS Variables"],
    features: [
      "Digital Notice Board: Admin panel to publish notifications into village categories.",
      "SOS emergency system: Instant localized support contact logs.",
      "Certificate Issuance: Secure client-side application forms with validation checks.",
      "Rural optimized: Light assets framework suitable for low connectivity."
    ],
    demoUrl: "https://gram-setu-ruddy.vercel.app",
    githubUrl: "https://github.com/luckyyy08/GramSetu.git",
    badge: "Social Impact",
    badgeColor: "from-emerald-500/20 to-green-500/20 text-emerald-300 border-emerald-500/20",
  },
  {
    id: "cleanbox",
    title: "CleanBox AI",
    category: "full-stack",
    image: "/assets/image/cleanbox.png",
    shortDesc: "Intelligent email management tool designed to declutter Gmail inboxes securely using Google API scanning.",
    fullDesc: "CleanBox AI is an inbox cleaner integrating official Google Gmail API endpoints. Built on OOP PHP standards, it targets storage optimizations by organizing, scanning, and safely deleting bulk promotional/expired mail contents.",
    technologies: ["PHP OOP", "Gmail API", "OAuth 2.0", "Chart.js", "MySQL"],
    features: [
      "OAuth 2.0 integration: Secure token authentication pipeline.",
      "Advanced Query Search: Search query filters to target bulk marketing keywords.",
      "Chart.js Visualizer: Clean dashboard depicting reclaimed email space logs."
    ],
    demoUrl: "https://email-cleaner-flame.vercel.app/",
    githubUrl: "https://github.com/luckyyy08/EmailCleaner.git",
    badge: "API Featured",
    badgeColor: "from-sky-500/20 to-cyan-500/20 text-sky-300 border-sky-500/20",
  },
  {
    id: "skycast",
    title: "SkyCast Weather",
    category: "frontend",
    image: "/assets/image/skycast.png",
    shortDesc: "A premium weather dashboard integrating autocomplete lookup, voice control, and trends.",
    fullDesc: "SkyCast delivers highly accurate geographical forecasts utilizing client-side API logic. Focused on premium design concepts, it employs fluid themes that align with target forecast states (rainy, clear skies, etc.).",
    technologies: ["JavaScript ES6", "Open-Meteo API", "Chart.js", "Web Speech API"],
    features: [
      "Speech Integration: Audio search logic utilizing standard browser Web Speech APIs.",
      "Geocoding Lookup: Smart autocomplete queries for finding international cities.",
      "Trend Charts: Clean hourly temperature grids plotted on Chart.js canvases."
    ],
    demoUrl: "https://sky-cast-hazel.vercel.app/",
    githubUrl: "https://github.com/luckyyy08/SkyCast.git",
    badge: "Interactive",
    badgeColor: "from-violet-500/20 to-purple-500/20 text-violet-300 border-violet-500/20",
  },
  {
    id: "cinewave",
    title: "CineWave Discovery",
    category: "frontend",
    image: "/assets/image/cinewave.png",
    shortDesc: "Netflix-inspired movie discovery platform featuring OMDB API integration and watchlist persistence.",
    fullDesc: "CineWave integrates OMDB endpoint search data into a highly visual, Netflix-inspired user grid. Features include persistent watchlist management, dynamic detail overlays, and responsive image configurations.",
    technologies: ["JavaScript", "OMDB API", "LocalStorage", "Bootstrap 5"],
    features: [
      "Real-time Search: Smooth keyup triggers to fetch movie listings.",
      "Watchlist: Sync watchlist data directly into local browser storages.",
      "Detailed Overlays: Rich descriptions, runtime, and ratings details in custom modals."
    ],
    demoUrl: "https://cine-wave-pi.vercel.app/",
    githubUrl: "https://github.com/luckyyy08/CineWave-",
    badge: "Hot",
    badgeColor: "from-rose-500/20 to-pink-500/20 text-rose-300 border-rose-500/20",
  },
  {
    id: "cakecraft",
    title: "CakeCraft E-Shop",
    category: "full-stack",
    image: "/assets/image/cakecraft.png",
    shortDesc: "A full-stack bakery e-commerce platform featuring catalog filters and shop tracking.",
    fullDesc: "CakeCraft is a dedicated storefront solution for small businesses. It connects front-end item filtering views to an integrated MySQL catalog, offering full add-to-cart operations, checkouts, and basic management pages.",
    technologies: ["PHP", "MySQL", "Bootstrap 5", "JavaScript ES6"],
    features: [
      "Item Management: Dynamic product cards linked to catalog parameters.",
      "Cart Logic: Functional JS-driven cart addition, quantities, and price aggregations.",
      "Vendor Panel: Simplified order receipt tracking and database logs."
    ],
    demoUrl: "https://cake-craft-alpha.vercel.app/demo.html",
    githubUrl: "https://github.com/luckyyy08/CakeCraft.git",
    badge: "E-Commerce",
    badgeColor: "from-indigo-500/20 to-blue-500/20 text-indigo-300 border-indigo-500/20",
  }
];

const filterOptions = [
  { key: "all", label: "All Projects" },
  { key: "full-stack", label: "Full Stack" },
  { key: "frontend", label: "Frontend" },
] as const;

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "full-stack" | "frontend">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const gridRef = useStaggerReveal<HTMLDivElement>({ stagger: 0.12, distance: 40 });

  const filteredProjects = projectsData.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-0 w-full section-divider" />

      {/* Background lights */}
      <div className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] bg-violet-500/5 glow-blur -z-10" />
      <div className="absolute top-1/4 right-1/3 w-[300px] h-[300px] bg-indigo-500/5 glow-blur -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <SectionHeader
          title="Selected Projects"
          subtitle="Exploring full-stack dashboards, API integrations, and developer client solutions."
          badge="Portfolio"
        />

        {/* Filter buttons */}
        <div className="flex justify-center items-center gap-2 mb-14 flex-wrap">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setFilter(opt.key)}
              className={`relative px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-400 border ${
                filter === opt.key
                  ? "text-white border-indigo-500/30 shadow-lg shadow-indigo-600/15"
                  : "bg-white/[0.03] border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.06] hover:border-white/15"
              }`}
            >
              {filter === opt.key && (
                <motion.span
                  layoutId="activeFilterPill"
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                key={project.id}
              >
                <GlassCard
                  className="overflow-hidden flex flex-col h-full group"
                  tiltStrength={5}
                  glowColor="rgba(99, 102, 241, 0.08)"
                >
                  {/* Image Wrapper */}
                  <div className="relative aspect-video w-full overflow-hidden border-b border-white/[0.04] bg-neutral-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Floating badge */}
                    {project.badge && (
                      <span className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${project.badgeColor || "from-indigo-500/20 to-violet-500/20 text-indigo-300 border-indigo-500/20"} backdrop-blur-xl border text-[10px] font-bold tracking-wider uppercase shadow-lg`}>
                        {project.badge}
                      </span>
                    )}

                    {/* Quick action on hover */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all inline-flex"
                        aria-label="Open live demo"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white font-outfit mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-xs md:text-sm mb-6 leading-relaxed line-clamp-3">
                        {project.shortDesc}
                      </p>
                    </div>

                    <div>
                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-[10px] font-semibold tracking-wide bg-indigo-500/8 border border-indigo-500/15 text-indigo-400 hover:bg-indigo-500/15 hover:border-indigo-500/25 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-white/[0.04] text-gray-500 border border-white/[0.06]">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="grid grid-cols-2 gap-3 mt-auto">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="btn-outline flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-300"
                        >
                          <Info className="w-3.5 h-3.5" />
                          Details
                        </button>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
              />

              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
                className="relative max-w-3xl w-full max-h-[85vh] overflow-y-auto glass-card border border-white/[0.08] rounded-3xl shadow-2xl bg-[#0a0a0c]/95 z-10 flex flex-col text-left"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-all z-20 hover:rotate-90 duration-300"
                  aria-label="Close details"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Banner */}
                <div className="relative aspect-video w-full bg-neutral-900 border-b border-white/5">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-8">
                    <span className="px-3 py-1 rounded-lg bg-indigo-600/90 text-[10px] font-bold uppercase tracking-wider text-white border border-indigo-500/20 shadow-lg">
                      {selectedProject.category === "full-stack" ? "Full Stack" : "Frontend"}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-2.5 font-outfit">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Content Panel */}
                <div className="p-8 space-y-7">
                  {/* Overview */}
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-gray-500 mb-3">
                      Project Overview
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {selectedProject.fullDesc}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-gray-500 mb-3">
                      Key Highlights & Features
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex gap-2.5 items-start text-sm text-gray-400">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-gray-500 mb-3 flex items-center gap-1.5">
                      <Server className="w-4 h-4 text-indigo-400" />
                      Tech Architecture Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white/[0.04] border border-white/[0.06] text-gray-300 hover:border-indigo-500/20 hover:text-indigo-300 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

                  {/* Modal Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-1">
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white text-center"
                    >
                      <Globe className="w-4 h-4" />
                      Live Demo Website
                    </a>
                    {selectedProject.githubUrl && selectedProject.githubUrl !== "#" ? (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-outline flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white text-center"
                      >
                        <GithubIcon className="w-4 h-4" />
                        Explore Repository
                      </a>
                    ) : (
                      <span className="flex-1 py-3.5 px-6 rounded-xl text-sm font-semibold text-gray-500 bg-white/[0.03] border border-white/[0.05] text-center cursor-not-allowed select-none">
                        Private Repository
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
