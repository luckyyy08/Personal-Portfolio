"use client";

import React, { useRef, useState } from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  tiltStrength?: number;
  glowColor?: string;
  enableTilt?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  tiltStrength = 8,
  glowColor = "rgba(99, 102, 241, 0.15)",
  enableTilt = true,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -tiltStrength;
    const rotateY = ((x - centerX) / centerX) * tiltStrength;

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      backgroundImage: `radial-gradient(circle at ${x}px ${y}px, ${glowColor}, transparent 60%)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      backgroundImage: "none",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-image 0.3s ease",
      }}
      className={`glass-card rounded-3xl border border-white/[0.06] bg-[rgba(10,10,10,0.5)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}
