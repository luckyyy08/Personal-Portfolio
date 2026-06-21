"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Info, X, CheckCircle2, Server, Globe } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { motion, AnimatePresence } from "framer-motion";

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
    badge: "Luxury UI"
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
    badge: "Social Impact"
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
    badge: "API Featured"
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
    badge: "Interactive"
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
    badge: "Hot"
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
    badge: "E-Commerce"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "full-stack" | "frontend">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section id="projects" className="relative py-24 border-t border-white/5 overflow-hidden">
      {/* Lights background */}
      <div className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] bg-violet-500/5 glow-blur -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Header Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-outfit text-white mb-3">
            Selected Projects
          </h2>
          <div className="h-1 w-16 bg-indigo-500 rounded-full mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Exploring full-stack dashboards, API integrations, and developer client solutions.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center items-center gap-2 mb-12 flex-wrap">
          {["all", "full-stack", "frontend"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                filter === cat
                  ? "bg-gradient-to-r from-indigo-600 to-violet-600 border-indigo-500/20 text-white shadow-lg shadow-indigo-600/15"
                  : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat === "all" ? "All Projects" : cat.replace("-", " ")}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                key={project.id}
                className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/5 bg-black/40 flex flex-col group"
              >
                {/* Image Wrapper */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-white/5 bg-neutral-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating category badge */}
                  {project.badge && (
                    <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-wider text-indigo-300 uppercase shadow-sm">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white font-outfit mb-2 group-hover:text-indigo-400 transition-colors">
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
                          className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide bg-indigo-500/10 border border-indigo-500/20 text-indigo-400"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/5 text-gray-400">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="grid grid-cols-2 gap-3 mt-auto">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/10 text-xs font-semibold bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                      >
                        <Info className="w-3.5 h-3.5" />
                        Details
                      </button>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 shadow-md shadow-indigo-600/10 hover:brightness-110 transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Dark Overlay backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />

              {/* Modal Card content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: "spring", duration: 0.45 }}
                className="relative max-w-3xl w-full max-h-[85vh] overflow-y-auto glass-panel border border-white/10 rounded-3xl shadow-2xl bg-[#0a0a0c] z-10 flex flex-col text-left"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-colors z-20"
                  aria-label="Close details"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Hero Project Banner */}
                <div className="relative aspect-video w-full bg-neutral-900 border-b border-white/5">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] to-transparent" />
                  <div className="absolute bottom-6 left-8">
                    <span className="px-2.5 py-1 rounded bg-indigo-600/90 text-[10px] font-bold uppercase tracking-wider text-white border border-indigo-500/20 shadow-sm">
                      {selectedProject.category === "full-stack" ? "Full Stack" : "Frontend"}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-2.5 font-outfit">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Content Panel */}
                <div className="p-8 space-y-6">
                  {/* Overview */}
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-gray-500 mb-2.5">
                      Project Overview
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {selectedProject.fullDesc}
                    </p>
                  </div>

                  {/* Features List */}
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-gray-500 mb-3">
                      Key Highlights & Features
                    </h4>
                    <ul className="space-y-2.5">
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
                          className="px-3 py-1 rounded-xl text-xs font-semibold bg-white/5 border border-white/5 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="h-px bg-white/5 my-2" />

                  {/* Modal Action Footer */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:brightness-110 shadow-lg shadow-indigo-600/15 transition-all text-center"
                    >
                      <Globe className="w-4 h-4" />
                      Live Demo Website
                    </a>
                    {selectedProject.githubUrl && selectedProject.githubUrl !== "#" ? (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center"
                      >
                        <GithubIcon className="w-4 h-4" />
                        Explore Repository
                      </a>
                    ) : (
                      <span className="flex-1 py-3 px-6 rounded-xl text-sm font-semibold text-gray-500 bg-white/5 border border-white/5 text-center cursor-not-allowed select-none">
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
