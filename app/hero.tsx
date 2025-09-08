"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Counter component for animated statistics
function AnimatedCounter({
  end,
  duration = 2000,
  label,
}: {
  end: number;
  duration?: number;
  label: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <div className="text-center">
      {/* Numbers */}
      <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#223A52]">
        {count.toLocaleString()}+
      </div>
      {/* Label */}
      <div className="text-xs sm:text-sm lg:text-base font-semibold text-[#223A52] mt-1">
        {label}
      </div>
    </div>
  );
}

// Floating Navbar Component
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Navbar (tablet optimized)
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "bg-white/70 shadow-md" : "bg-white/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Logo" width={60} height={60} className="object-contain" priority />
            <Image src="/PocketEd.png" alt="PocketEd Text Logo" width={90} height={60} className="object-contain" priority />
          </div>

          {/* Links & button (desktop only) */}
          <div className="hidden lg:flex flex-1 items-center justify-end space-x-8">
            {["Home", "About", "Services", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-900 hover:text-blue-600 px-2 py-1 text-base font-medium transition-colors"
              >
                {link}
              </a>
            ))}
            <button className="bg-[#FEE617] font-poppins hover:bg-yellow-300 text-[#132B70] px-4 py-2 rounded-full text-sm font-bold transition-colors">
              Enroll Now
            </button>
          </div>

          {/* Mobile menu (tablet + mobile) */}
          <div className="lg:hidden">
            <button
              className="text-gray-900 hover:text-blue-600 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white/90 backdrop-blur-md shadow-md rounded-b-lg mt-2">
            <div className="flex flex-col space-y-2 py-4 px-4">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <button className="bg-[#FEE617] font-poppins hover:bg-yellow-300 text-[#132B70] px-6 py-2 rounded-full text-sm font-bold transition-colors mt-2">
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default function Hero() {
  // Removed the unused isVisible state

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/60 via-blue-100/30 via-blue-50/15 to-transparent w-1/3 h-1/2 z-0 blur-sm"></div>

      <Navbar />

      {/* Hero Section */}
      <main className="relative z-10">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[70vh] pt-20 lg:pt-0">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left pt-0 lg:pt-0">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-playfair text-[#223A52] leading-tight fpp">
                Discover the World of{" "}
                <span className="text-[#223A52]">Financial Wisdom</span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Join us in shaping the future of financial literacy! Follow us
                for updates and resources to empower students with essential
                money management skills.
              </p>

              <div className="pt-1">
                <button className="bg-[#FEE617] font-poppins hover:bg-yellow-300 text-[#132B70] px-6 py-2 rounded-full text-sm font-bold transition-colors">
                  Get Started
                </button>
              </div>

              {/* Counters - Desktop only */}
              <div className="hidden lg:grid grid-cols-3 gap-4 font-poppins mt-6 text-center lg:text-left">
                <AnimatedCounter end={50000} label="Users" />
                <AnimatedCounter end={25000} label="Customers" />
                <AnimatedCounter end={150} label="Cities" />
              </div>
            </div>

            {/* Right Side (Image Section) */}
            <div className="flex flex-col items-center lg:items-end mt-8 lg:mt-0 w-full">
              <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl">
                <Image
                  src="/image1.png"
                  alt="Financial Growth and Success"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain relative z-10"
                  priority
                />
              </div>

              {/* Mobile & Tablet Counters */}
              <div className="grid grid-cols-3 gap-4 font-poppins mt-6 mb-10 text-center lg:hidden w-full">
                <AnimatedCounter end={50000} label="Users" />
                <AnimatedCounter end={25000} label="Customers" />
                <AnimatedCounter end={150} label="Cities" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}