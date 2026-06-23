"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Sparkles, Calendar, Briefcase, Award } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";

interface MessageTemplate {
  id: string;
  label: string;
  icon: React.ReactNode;
  subject: string;
  message: string;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [activeTemplate, setActiveTemplate] = useState<string | null>(null);

  const leftRef = useScrollReveal<HTMLDivElement>({ direction: "left", distance: 50 });
  const rightRef = useScrollReveal<HTMLDivElement>({ direction: "right", distance: 50, delay: 0.15 });

  const templates: MessageTemplate[] = [
    {
      id: "interview",
      label: "Schedule Chat",
      icon: <Calendar className="w-3.5 h-3.5" />,
      subject: "Interview Invitation - Technical Chat",
      message: "Hi Lokesh, I saw your developer portfolio and verified simulation internships. I would like to schedule a technical chat or interview with you to discuss our open positions. Let us know your availability.",
    },
    {
      id: "opportunity",
      label: "Job / Internship",
      icon: <Briefcase className="w-3.5 h-3.5" />,
      subject: "Developer Placement / Internship Opportunity",
      message: "Hi Lokesh, We have an opening for a Junior Full Stack Developer / Frontend Developer at our firm. I was impressed by your project catalog and would love to review your application for the role.",
    },
    {
      id: "freelance",
      label: "Freelance Project",
      icon: <Award className="w-3.5 h-3.5" />,
      subject: "Custom Web Application Project",
      message: "Hi Lokesh, I have a custom database-driven web application project that I need built (PHP OOP/MySQL/Bootstrap/Tailwind). Let us discuss your timeline, rates, and availability.",
    },
  ];

  const handleTemplateClick = (template: MessageTemplate) => {
    setSubject(template.subject);
    setMessage(template.message);
    setActiveTemplate(template.id);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: "+91 9579329098",
      href: "tel:+919579329098",
      colorClass: "bg-indigo-500/10 border-indigo-500/15 text-indigo-400",
    },
    {
      icon: Mail,
      label: "Email Inbox",
      value: "lokeshahire85@gmail.com",
      href: "mailto:lokeshahire85@gmail.com",
      colorClass: "bg-violet-500/10 border-violet-500/15 text-violet-400",
    },
    {
      icon: MapPin,
      label: "Current Location",
      value: "Nashik, Maharashtra, India",
      href: null,
      colorClass: "bg-rose-500/10 border-rose-500/15 text-rose-400",
    },
  ];

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-0 w-full section-divider" />

      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-indigo-500/5 glow-blur -z-10" />
      <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-violet-500/5 glow-blur -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <SectionHeader
          title="Get In Touch"
          subtitle="Let's discuss junior developer opportunities, internships, placements, or projects."
          badge="Contact"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Info Cards (Left) */}
          <div ref={leftRef} className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <GlassCard className="p-8 flex-1 flex flex-col justify-between" tiltStrength={4}>
              <div>
                <h3 className="text-xl font-bold text-white font-outfit mb-3">
                  Contact Information
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mb-8 leading-relaxed">
                  Fill out the interactive form to send me an email, or get in touch directly via my communication channels below.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className={`p-3.5 rounded-xl border ${info.colorClass} group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-gray-500 block text-[10px] uppercase font-bold tracking-wider">{info.label}</span>
                        {info.href ? (
                          <a href={info.href} className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-sm font-semibold text-white">
                            {info.value}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Status footer */}
              <div className="mt-12 pt-6 border-t border-white/[0.06] text-gray-500 text-xs flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                Open to developer internships and junior positions
              </div>
            </GlassCard>
          </div>

          {/* Form Card (Right) */}
          <div ref={rightRef} className="lg:col-span-7">
            <GlassCard className="p-8" tiltStrength={3}>
              <h3 className="text-xl font-bold text-white font-outfit mb-5">
                Send a Message
              </h3>

              {/* Template Picker */}
              <div className="mb-7">
                <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 select-none mb-4">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  Quick templates (Click to autofill)
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {templates.map((tpl) => (
                    <button
                      key={tpl.id}
                      onClick={() => handleTemplateClick(tpl)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full border text-xs font-medium cursor-pointer transition-all duration-300 ${
                        activeTemplate === tpl.id
                          ? "bg-indigo-500/15 border-indigo-500/30 text-indigo-300"
                          : "bg-white/[0.03] border-white/[0.08] text-gray-400 hover:text-white hover:border-indigo-500/20"
                      }`}
                    >
                      {tpl.icon}
                      {tpl.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form */}
              <form
                action="https://formsubmit.co/lokeshahire85@gmail.com"
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="_subject" value="New portfolio inquiry submission!" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label htmlFor="contact-name" className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none input-glow placeholder-gray-600 transition-all duration-300"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="contact-email" className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2.5">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none input-glow placeholder-gray-600 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="contact-subject" className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2.5">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Interview Schedule / Job Invitation / Project Inquiry"
                    className="bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none input-glow placeholder-gray-600 transition-all duration-300"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="contact-message" className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2.5">
                    Message Details <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Lokesh, I would like to discuss..."
                    className="bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none input-glow placeholder-gray-600 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-bold text-white cursor-pointer"
                >
                  Submit Inquiry
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
}
