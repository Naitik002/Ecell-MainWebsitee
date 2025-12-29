"use client";

import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import SponsorsCarousel from "./SponsorsCarousal";

export default function Sponsors() {
  const spn1 = [
    { name: "SAIL", logo: "./sponsors/currentSponsor/Sail_logo.jpg", website: "https://www.sail.co.in" },
    { name: "AIC RNTU", logo: "/sponsors/currentSponsor/AICRNTU.jpeg", website: "https://aicrntu.com" },
    { name: "Raphe mPhibr", logo: "/sponsors/currentSponsor/raphe-mphibr.png", website: "https://raphemphibr.com" },
    { name: "Unstop", logo: "/sponsors/currentSponsor/unstop.png", website: "https://unstop.com" },
    { logo: "/sponsors/adani.png", website: "https://www.adani.com" },
    { logo: "/sponsors/hpcl.webp", website: "https://www.hindustanpetroleum.com" },
    { logo: "/sponsors/iocl.webp", website: "https://iocl.com" },
  ];

  const spn2 = [
    { name: "BNest", logo: "/sponsors/currentSponsor/bnest.png", website: "https://bnest.in" },
    { name: "EKSPE", logo: "/sponsors/currentSponsor/ekspe.png", website: "https://ekspe.com" },
    { name: "Trends", logo: "/sponsors/currentSponsor/reliance.avif", website: "https://www.trends.ajio.com" },
    { name: "PVR", logo: "/sponsors/currentSponsor/pvr.png", website: "https://www.pvrcinemas.com" },
    { name: "Starbucks", logo: "/sponsors/currentSponsor/starbucks.png", website: "https://www.starbucks.in" },
    { name: "Wadhwani Foundation", logo: "/sponsors/currentSponsor/wadhwani.jpg", website: "https://wadhwanifoundation.org" },
    { name: "Hyundai", logo: "/sponsors/currentSponsor/images (3).jpg", website: "https://www.hyundai.com/in" },
  ];

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

      <SponsorsCarousel data={spn1} />
      <SponsorsCarousel data={spn2} direction="right" />

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
