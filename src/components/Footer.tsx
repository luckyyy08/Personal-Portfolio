"use client";

import React from "react";
import { Mail, Code, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Footer() {
  const footerRef = useScrollReveal<HTMLElement>({ direction: "up", distance: 30, duration: 0.7 });

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

  const socialLinks = [
    { href: "https://github.com/luckyyy08", Icon: GithubIcon, label: "GitHub" },
    { href: "https://www.linkedin.com/in/lokesh-ahire", Icon: LinkedinIcon, label: "LinkedIn" },
    { href: "mailto:lokeshahire85@gmail.com", Icon: Mail, label: "Email" },
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Journey" },
    { href: "#skills", label: "Technical Skills" },
    { href: "#projects", label: "Selected Work" },
  ];

  return (
    <footer ref={footerRef} className="relative border-t border-white/[0.04] bg-black/60 backdrop-blur-xl py-14 overflow-hidden text-left">
      {/* Animated gradient line */}
      <div className="absolute top-0 left-0 w-full section-divider" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#home" onClick={(e) => handleClick(e, "#home")} className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-white select-none mb-5 group">
              <div className="p-1.5 rounded-lg bg-indigo-600/10 border border-indigo-500/20 group-hover:border-indigo-500/40 transition-all duration-300">
                <Code className="w-5 h-5 text-indigo-400" />
              </div>
              <span className="font-outfit gradient-text-primary">
                Lokesh.Dev
              </span>
            </a>
            <p className="text-gray-500 text-xs md:text-sm max-w-sm leading-relaxed">
              Crafting premium, fully responsive, and user-friendly digital experiences. Open for developer placements, internships, and junior entry-level projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-5 select-none">
              Quick Sections
            </h4>
            <ul className="space-y-3 text-xs md:text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-gray-500 hover:text-indigo-400 transition-colors duration-300 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 h-px bg-indigo-400 group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-5 select-none">
              Social Connect
            </h4>
            <div className="flex gap-3 mb-5">
              {socialLinks.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-500 hover:text-white hover:bg-indigo-600/15 hover:border-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
            <span className="text-[10px] text-gray-600 font-mono">Nashik, MH, India</span>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600 select-none">
          <p>© {new Date().getFullYear()} Lokesh.Dev — All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> by Lokesh Ahire
          </p>
        </div>
      </div>
    </footer>
  );
}
