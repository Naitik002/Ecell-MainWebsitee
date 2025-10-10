"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const cards = [
    {
        heading: "Nurturing Innovators",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        heading: "Resources & Mentorship",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        heading: "Thriving Ecosystem",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
];

export default function AboutUs() {
    const containerRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const lenisRef = useRef(null);

    useEffect(() => {
        lenisRef.current = new Lenis({
            duration: 1.2,
            easing: (t) => t,
            smooth: true,
            direction: "vertical",
            gestureDirection: "vertical",
            smoothTouch: true,
        });

        function raf(time) {
            lenisRef.current.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        const ctx = gsap.context(() => {
            const cardElements = gsap.utils.toArray(rightRef.current.children);
            const lastCard = cardElements[cardElements.length - 1];

            lenisRef.current.on("scroll", ScrollTrigger.update);

            ScrollTrigger.matchMedia({
                // Desktop: pinned heading + animations
                "(min-width: 768px)": function () {
                    ScrollTrigger.create({
                        trigger: containerRef.current,
                        start: "top top",
                        end: () => {
                            const headingHeight = leftRef.current.offsetHeight;
                            const lastCardTop = lastCard.getBoundingClientRect().top + window.scrollY;
                            return lastCardTop - headingHeight;
                        },
                        pin: leftRef.current,
                        pinSpacing: false,
                        pinType: "transform",
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
                },

                // Mobile: normal stacking
                "(max-width: 767px)": function () {
                    cardElements.forEach((card) => {
                        gsap.set(card, { opacity: 1, y: 0 }); // show all cards without animation
                    });
                }
            });
        }, containerRef);

        return () => {
            ctx.revert();
            lenisRef.current.destroy();
        };
    }, []);

    return (
        <section ref={containerRef} className="relative w-full bg-black">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between px-6 md:px-20 py-5 md:py-20 gap-5 md:gap-10">
                {/* Left heading */}
                <div className="md:w-1/3 flex flex-col">
                    <div ref={leftRef} className="flex items-start mb-8 md:mb-0">
                        {/* Vertical line */}
                        <div className="w-1 bg-[#FAC176] mr-4 h-16 md:h-full"></div>
                        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#FAC176]">
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
                            <h3 className="text-lg md:text-3xl font-bold mb-2 text-[#FAC176]">{card.heading}</h3>
                            <p className="text-white text-md md:text-xl">{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
