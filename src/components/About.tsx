"use client";

import React from "react";
import { GraduationCap, Briefcase, MapPin, Phone, Mail, Calendar, CheckCircle, User, Coffee } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";

const timelineItems = [
  {
    period: "2023 - 2026",
    title: "BSc Computer Science",
    org: "KTHM College, Nashik (Savitribai Phule Pune University)",
    desc: "Final year exams completed. Covered key computing foundations: Data Structures & Algorithms, Object-Oriented Programming (PHP/C++), Relational Databases (MySQL), Web Engineering, and Software Design.",
    icon: GraduationCap,
    color: "indigo",
    verified: false,
  },
  {
    period: "May 2026",
    title: "Software Engineering Simulation Intern",
    org: "JPMorgan Chase & Co. (via Forage)",
    desc: "Completed engineering modules including project structure setup, REST API interface integrations, and data rendering controllers. Developed familiarity with database integrations and real-time Kafka tracking scripts.",
    icon: Briefcase,
    color: "violet",
    verified: true,
  },
  {
    period: "May 2026",
    title: "Technology Job Simulation Intern",
    org: "Deloitte (via Forage)",
    desc: "Analyzed complex technical specifications, designed architectural structures for large scale web operations, and simulated consultant advisory reports on system layouts.",
    icon: Briefcase,
    color: "violet",
    verified: true,
  },
];

const quickDetails = [
  { icon: GraduationCap, label: "Degree", value: "BSc Computer Science", color: "text-indigo-400" },
  { icon: MapPin, label: "Location", value: "Nashik, Maharashtra, India", color: "text-indigo-400" },
  { icon: Mail, label: "Email", value: "lokeshahire85@gmail.com", href: "mailto:lokeshahire85@gmail.com", color: "text-indigo-400" },
  { icon: Phone, label: "Phone", value: "+91 9579329098", color: "text-indigo-400" },
];

export default function About() {
  const bioRef = useScrollReveal<HTMLDivElement>({ direction: "left", distance: 50 });
  const timelineRef = useScrollReveal<HTMLDivElement>({ direction: "right", distance: 50, delay: 0.2 });
  const detailsRef = useStaggerReveal<HTMLDivElement>({ stagger: 0.1 });

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-0 w-full section-divider" />

      {/* Background lights */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none -z-20" />
      <div className="absolute bottom-1/3 right-1/5 w-[300px] h-[300px] rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none -z-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <SectionHeader
          title="About My Journey"
          subtitle="Exploring my academic background, simulation internships, and technical aspirations."
          badge="About Me"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Bio Description / Quick Details */}
          <div ref={bioRef} className="lg:col-span-5 flex flex-col justify-start">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <User className="w-5 h-5" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white font-outfit">
                Who am I?
              </h3>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed text-sm md:text-base">
              I am a recent <strong className="text-gray-200">BSc Computer Science</strong> graduate based in Nashik, Maharashtra. I specialize in building responsive, database-driven web interfaces, combining robust code logic with modern layouts.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
              I focus on backend architectures (PHP OOP, PDO queries, SQL databases) and frontend standards (React/Next.js, Tailwind, ES6+ JavaScript). I enjoy turning intricate logic parameters into seamless user experiences.
            </p>

            {/* Quick stats table card */}
            <GlassCard className="p-6" tiltStrength={5}>
              <div ref={detailsRef} className="space-y-4">
                {quickDetails.map((detail, i) => (
                  <div key={i} className="flex items-center gap-3.5 text-sm text-gray-300">
                    <div className={`p-2 rounded-lg bg-white/5 border border-white/[0.06] ${detail.color}`}>
                      <detail.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-gray-500 block text-[10px] uppercase font-bold tracking-wider">{detail.label}</span>
                      {detail.href ? (
                        <a href={detail.href} className="hover:text-indigo-400 transition-colors font-medium">
                          {detail.value}
                        </a>
                      ) : (
                        <span className="font-medium">{detail.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white font-outfit">
                Timeline & Experiences
              </h3>
            </div>

            <div className="relative border-l-2 border-white/[0.06] pl-8 ml-3 space-y-10 text-left">
              {timelineItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <span className={`absolute -left-[41px] top-1 p-1.5 bg-[#0a0a0a] border-2 rounded-full transition-colors duration-300 ${item.color === "indigo"
                      ? "border-indigo-500/40 text-indigo-400 group-hover:border-indigo-400"
                      : "border-violet-500/40 text-violet-400 group-hover:border-violet-400"
                    }`}>
                    <item.icon className="w-3.5 h-3.5" />
                  </span>

                  <GlassCard className="p-5 md:p-6" tiltStrength={4} glowColor={item.color === "indigo" ? "rgba(99, 102, 241, 0.1)" : "rgba(168, 85, 247, 0.1)"}>
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <span className={`text-xs font-bold tracking-wider uppercase ${item.color === "indigo" ? "text-indigo-400" : "text-violet-400"
                        }`}>
                        {item.period}
                      </span>
                      {item.verified && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/15">
                          <CheckCircle className="w-3 h-3" />
                          Verified
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-bold text-white font-outfit mt-1 group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm font-semibold text-gray-400 mt-0.5">
                      {item.org}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500 mt-3 leading-relaxed">
                      {item.desc}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
