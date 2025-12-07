"use client";

import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

export default function Sponsors() {

  gsap.registerPlugin(ScrollTrigger);

const headingRef = useRef(null);

  useEffect(() => {
    if (!headingRef.current) return;

    gsap.from(headingRef.current, {
  opacity: 0,
  y: 40,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: headingRef.current,
    start: "top 85%",
  },
});
  }, []);
  // Replace with actual sponsor logo paths for production use
  const sponsors = Array(16).fill("/logo.webp");

  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileLimit = 8; // 2 per row, 4 rows

  const sponsorsToShow = isMobile && !showAll ? sponsors.slice(0, mobileLimit) : sponsors;

  return (
    <section className="w-full py-16 bg-black">
      <h2 
      ref ={headingRef}
      className="text-5xl md:text-7xl font-bold text-center bg-clip-text bg-gradient-to-r from-[#fac176] to-[#633902] text-transparent mb-12">
        Our Sponsors
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center px-4 md:px-0">
        {sponsorsToShow.map((src, idx) => (
          <div
            key={idx}
            className="w-40 h-27 md:w-60 md:h-40 flex items-center justify-center p-4 bg-white/5 rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={src}
              alt={`Sponsor ${idx + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* View More button only for mobile */}
      {isMobile && !showAll && sponsors.length > mobileLimit && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 rounded-md bg-[#FAC176] text-black font-semibold hover:bg-yellow-500 transition"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
}
