"use client";

import { motion } from "framer-motion";
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen overflow-x-hidden"
      style={{
        background: `
          radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,1) 80%),
          url('/PHOTO-2025-10-09-15-25-14.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-[100vw] h-full px-0 gap-6 md:gap-12">
        {/* Left Image */}
        <motion.div
          className="flex justify-center md:justify-end md:w-1/2 min-w-0 items-center"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/PHOTO-2025-10-09-20-40-32.jpg"
            alt="E-Cell MANIT Coin"
            className="w-64 sm:w-56 md:w-full max-w-full h-auto object-contain opacity-95 mix-blend-lighten"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="md:w-1/2 min-w-0 w-[80vw] flex flex-col items-center md:items-start text-center md:text-left justify-center md:px-0"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h3 className="text-[#FAC176] text-base sm:text-lg md:text-xl font-semibold tracking-widest uppercase mb-2 sm:mb-3">
            #MakeThingsHappen
          </h3>

          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide">
            Entrepreneurship Cell <br /> NIT-B
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-xs sm:max-w-sm md:max-w-md">
            Empowering innovators to turn ideas into impact. Join the movement that transforms vision into reality.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
