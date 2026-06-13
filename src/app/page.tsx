import React from "react";
import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CodingProfiles from "@/components/CodingProfiles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Animated Canvas Particle Network Background */}
      <AnimatedBackground />

      {/* Main Navigation Header */}
      <Navbar />

      {/* Section Content Wrapper */}
      <main className="flex flex-col flex-1">
        {/* Hero Area & Terminal HUD */}
        <Hero />

        {/* Bio & Timeline (SPPU, JPMorgan, Deloitte sims) */}
        <About />

        {/* Technical Proficiency Meters */}
        <Skills />

        {/* Dynamic Project Filter Catalog & Modal Details */}
        <Projects />

        {/* Developer Network & DSA Stats (LeetCode, GitHub, LinkedIn) */}
        <CodingProfiles />

        {/* Recruiter Custom-Template Inquiries Form */}
        <Contact />
      </main>

      {/* Footer Area */}
      <Footer />
    </>
  );
}
