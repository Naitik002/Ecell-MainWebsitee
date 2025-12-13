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
    { src: "/sponsors/3ways.webp" },
    { src: "/sponsors/AIC.png" },
    { src: "/sponsors/ApnaCast.webp" },
    { src: "/sponsors/Boudhik-IP-Logo.png" },
    { src: "/sponsors/Canva.webp" },
    { src: "/sponsors/Coolberg_logo_50x.webp" },
    { src: "/sponsors/Expand My Business.webp" },
    { src: "/sponsors/Icreate.webp" },
    { src: "/sponsors/Learning While Traveling.webp" },
    { src: "/sponsors/MEITY.webp" },
    { src: "/sponsors/MSG91.webp" },
    { src: "/sponsors/PedalStart.webp" },
    { src: "/sponsors/Real Vision.webp" },
    { src: "/sponsors/Taskade.webp" },
    { src: "/sponsors/Webodoctor.webp" },
    { src: "/sponsors/adani.png" },
    { src: "/sponsors/aws.webp" },
    { src: "/sponsors/bansal.webp" },
    { src: "/sponsors/bhopal angels.jpeg" },
    { src: "/sponsors/bob.webp" },
    { src: "/sponsors/bv.webp" },
    { src: "/sponsors/coinpage.png" },
    { src: "/sponsors/coolberg.webp" },
    { src: "/sponsors/crow.png" },
    { src: "/sponsors/crowdera.webp" },
    { src: "/sponsors/easymytrip.webp" },
    { src: "/sponsors/forethought.webp" },
    { src: "/sponsors/freashworks.webp" },
    { src: "/sponsors/ftlt.webp" },
    { src: "/sponsors/givemycertificate.png" },
    { src: "/sponsors/goodworks_cowork_logo.webp" },
    { src: "/sponsors/hpcl.webp" },
    { src: "/sponsors/i-am-startup.jpg" },
    { src: "/sponsors/iim-calcutta.jpg" },
    { src: "/sponsors/inovative script.webp" },
    { src: "/sponsors/iocl.webp" },
    { src: "/sponsors/jiosaavn-logo-inline.png" },
    { src: "/sponsors/kitab lovers.png" },
    { src: "/sponsors/mansarovar.webp" },
    { src: "/sponsors/mpsu.webp" },
    { src: "/sponsors/msg91.svg" },
    { src: "/sponsors/offistore.jpg" },
    { src: "/sponsors/pan macmillan.webp" },
    { src: "/sponsors/paper.jpeg" },
    { src: "/sponsors/pngegg.webp" },
    { src: "/sponsors/quillbot.webp" },
    { src: "/sponsors/raphe-mphibr.png" },
    { src: "/sponsors/recklabs_logo.webp" },
    { src: "/sponsors/redfm.webp" },
    { src: "/sponsors/roostoo.webp" },
    { src: "/sponsors/rupeezy_icon.svg" },
    { src: "/sponsors/sf.webp" },
    { src: "/sponsors/shekunj.svg" },
    { src: "/sponsors/sixthsenselogo.webp" },
    { src: "/sponsors/startupvisor.png" },
    { src: "/sponsors/starworks_prime_logo.webp" },
    { src: "/sponsors/stock wealth academy.webp" },
    { src: "/sponsors/stpi.webp" },
    { src: "/sponsors/teachnook.webp" },
    { src: "/sponsors/techstory.webp" },
    { src: "/sponsors/unstop.webp" },
    { src: "/sponsors/wadhwani-foundation.jpg" },
    { src: "/sponsors/wolfram_research.webp" },
  ];

  const moreSponsors = Array.from({ length: 32 }, (_, i) =>
    i === 15 ? null : { src: `/sponsors/moreSponsors/Asset ${i + 5}.webp` }
  ).filter(Boolean);

  const allSponsors = [...sponsors, ...moreSponsors];


  const sponsorsToShow = isMobile && !showAll ? allSponsors.slice(0, mobileLimit) : allSponsors;

  return (
    <section className="w-full py-16 bg-black">
      <h2
        ref={headingRef}
        className="text-5xl md:text-7xl font-bold text-center bg-clip-text bg-gradient-to-r from-[#fac176] to-[#633902] text-transparent mb-12">
        Our Sponsors
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center px-4 md:px-0">
        {sponsorsToShow.map((sponsor, idx) => (
          <div key={idx} className="w-40 h-27 md:w-60 md:h-40 flex items-center justify-center p-4 bg-white rounded-lg">
            <img
              src={sponsor.src}
              alt="Sponsor logo"
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
