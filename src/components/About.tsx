"use client";

import React from "react";
import { GraduationCap, Briefcase, Award, MapPin, Phone, Mail, Calendar, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 border-t border-white/5 overflow-hidden">
      {/* Background lights */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] rounded-full bg-violet-600/5 blur-[100px] pointer-events-none -z-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-outfit text-white mb-3">
            About My Journey
          </h2>
          <div className="h-1 w-16 bg-indigo-500 rounded-full mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Exploring my academic background, developer simulator roles, and technical goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Bio Description / Quick Details */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 font-outfit">
              Who am I?
            </h3>
            <p className="text-gray-400 mb-5 leading-relaxed text-sm md:text-base">
              I am a recent **BSc Computer Science** graduate based in Nashik, Maharashtra. I specialize in building responsive, database-driven web interfaces, combining robust code logic with modern layouts.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
              I focus on backend architectures (PHP OOP, PDO queries, SQL databases) and frontend standards (React/Next.js, Tailwind, ES6+ JavaScript). I enjoy turning intricate logic parameters into seamless user experiences.
            </p>

            {/* Quick stats table card */}
            <div className="glass-panel rounded-2xl p-5 border border-white/10 space-y-3.5 bg-black/35">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <GraduationCap className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <div>
                  <span className="text-gray-500 block text-xs uppercase font-semibold">Degree</span>
                  <span>BSc Computer Science</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <div>
                  <span className="text-gray-500 block text-xs uppercase font-semibold">Location</span>
                  <span>Nashik, Maharashtra, India</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <div>
                  <span className="text-gray-500 block text-xs uppercase font-semibold">Email</span>
                  <a href="mailto:lokeshahire85@gmail.com" className="hover:text-indigo-400 transition-colors">
                    lokeshahire85@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <div>
                  <span className="text-gray-500 block text-xs uppercase font-semibold">Phone</span>
                  <span>+91 9579329098</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Simulator Internships Timeline */}
          <div className="lg:col-span-7 flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 font-outfit flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-400" />
              Timeline & Experiences
            </h3>

            <div className="relative border-l border-white/10 pl-6 ml-3 space-y-8 text-left">
              {/* Timeline Item: BSc Computer Science */}
              <div className="relative">
                {/* Dots indicator */}
                <span className="absolute -left-[31px] top-1 p-1 bg-black border border-indigo-500/50 rounded-full text-indigo-400">
                  <GraduationCap className="w-3.5 h-3.5" />
                </span>
                <span className="text-xs font-semibold text-indigo-400 tracking-wider uppercase">
                  2023 - 2026
                </span>
                <h4 className="text-lg font-bold text-white font-outfit mt-1">
                  BSc Computer Science
                </h4>
                <p className="text-sm font-semibold text-gray-300">
                  KTHM College, Nashik (Savitribai Phule Pune University)
                </p>
                <p className="text-xs md:text-sm text-gray-400 mt-2 leading-relaxed">
                  Final year exams completed. Covered key computing foundations: Data Structures & Algorithms, Object-Oriented Programming (PHP/C++), Relational Databases (MySQL), Web Engineering, and Software Design.
                </p>
              </div>

              {/* Timeline Item: JPMorgan Chase & Co. */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1 p-1 bg-black border border-violet-500/50 rounded-full text-violet-400">
                  <Briefcase className="w-3.5 h-3.5" />
                </span>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-semibold text-violet-400 tracking-wider uppercase">
                    May 2026
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <CheckCircle className="w-3 h-3" /> Verified Simulator
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white font-outfit mt-1">
                  Software Engineering Simulation Intern
                </h4>
                <p className="text-sm font-semibold text-gray-300">
                  JPMorgan Chase & Co. (via Forage)
                </p>
                <p className="text-xs md:text-sm text-gray-400 mt-2 leading-relaxed">
                  Completed engineering modules including project structure setup, REST API interface integrations, and data rendering controllers. Developed familiarity with database integrations and real-time Kafka tracking scripts.
                </p>
              </div>

              {/* Timeline Item: Deloitte */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1 p-1 bg-black border border-violet-500/50 rounded-full text-violet-400">
                  <Briefcase className="w-3.5 h-3.5" />
                </span>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-semibold text-violet-400 tracking-wider uppercase">
                    May 2026
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <CheckCircle className="w-3 h-3" /> Verified Simulator
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white font-outfit mt-1">
                  Technology Job Simulation Intern
                </h4>
                <p className="text-sm font-semibold text-gray-300">
                  Deloitte (via Forage)
                </p>
                <p className="text-xs md:text-sm text-gray-400 mt-2 leading-relaxed">
                  Analyzed complex technical specifications, designed architectural structures for large scale web operations, and simulated consultant advisory reports on system layouts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
