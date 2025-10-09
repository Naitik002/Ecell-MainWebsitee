"use client";

import { motion } from "framer-motion";
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen"
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
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl text-white px-6 md:px-20 h-full">
        {/* Left Image */}
        <motion.div
          className="flex justify-center md:justify-start md:w-1/2 h-full items-center"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/PHOTO-2025-10-09-20-40-32.jpg"
            alt="E-Cell MANIT Coin"
            className="w-72 h-auto md:w-[500px] lg:w-[550px] object-contain opacity-95 mix-blend-lighten"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-10 md:mt-0 h-full justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h3 className="text-[#FAC176] text-lg md:text-2xl font-semibold tracking-widest uppercase mb-3">
            #MakeThingsHappen
          </h3>

          <h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-wide">
            Entrepreneurship Cell <br /> NIT-B
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-300 max-w-md">
            Empowering innovators to turn ideas into impact. Join the movement
            that transforms vision into reality.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
