import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lokesh Ahire | Premium Software Developer Portfolio",
  description: "Professional software developer portfolio of Lokesh Dipak Ahire. BSc Computer Science student & Aspiring Full Stack Developer. Discover GramSetu, CleanBox AI, and verified internships.",
  keywords: "Lokesh Ahire, Web Developer, Portfolio, Full Stack, Next.js, React, Tailwind CSS, PHP OOP, MySQL, Nashik, Savitribai Phule Pune University",
  authors: [{ name: "Lokesh Ahire" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-bg-dark text-foreground antialiased min-h-screen flex flex-col justify-between selection:bg-indigo-600/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
