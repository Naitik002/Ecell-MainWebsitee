"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";



export function Testimonials() {

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

  const testimonials = [
  {
    name: "Niharika Rajiv",
    designation: "Angel Investor",
    src: "/testimonials/niharika.png",
    quote:
      "It was a pleasure to be at E-Summit 23 at MANIT. The team worked extremely hard to put together an excellent show. They were focused and meticulous and delivered a great experience for the judges and the attendees. Look forward to the next one!",
  },
  {
    name: "Shyam Sekar S",
    designation:
      "Chief Mentor and Strategist, Startup Xperts Business Consulting Pvt. Ltd",
    src: "/testimonials/shyam.png",
    quote:
      "It was yet another wonderful experience and amazed at the student run initiative like yours! It was managed professionally right from the time the program was planned, time limits, online session, question time, etc. all handled seamlessly.",
  },
  {
    name: "Dr. Vassundara Nattes",
    designation:
      "Global Managing Director, Kathyawad Ventures | Director Corporate Relations, IETO | Forbes 40 Under 40",
    src: "/testimonials/vassundara.png",
    quote:
      "Glad to be associated with Entrepreneurship Cell of MANIT Bhopal. My sincere thanks to E-Cell committee and students for inviting me.",
  },
  {
    name: "Vedansh Thakur",
    designation: "CFO, Swap Automotive Pvt Ltd",
    src: "/testimonials/vedansh.png",
    quote:
      "Management team were quite helpful and supportive throughout the event. The value created at MANIT campus was quite good and speakers organized were very valuable.",
  },
  {
    name: "Karthik Vidyasagar",
    designation: "Angel Investor, Odele",
    src: "/testimonials/karthik.png",
    quote:
      "The E-Cell Summit was an excellent example of how students can come together, collaborate, and create something truly remarkable. I am confident that this event will inspire many other students to follow in your footsteps.",
  },
  {
    name: "Shardul Nandapurkar",
    designation:
      "Angel Investor | Co-Chair (Office of International Services – Europe Region), Global Governance Initiative",
    src: "/testimonials/shardul.png",
    quote:
      "It was inspiring seeing so many talented startup founders pitching their businesses. A special mention to the entire E-Cell team at MANIT Bhopal who did an absolutely fabulous job of organising a well planned event.",
  },
  {
    name: "Amandeep Singh",
    designation: "Artist, Performed at E-Summit’23",
    src: "/testimonials/amandeep.png",
    quote:
      "From the moment we arrived, we were greeted with utmost professionalism and warmth. Their commitment and hospitality were truly commendable, creating an unforgettable experience for all participants.",
  },
  {
    name: "Kruti Raiyani",
    designation: "Head of Investments, Lead Angels",
    src: "/testimonials/kruti.png",
    quote:
      "Liked the passion and enthusiasm of the event. Great team effort and flow of plan.",
  },
];


  return (
    <section className="bg-gradient-to-b from-black via-[#633902] to-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 
        ref = {headingRef}
        className="text-5xl md:text-7xl font-extrabold bg-clip-text bg-gradient-to-r from-[#fac176] to-[#633902] text-transparent sm:text-4xl">
          Testimonials
        </h2>
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
}
