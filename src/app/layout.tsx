import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lokesh Ahire | Full Stack Developer Portfolio",
  description: "Professional developer portfolio of Lokesh Dipak Ahire — Full Stack Developer specializing in React, Next.js, PHP, and MySQL. BSc Computer Science graduate building premium web applications.",
  keywords: "Lokesh Ahire, Full Stack Developer, Web Developer, Portfolio, React, Next.js, Tailwind CSS, PHP OOP, MySQL, JavaScript, Frontend Engineer, Nashik",
  authors: [{ name: "Lokesh Ahire", url: "https://github.com/luckyyy08" }],
  creator: "Lokesh Ahire",
  openGraph: {
    type: "website",
    title: "Lokesh Ahire | Full Stack Developer Portfolio",
    description: "Building modern web applications with clean code and creative solutions. React, PHP, MySQL specialist.",
    siteName: "Lokesh.Dev",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokesh Ahire | Full Stack Developer",
    description: "Full Stack Developer — React, Next.js, PHP, MySQL. Building premium web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
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
