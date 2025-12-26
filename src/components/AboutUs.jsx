"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Who We Are",
    text: "Entrepreneurship Cell NIT Bhopal is a voluntary, student-run organisation that works to create a strong entrepreneurial environment and a vibrant startup culture among the youth community.",
  },
  {
    title: "Flagship Event - E-Summit",
    text: "We host a dynamic array of events under Central India’s largest entrepreneurial fest, E-Summit. These events include Startup Expo, IPL Auction Simulation, Business Plan Competition, Keynote Sessions, Stock Trading Simulation, and more.",
  },
  {
    title: "Industry Engagement & Community Network",
    text: "Our podcast series Pe-Charcha features industry leaders, venture capitalists, alumni founders, and investors. Through these conversations, we share insights that guide and inspire future entrepreneurs.",
  },
  {
    title: "Strong Alumni Support",
    text: "Our strong network of alumni and sponsors helps us expand our reach every year and continue to ignite ambition and make things happen.",
  },
];

export default function AboutUs() {
  const sectionRef = useRef(null);
  const cardsWrapperRef = useRef(null);

  useGSAP(
  () => {
    ScrollTrigger.matchMedia({
      // =======================
      // DESKTOP / TABLET
      // =======================
      "(min-width: 768px)": () => {
        const cards = gsap.utils.toArray(".about-card");

        gsap.to(cardsWrapperRef.current, {
          xPercent: -100 * (cards.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${window.innerHeight * cards.length}`,
            scrub: 1,
            pin: true,
            snap: 1 / (cards.length - 1),
            invalidateOnRefresh: true,
          },
        });
      },

      // =======================
      // MOBILE ANIMATIONS
      // =======================
      "(max-width: 767px)": () => {
        const cards = gsap.utils.toArray(".about-card");

        cards.forEach((card) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 40,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      },
    });
  },
  { scope: sectionRef }
);


  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-center bg-cover bg-no-repeat "
      style={{ backgroundImage: "url('/team.jpg')" }}
    >

       <div
  className="
    pointer-events-none
    absolute inset-0 z-10
    bg-gradient-to-b
    from-black
    via-black/70
    to-black
  "
/>
      {/* FIXED HEADING */}
      <div className="relative z-20 px-6 md:px-24 pt-24 pb-10 md:pb-3">
        <div className="flex items-start md:items-center mt-10">
          <div className="w-1 bg-[#FAC176] h-24 md:h-50 mr-6 "></div>
          <h2 className="text-4xl md:text-8xl font-extrabold leading-tight bg-clip-text bg-gradient-to-r from-[#fac176] to-[#633902] text-transparent uppercase tracking-tighter">
            What is <br /> E-Cell?
          </h2>
        </div>
      </div>

      {/* CARDS */}
      <div className="relative z-20 overflow-hidden">
        <div
          ref={cardsWrapperRef}
          className="
            flex flex-col md:flex-row
            md:items-center
            md:h-[60vh]
          "
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                about-card
                flex-shrink-0
                w-full md:w-screen
                px-6 md:px-24
                py-12
              "
            >
              <div className="max-w-xl">
                <h3 className="text-2xl md:text-4xl font-bold mb-4 bg-clip-text bg-gradient-to-r from-[#fac176] to-[#633902] text-transparent">
                  {card.title}
                </h3>
                <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40
                bg-gradient-to-b from-transparent to-black z-20" />
    </section>
  );
}
