"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  {
    heading: "Nurturing Innovators",
    text: "The Entrepreneurship Cell at NIT-B is dedicated to nurturing and empowering the next generation of innovators."
  },
  {
    heading: "Resources & Mentorship",
    text: "We provide resources, mentorship, and a platform for students to turn ideas into successful ventures."
  },
  {
    heading: "Thriving Ecosystem",
    text: "Our mission is to cultivate a thriving ecosystem where creativity meets execution."
  }
];

const AboutUs = () => {
  const { scrollYProgress } = useScroll({
    target: null,
    offset: ["start start", "end end"]
  });

  return (
    <section className="relative w-full bg-black text-white">
      {/* Tall div to create scroll space */}
      <div className="relative h-[200vh] flex justify-center items-center">
        
        {/* Sticky Center-Pinned Container */}
        <div className="sticky top-1/2 transform -translate-y-1/2 w-full max-w-6xl flex flex-col md:flex-row items-start md:items-center px-6 md:px-20">
          
          {/* Left Heading */}
          <div className="md:w-1/3 flex justify-center md:justify-start">
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
              What is E-Cell?
            </h2>
          </div>

          {/* Right Cards */}
          <div className="md:w-2/3 flex flex-col items-center justify-center gap-16 mt-10 md:mt-0">
            {cards.map((card, index) => {
              const start = index / cards.length;
              const end = (index + 1) / cards.length;
              const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
              const y = useTransform(scrollYProgress, [start, end], [50, 0]);

              return (
                <motion.div
                  key={index}
                  style={{ opacity, y }}
                  className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-600 w-full md:w-[80%]"
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{card.heading}</h3>
                  <p className="text-white text-lg md:text-xl">{card.text}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
