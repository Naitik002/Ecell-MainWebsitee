"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
    {
        heading: "Nurturing Innovators",
        text: "We empower students to become innovators and entrepreneurs by providing them with the right guidance, opportunities, and a platform to showcase their ideas.",
    },
    {
        heading: "Resources & Mentorship",
        text: "Our network connects aspiring entrepreneurs with experienced mentors, industry experts, and essential resources to help turn their visions into reality.",
    },
    {
        heading: "Thriving Ecosystem",
        text: "We foster a vibrant entrepreneurial ecosystem through workshops, events, and collaborations, nurturing creativity and sustainable growth.",
    },
];

export default function AboutUs() {
    const containerRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
    const ctx = gsap.context(() => {
        const cardElements = gsap.utils.toArray(rightRef.current.children);
        const lastCard = cardElements[cardElements.length - 1];

        // --- HEADING + LINE ENTRANCE (works now) ---
        const line = leftRef.current.querySelector(".left-line");
        const title = leftRef.current.querySelector(".left-title");

        gsap.from(line, {
            scaleY: 0,
            transformOrigin: "top",
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
            },
        });

        gsap.from(title, {
            opacity: 0,
            x: -30,
            duration: 1,
            delay: 0.3,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            },
        });

        // ---- PIN + CARD ANIMATIONS ----
        ScrollTrigger.matchMedia({
            "(min-width: 768px)": () => {
                // Pin the heading
                ScrollTrigger.create({
                    trigger: containerRef.current,
                    start: "top top",
                    end: () => {
                        const headingHeight = leftRef.current.offsetHeight;
                        const lastCardTop =
                            lastCard.getBoundingClientRect().top + window.scrollY;
                        return lastCardTop - headingHeight;
                    },
                    pin: leftRef.current,
                    pinSpacing: false,
                    pinType: "transform",
                });

                // Fade-up animation for cards
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
            },

            "(max-width: 767px)": () => {
                cardElements.forEach((card) => gsap.set(card, { opacity: 1, y: 0 }));
            },
        });
    }, containerRef);

    return () => ctx.revert();
}, []);



    return (
        <section
            ref={containerRef}
            className="relative min-h-screen bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/team.jpg')" }}
        >
            {/* Fade overlay that blends the background (TOP → CENTER → BOTTOM) */}
            <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-black via-black/70 to-black"></div>

            {/* CONTENT */}
            <div className="relative z-50 max-w-6xl mx-auto flex flex-col md:flex-row justify-between px-6 md:px-20 py-10 md:py-24 gap-5 md:gap-10">

                {/* LEFT HEADING — PINNED */}
                <div className="md:w-1/3 flex flex-col">
                    <div ref={leftRef} className="flex items-start mb-8 md:mb-0">

                        <div className="left-line w-1 bg-[#FAC176] mt-4 mr-4 h-16 md:h-full"></div>

                        <h2 className="left-title text-4xl md:text-6xl mt-4 font-extrabold leading-tight bg-clip-text bg-gradient-to-r from-[#fac176] to-[#633902] text-transparent">
                            What is E-Cell?
                        </h2>

                    </div>
                </div>


                {/* RIGHT CARDS */}
                <div
                    ref={rightRef}
                    className="md:w-2/3 flex flex-col items-center md:items-start gap-8"
                >
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl   w-full md:w-[80%]"
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
