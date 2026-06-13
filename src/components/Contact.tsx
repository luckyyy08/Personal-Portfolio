"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Sparkles, Calendar, Briefcase, Award } from "lucide-react";

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
  };

  return (
    <section id="contact" className="relative py-24 border-t border-white/5 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-indigo-500/5 glow-blur -z-10" />
      <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-violet-500/5 glow-blur -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Header Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-outfit text-white mb-3">
            Get In Touch
          </h2>
          <div className="h-1 w-16 bg-indigo-500 rounded-full mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Let's discuss junior developer opportunities, internships, placements, or projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Info Details Cards (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="glass-panel rounded-3xl p-8 border border-white/5 bg-black/40 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white font-outfit mb-3">
                  Contact Information
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mb-8 leading-relaxed">
                  Fill out the interactive form to send me an email, or get in touch directly via my communication channels below.
                </p>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-gray-500 block text-xs uppercase font-semibold">Phone / WhatsApp</span>
                      <a href="tel:+919579329098" className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors">
                        +91 9579329098
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-gray-500 block text-xs uppercase font-semibold">Email Inbox</span>
                      <a href="mailto:lokeshahire85@gmail.com" className="text-sm font-semibold text-white hover:text-violet-400 transition-colors">
                        lokeshahire85@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-gray-500 block text-xs uppercase font-semibold">Current Location</span>
                      <span className="text-sm font-semibold text-white">
                        Nashik, Maharashtra, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status footer pill */}
              <div className="mt-12 pt-6 border-t border-white/5 text-gray-500 text-xs flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                Open to developer internships and junior positions
              </div>
            </div>
          </div>

          {/* Interactive Form Card (Right) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 border border-white/5 bg-black/40">
              <h3 className="text-xl font-bold text-white font-outfit mb-4">
                Send a Message
              </h3>

              {/* Interactive Recruiter templates picker */}
              <div className="mb-6">
                <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase block mb-3.5 flex items-center gap-1.5 select-none">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  Recruiter templates (Click to autofill)
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {templates.map((tpl) => (
                    <button
                      key={tpl.id}
                      onClick={() => handleTemplateClick(tpl)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-indigo-500/30 text-gray-400 hover:text-white transition-all text-xs font-medium cursor-pointer"
                    >
                      {tpl.icon}
                      {tpl.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* FormSubmit email wrapper */}
              <form
                action="https://formsubmit.co/lokeshahire85@gmail.com"
                method="POST"
                className="space-y-5"
              >
                {/* FormSubmit configurations */}
                <input type="hidden" name="_subject" value="New portfolio inquiry submission!" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 placeholder-gray-600 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 placeholder-gray-600 transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="flex flex-col">
                  <label htmlFor="subject" className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Interview Schedule / Job Invitation / Project Inquiry"
                    className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 placeholder-gray-600 transition-all"
                  />
                </div>

                {/* Message Input */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
                    Message Details <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Lokesh, I would like to discuss..."
                    className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 placeholder-gray-600 transition-all resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:brightness-110 shadow-lg shadow-indigo-600/15 cursor-pointer transition-all duration-300"
                >
                  Submit Inquiry
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
