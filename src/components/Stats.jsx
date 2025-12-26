"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

const stats = [
  { label: "Startups & Investors", value: "150+" },
  { label: "Media Houses", value: "80+" },
  { label: "Attendees", value: "30k+" },
  { label: "Collaborations with Universities", value: "150+" },
];

// animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.16 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 90, damping: 14 },
  },
};

// number formatter
const fmt = (n) => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}k`;
  return String(n);
};

// count up hook (SAFE)
const useCountUp = (end, duration, start) => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (!start) return;

    let raf;
    const t0 = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);

    const step = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      setValue(Math.floor(ease(p) * end));
      if (p < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start]);

  return value;
};

// single stat card (HOOKS LIVE HERE ✅)
const StatCard = ({ stat, index, inView }) => {
  const numeric =
    parseInt(stat.value.replace(/[^0-9]/g, ""), 10) || 0;

  const current = useCountUp(
    numeric,
    1200 + index * 120,
    inView
  );

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
      }}
      className="relative z-10 bg-white rounded-xl p-5 border-l-4 border-[#fac176]"
    >
      <div className="text-3xl font-extrabold text-gray-900">
        {inView ? fmt(current) : "—"}
        {stat.value.includes("k") && "k"}
        {stat.value.includes("+") && "+"}
      </div>

      <p className="mt-2 text-sm font-semibold text-gray-800">
        {stat.label}
      </p>
    </motion.div>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.18 });

  return (
    <section className="relative max-w-6xl mx-auto p-10 rounded-2xl bg-gray-50 overflow-hidden">
      {/* Background */}
      

      {/* Content */}
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-8 text-2xl font-bold text-gray-900"
      >
        Event Impact at a Glance
      </motion.h2>
      <ParticlesBackground />
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 grid gap-5 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]"
      >
        
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            stat={stat}
            index={index}
            inView={inView}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
