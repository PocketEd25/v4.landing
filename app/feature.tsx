"use client";
import Image from "next/image";
import { motion, useInView, cubicBezier } from "framer-motion";
import { useRef } from "react";

export default function FeatureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ✅ Safari-friendly cubic-bezier easing
  const easing = cubicBezier(0.25, 0.1, 0.25, 1);

  return (
    <div className="bg-white py-20 overflow-hidden relative">
      {/* Heading */}
      <h1 className="text-[#223A52] text-center font-extrabold text-xl tracking-widest uppercase">
        Features
      </h1>

      {/* ----------- DESKTOP VERSION (with animations) ----------- */}
      <div
        ref={ref}
        className="relative justify-center items-center min-h-[700px] hidden lg:flex"
      >
        {/* TOP-RIGHT Feature Card */}
        <motion.div
          initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1, x: 350, y: -300 } : {}
          }
          transition={{ duration: 1, ease: easing, delay: 0 }}
          className="absolute flex items-center gap-4 px-6 py-4"
        >
          <Image src="/fea3.png" alt="Top Feature Icon" width={150} height={150} />
          <div>
            <h1 className="text-[#223A52] font-extrabold text-lg uppercase tracking-wide">
              Numeracy in Action
            </h1>
            <p className="text-gray-700 max-w-[250px] font-light text-sm mt-2">
              Understand interest rates and loans, budget using real numbers,
              plan expenses with accuracy, and use ratios and percentages.
            </p>
          </div>
        </motion.div>

        {/* RIGHT Feature Card */}
        <motion.div
          initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
          animate={isInView ? { scale: 1, opacity: 1, x: 450, y: 0 } : {}}
          transition={{ duration: 1, ease: easing, delay: 0.2 }}
          className="absolute flex items-center gap-4 px-6 py-4"
        >
          <Image src="/fea2.png" alt="Problem Solving Icon" width={100} height={100} />
          <div className="text-left">
            <h1 className="text-[#223A52] font-extrabold text-lg uppercase tracking-wide">
              Clear CTA
            </h1>
            <p className="text-gray-700 max-w-[250px] font-light text-sm mt-2">
              Develop strategies, analyze outcomes, and adapt to financial
              challenges effectively.
            </p>
          </div>
        </motion.div>

        {/* BOTTOM-RIGHT Feature Card */}
        <motion.div
          initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
          animate={isInView ? { scale: 1, opacity: 1, x: 350, y: 300 } : {}}
          transition={{ duration: 1, ease: easing, delay: 0.4 }}
          className="absolute flex items-center gap-4 px-6 py-4"
        >
          <Image src="/fea4.png" alt="Bottom Feature Icon" width={100} height={100} />
          <div>
            <h1 className="text-[#223A52] font-extrabold text-lg uppercase tracking-wide">
              Entrepreneurial Mindset
            </h1>
            <p className="text-gray-700 max-w-[250px] font-light text-sm mt-2">
              Spot business opportunities, understand risk vs. reward, innovate
              for income, and manage side projects.
            </p>
          </div>
        </motion.div>

        {/* BOTTOM-LEFT Feature Card */}
        <motion.div
          initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
          animate={isInView ? { scale: 1, opacity: 1, x: -350, y: 300 } : {}}
          transition={{ duration: 1, ease: easing, delay: 0.6 }}
          className="absolute flex items-center gap-4 px-6 py-4"
        >
          <div className="text-right">
            <h1 className="text-[#223A52] font-extrabold text-lg uppercase tracking-wide">
              Financial Foundations
            </h1>
            <p className="text-gray-700 max-w-[250px] font-light text-sm mt-2">
              Learn money management basics, understand savings, investments,
              credit, build financial literacy, and master banking skills.
            </p>
          </div>
          <Image src="/fea6.png" alt="Bottom Left Icon" width={150} height={150} />
        </motion.div>

        {/* LEFT Feature Card */}
        <motion.div
          initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
          animate={isInView ? { scale: 1, opacity: 1, x: -450, y: 0 } : {}}
          transition={{ duration: 1, ease: easing, delay: 0.8 }}
          className="absolute flex items-center gap-4 px-6 py-4"
        >
          <div className="text-right">
            <h1 className="text-[#223A52] font-extrabold text-lg uppercase tracking-wide">
              Critical Thinking
            </h1>
            <p className="text-gray-700 max-w-[250px] font-light text-sm mt-2">
              Compare financial products, avoid scams, evaluate needs vs. wants,
              and plan for goals.
            </p>
          </div>
          <Image src="/fea1.png" alt="Critical Thinking Icon" width={100} height={100} />
        </motion.div>

        {/* TOP-LEFT Feature Card */}
        <motion.div
          initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
          animate={isInView ? { scale: 1, opacity: 1, x: -350, y: -300 } : {}}
          transition={{ duration: 1, ease: easing, delay: 1 }}
          className="absolute flex items-center gap-4 px-6 py-4"
        >
          <div className="text-right">
            <h1 className="text-[#223A52] font-extrabold text-lg uppercase tracking-wide">
              Smart Habits
            </h1>
            <p className="text-gray-700 max-w-[250px] font-light text-sm mt-2">
              Track spending and saving, set up financial routines, understand
              spending triggers, and form wealth-building habits.
            </p>
          </div>
          <Image src="/fea5.png" alt="Top Left Icon" width={150} height={150} />
        </motion.div>

        {/* Background Logo */}
        <Image
          src="/bglogo.png"
          alt="Features Illustration"
          width={300}
          height={300}
          className="max-w-[800px] h-auto relative z-10"
        />
      </div>

      {/* ----------- MOBILE VERSION (stacked, no animation) ----------- */}
      <div className="flex flex-col items-center gap-8 mt-10 px-6 lg:hidden">
        {/* Each Feature stacked vertically */}
        <div className="flex items-start gap-4">
          <Image src="/fea5.png" alt="Smart Habits" width={70} height={70} />
          <div>
            <h1 className="text-[#223A52] font-bold uppercase text-sm it">
              Smart Habits
            </h1>
            <p className="text-gray-700 text-xs">
              Track spending and saving, set up financial routines, understand
              spending triggers, and form wealth-building habits.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Image src="/fea3.png" alt="Numeracy in Action" width={70} height={70} />
          <div>
            <h1 className="text-[#223A52] font-bold uppercase text-sm it">
              Numeracy in Action
            </h1>
            <p className="text-gray-700 text-xs">
              Understand interest rates and loans, budget using real numbers,
              plan expenses with accuracy, and use ratios and percentages.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Image src="/fea1.png" alt="Critical Thinking" width={70} height={70} />
          <div>
            <h1 className="text-[#223A52] font-bold uppercase text-sm it">
              Critical Thinking
            </h1>
            <p className="text-gray-700 text-xs">
              Compare financial products, avoid scams, evaluate needs vs. wants,
              and plan for goals.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Image src="/fea2.png" alt="Clear CTA" width={70} height={70} />
          <div>
            <h1 className="text-[#223A52] font-bold uppercase text-sm it">
              Clear CTA
            </h1>
            <p className="text-gray-700 text-xs">
              Develop strategies, analyze outcomes, and adapt to financial
              challenges effectively.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Image src="/fea6.png" alt="Financial Foundations" width={70} height={70} />
          <div>
            <h1 className="text-[#223A52] font-bold uppercase text-sm it">
              Financial Foundations
            </h1>
            <p className="text-gray-700 text-xs">
              Learn money management basics, understand savings, investments,
              credit, build financial literacy, and master banking skills.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Image src="/fea4.png" alt="Entrepreneurial Mindset" width={70} height={70} />
          <div>
            <h1 className="text-[#223A52] font-bold uppercase text-sm it">
              Entrepreneurial Mindset
            </h1>
            <p className="text-gray-700 text-xs">
              Spot business opportunities, understand risk vs. reward, innovate
              for income, and manage side projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
