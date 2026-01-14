// "use client";

// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const cards = [
//     {
//         title: "Who We Are",
//         text: "Entrepreneurship Cell NIT Bhopal is a voluntary, student-run organisation that works to create a strong entrepreneurial environment and a vibrant startup culture among the youth community.",
//     },
//     {
//         title: "Flagship Event - E-Summit",
//         text: "We host a dynamic array of events under Central India’s largest entrepreneurial fest, E-Summit. These events include Startup Expo, IPL Auction Simulation, Business Plan Competition, Keynote Sessions, Stock Trading Simulation, and more.",
//     },
//     {
//         title: "Industry Engagement & Community Network",
//         text: "Our podcast series Pe-Charcha features industry leaders, venture capitalists, alumni founders, and investors. Through these conversations, we share insights that guide and inspire future entrepreneurs.",
//     },
//     {
//         title: "Strong Alumni Support",
//         text: "Our strong network of alumni and sponsors helps us expand our reach every year and continue to ignite ambition and make things happen.",
//     },
// ];

// export default function AboutUs() {
//     const sectionRef = useRef(null);
//     const headingSectionRef = useRef(null);
//     const headingRef = useRef(null);
//     const lineRef = useRef(null);
//     const cardsWrapperRef = useRef(null);

//     useGSAP(() => {
//         ScrollTrigger.matchMedia({
//             // =======================
//             // DESKTOP / TABLET
//             // =======================
//             "(min-width: 768px)": () => {
//                 const cards = gsap.utils.toArray(".about-card");

//                 gsap.to(cardsWrapperRef.current, {
//                     xPercent: -100 * (cards.length - 1),
//                     ease: "none",
//                     scrollTrigger: {
//                         trigger: sectionRef.current,
//                         start: "top top",
//                         end: () => `+=${window.innerHeight * cards.length}`,
//                         scrub: 1,
//                         pin: true,
//                         snap: 1 / (cards.length - 1),
//                         invalidateOnRefresh: true,
//                     },
//                 });
//             },

//             // =======================
//             // MOBILE ANIMATIONS
//             // =======================
//             "(max-width: 767px)": () => {
//                 const cards = gsap.utils.toArray(".about-card");

//                 cards.forEach((card) => {
//                     gsap.fromTo(
//                         card,
//                         {
//                             opacity: 0,
//                             y: 40,
//                         },
//                         {
//                             opacity: 1,
//                             y: 0,
//                             duration: 0.8,
//                             ease: "power3.out",
//                             scrollTrigger: {
//                                 trigger: card,
//                                 start: "top 80%",
//                                 toggleActions: "play none none none",
//                             },
//                         }
//                     );
//                 });
//             },
//         });
//     },
//         { scope: sectionRef }
//     );

//     useEffect(() => {
//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: headingSectionRef.current,
//                 start: "top 80%",
//                 once: true
//             }
//         })

//         tl.fromTo(
//             headingRef.current,
//             { x: -120, opacity: 0 },
//             { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
//         )
//         tl.fromTo(
//             lineRef.current,
//             { height: 0 },
//             { height: () => window.innerWidth < 768 ? 96 : 200, duration: 0.8, ease: "power2.out" },
//             "-=0.6"
//         )

//         return () => ScrollTrigger.kill()
//     }, [])


//     return (
//         <section
//             ref={sectionRef}
//             className="relative min-h-screen w-full bg-center bg-cover bg-no-repeat "
//             style={{ backgroundImage: "url('/team.jpg')" }}
//         >

//             <div className=" pointer-events-none absolute inset-0 z-10 bg-gradient-to-b  from-black  via-black/70  to-black"/>
//             {/* FIXED HEADING */}
//             <div
//                 ref={headingSectionRef}
//                 className="relative z-20 px-6 md:px-24 pt-24 pb-10 md:pb-3"
//             >
//                 <div className="flex items-start md:items-center mt-10">

//                     {/* SIDE LINE */}
//                     <div
//                         ref={lineRef}
//                         className="w-1 bg-[#FAC176] h-24 md:h-50 mr-6 origin-top"
//                     />

//                     {/* HEADING */}
//                     <h2
//                         ref={headingRef}
//                         className="text-4xl md:text-8xl font-extrabold leading-tight
//           bg-clip-text bg-gradient-to-r from-[#fac176] to-[#633902]
//           text-transparent uppercase tracking-tighter"
//                     >
//                         What is <br /> E-Cell?
//                     </h2>
//                 </div>
//             </div>

//             {/* CARDS */}
//             <div className="relative z-20 overflow-hidden">
//                 <div
//                     ref={cardsWrapperRef}
//                     className="
//             flex flex-col md:flex-row
//             md:items-center
//             md:h-[60vh]
//           "
//                 >
//                     {cards.map((card, index) => (
//                         <div
//                             key={index}
//                             className="
//                 about-card
//                 flex-shrink-0
//                 w-full md:w-screen
//                 px-6 md:px-24
//                 py-12
//               "
//                         >
//                             <div className="max-w-xl">
//                                 <h3 className="text-2xl md:text-4xl font-bold mb-4 bg-clip-text bg-gradient-to-r from-[#fac176] to-[#633902] text-transparent">
//                                     {card.title}
//                                 </h3>
//                                 <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
//                                     {card.text}
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40
//                 bg-gradient-to-b from-transparent to-black z-20" />
//         </section>
//     );
// }




"use client";

import React, { useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap"; // Changed to default import
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Changed from "gsap/dist/ScrollTrigger"
import Lenis from "@studio-freight/lenis";

// Register the plugin safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const cards = [
  {
    heading: "Nurturing Innovators",
    text: "We empower students to become innovators and entrepreneurs by providing them with the right guidance, opportunities, and a platform to showcase their ideas."
  },
  {
    heading: "Resources & Mentorship",
    text: "Our network connects aspiring entrepreneurs with experienced mentors, industry experts, and essential resources to help turn their visions into reality."
  },
  {
    heading: "Thriving Ecosystem",
    text: "We foster a vibrant entrepreneurial ecosystem through workshops, events, and collaborations, nurturing creativity and sustainable growth."
  }
];

export default function AboutUs() {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const lenisRef = useRef(null);

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: true,
    });

    // Synchronize Lenis and ScrollTrigger
    lenisRef.current.on("scroll", ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame to the loop
    const raf = (time) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      // Clean up Lenis
      lenisRef.current?.destroy();
      // Remove the listener to prevent memory leaks
      lenisRef.current?.off("scroll", ScrollTrigger.update);
    };
  }, []);

  // Handle Animations with useLayoutEffect (better for GSAP in React)
  useLayoutEffect(() => {
    // Use matchMedia directly - it handles context and cleanup automatically
    const mm = gsap.matchMedia();

    mm.add(
      {
        // Define your media queries here
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;
        const cardElements = gsap.utils.toArray(rightRef.current.children);
        const lastCard = cardElements[cardElements.length - 1];

        if (isDesktop) {
          // Desktop Logic
          ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: () => {
              const headingHeight = leftRef.current.offsetHeight;
              const lastCardRect = lastCard.getBoundingClientRect();
              // Calculate distance based on scroll position safely
              const lastCardTop = lastCardRect.top + window.scrollY;
              return lastCardTop - headingHeight;
            },
            pin: leftRef.current,
            pinSpacing: false,
            pinType: "transform",
            invalidateOnRefresh: true, // Recalculate positions on resize
          });

          cardElements.forEach((card) => {
            gsap.fromTo(
              card,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                  trigger: card,
                  start: "top 90%",
                  end: "top 60%",
                  scrub: true,
                },
              }
            );
          });
        }

        if (isMobile) {
          // Mobile Logic
          cardElements.forEach((card) => {
            gsap.set(card, { opacity: 1, y: 0 });
          });
        }
      },
      containerRef // Scope everything to this container
    );

    return () => mm.revert(); // This safely kills all ScrollTriggers created in this scope
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between px-6 md:px-20 py-5 md:py-20 gap-5 md:gap-10">
        {/* Left heading */}
        <div className="md:w-1/3 flex flex-col">
          <div ref={leftRef} className="flex items-start mb-8 md:mb-0">
            {/* Vertical line */}
            <div className="w-1 bg-[#FAC176] mr-4 h-16 md:h-full"></div>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight bg-clip-text bg-gradient-to-r from-[#fac176] to-[#633902] text-transparent">
              What is E-Cell?
            </h2>
          </div>
        </div>

        {/* Right cards */}
        <div
          ref={rightRef}
          className="md:w-2/3 flex flex-col items-center md:items-start gap-8"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-lg w-full md:w-[80%]"
            >
              <h3 className="text-lg md:text-3xl font-bold mb-2 bg-clip-text bg-gradient-to-r from-[#fac176] to-[#633902] text-transparent">
                {card.heading}
              </h3>
              <p className="text-white text-md md:text-xl">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
