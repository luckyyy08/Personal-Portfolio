"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  duration?: number;
  stagger?: number;
  splitBy?: "chars" | "words";
}

export default function AnimatedText({
  text,
  className = "",
  as: Tag = "h1",
  delay = 0,
  duration = 0.06,
  stagger = 0.03,
  splitBy = "chars",
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(".animated-unit");

    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: splitBy === "chars" ? 40 : 30,
        rotateX: splitBy === "chars" ? -60 : 0,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration,
        stagger,
        delay,
        ease: "power3.out",
      }
    );
  }, [text, delay, duration, stagger, splitBy]);

  const units =
    splitBy === "chars"
      ? text.split("").map((char, i) => (
          <span
            key={i}
            className="animated-unit inline-block"
            style={{ transformOrigin: "bottom center" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))
      : text.split(" ").map((word, i) => (
          <span
            key={i}
            className="animated-unit inline-block mr-[0.3em]"
          >
            {word}
          </span>
        ));

  return (
    <div ref={containerRef} style={{ perspective: "600px" }}>
      <Tag className={className}>{units}</Tag>
    </div>
  );
}
