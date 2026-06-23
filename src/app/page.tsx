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
        {/* Hero — Identity & CTA */}
        <Hero />

        {/* About — Bio & Timeline */}
        <About />

        {/* Skills — Technical Proficiency */}
        <Skills />

        {/* Projects — Portfolio Catalog */}
        <Projects />

        {/* Profiles — GitHub, LeetCode, LinkedIn */}
        <CodingProfiles />

        {/* Contact — Inquiry Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
