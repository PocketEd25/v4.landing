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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <nav
    //   className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    //     scrolled
    //       ? "bg-white/30 backdrop-blur-md"
    //       : "bg-white/10 backdrop-blur-md"
    //   }`}
    // >
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex flex-row items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="object-contain relative z-10"
              priority
            />
            <Image
              src="/PocketEd.png"
              alt="PocketEd Text Logo"
              width={100}
              height={80}
              className="object-contain relative z-10"
              priority
            />
          </div>

          {/* Navigation Links (centered) */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-lg font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-lg font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-lg font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-lg font-medium transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Enroll Now (right) */}
          <div className="hidden md:flex mr-10">
            <button className="bg-[#FEE617] font-poppins hover:bg-yellow-300 text-[#132B70] px-6 py-2 rounded-full text-sm font-bold transition-colors">
              Enroll Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-900 hover:text-blue-600">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/60 via-blue-100/30 via-blue-50/15 to-transparent w-1/3 h-1/2 z-0 blur-sm"></div>

      <Navbar />

      {/* Hero Section */}
<main className="relative z-10">
  <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start lg:items-center min-h-[70vh] pt-4"> 
      
<div className="space-y-8 text-center lg:text-left pt-20 lg:pt-0">
  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-playfair text-[#223A52] leading-tight ">
    Discover the World of{" "}
    <span className="text-[#223A52]">Financial Wisdom</span>
  </h1>

  <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
    Join us in shaping the future of financial literacy! Follow us
    for updates and resources to empower students with essential
    money management skills.
  </p>
        <div className="pt-1">
          <button className="bg-[#FEE617] font-poppins hover:bg-yellow-300 text-[#132B70] px-6 py-2 rounded-full text-sm font-bold transition-colors">
            Get Started
          </button>
        </div>

        {/* Counters for large screens */}
{/* Counters for large screens */}
<div className="hidden lg:grid grid-cols-3 gap-4 font-poppins mt-6 text-center lg:text-left">
  <AnimatedCounter end={50000} label="Users" />
  <AnimatedCounter end={25000} label="Customers" />
  <AnimatedCounter end={150} label="Cities" />
</div>

      </div>

      {/* Right Side (Image Section) */}
      <div className="flex flex-col items-center lg:items-end mt-8 lg:mt-0 w-full">
        <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-3xl">
          <Image
            src="/image1.png"
            alt="Financial Growth and Success"
            width={800}
            height={600}
            className="w-full h-auto object-contain relative z-10"
            priority
          />
        </div>

{/* Counters for mobile (below image) */}
<div className="grid grid-cols-3 gap-4 font-poppins mt-6 mb-10 text-center lg:hidden w-full">
  <div>
    <AnimatedCounter end={50000} label="Users" />
  </div>
  <div>
    <AnimatedCounter end={25000} label="Customers" />
  </div>
  <div>
    <AnimatedCounter end={150} label="Cities" />
  </div>
</div>


      </div>
    </div>
  </div>
</main>


    </div>
  );
}
