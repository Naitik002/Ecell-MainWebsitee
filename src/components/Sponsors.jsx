"use client";

import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import SponsorsCarousel from "./SponsorsCarousal";

export default function Sponsors() {

  const router = useRouter();

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

  const sponsors = [
  // 🇮🇳 Government, PSU & National Institutions

  { src: "/sponsors/adani.png" },

  { src: "/sponsors/hpcl.webp" },
  { src: "/sponsors/iocl.webp" },
  { src: "/sponsors/MEITY.webp" },
  ];


  return (
    <section className="w-full py-16 bg-black">
      <h2
        ref={headingRef}
        className="text-5xl md:text-7xl font-bold text-center bg-clip-text bg-gradient-to-r from-[#fac176] to-[#633902] text-transparent mb-12">
        Our Sponsors
      </h2>

       {/* <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 md:gap-8 px-4 md:px-0">
        {sponsors.map((sponsor, idx) => (
          <div key={idx} className="w-40 h-27 md:w-60 md:h-40 flex items-center justify-center p-4 bg-white rounded-lg">
            <img
              src={sponsor.src}
              alt="Sponsor logo"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}

      </div> */}

      <SponsorsCarousel/>

      {/* View More button only for mobile */}
      
        <div className="flex justify-center mt-2">
          <button
            onClick={() => router.push("/sponsors#allSponsors")}
            className="px-6 py-2 rounded-md cursor-pointer bg-[#FAC176] text-black font-semibold hover:bg-[#f8b762] transition"
          >
            View All
          </button>
        </div>
      
    </section>
  );
}
