"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

// ✅ Reusable AnimatedCounter with trigger
function AnimatedCounter({
  end,
  duration = 2000,
  label,
  trigger,
}: {
  end: number;
  duration?: number;
  label: string;
  trigger: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return; // run only when in view

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
  }, [end, duration, trigger]);

  return (
    <div className="text-center">
      <p className="text-4xl font-bold text-white">{count}%</p>
      <p className="text-sm mt-1">{label}</p>
    </div>
  );
}

export default function StatisticSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // triggers once

  return (
    <>
      <div
        ref={ref}
        className="relative bg-[#132B70] text-white py-20 px-5 md:px-20 overflow-hidden"
      >
        {/* Blurred background accents */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#98D4F8] rounded-full mix-blend-screen filter blur-[120px] opacity-50"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#98D4F8] rounded-full mix-blend-screen filter blur-[120px] opacity-50"></div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#98D4F8] rounded-full mix-blend-screen filter blur-[150px] opacity-50"></div>

        <div className="relative z-10 text-center">
          {/* Top line + Heading */}
          <div className="flex justify-center items-center">
            <div className="bg-[#98D4F8] h-[150px] w-[2px]" />
          </div>
          <h2 className="text-[#98D4F8] mt-3 text-sm tracking-widest uppercase">
            Statistics
          </h2>

          {/* ✅ Stats Flexbox */}
          <div className="mt-10 flex flex-wrap justify-evenly gap-10 md:gap-16">
            <AnimatedCounter end={36} label="Kerala" trigger={isInView} />
            <AnimatedCounter end={50} label="Goa" trigger={isInView} />
            <AnimatedCounter end={17} label="Maharashtra" trigger={isInView} />
            <AnimatedCounter end={22} label="Tamil Nadu" trigger={isInView} />
            <AnimatedCounter
              end={35}
              label="India Average"
              trigger={isInView}
            />
            <AnimatedCounter end={10} label="Growing At" trigger={isInView} />
          </div>

          <div className="flex justify-center items-center mt-10">
            <Image
              src="/stat.png"
              alt="Statistics Graph"
              width={600}
              height={400}
              className="w-full max-w-2xl h-auto"
            />
            <p className="mt-6 max-w-2xl px-3 pl-5 font-thin text-xl text-left text-white text-justify">
              Financial literacy varies across the nation. Our goal is to
              elevate these numbers, one student at a time. We believe that with
              the right guidance, anyone can gain the skills to make informed
              financial decisions. By fostering confidence and clarity, we’re
              helping shape a future where financial empowerment is within
              everyone’s reach.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
