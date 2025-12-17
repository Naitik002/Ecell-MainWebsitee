"use client";

import React from "react";
import { motion } from "framer-motion";

// --- Event Card Component ---
const EventCard = ({ image, name }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="bg-white rounded-2xl overflow-hidden w-full md:w-[40vw]  shadow-lg border border-gray-700 hover:border-[#fac176] transition-colors duration-300"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-[40vh] bg-transparent object-contain "
      />
      <div className="p-4 text-center bg-black">
        <h3 className="text-lg font-semibold text-[#fac176]">{name}</h3>
      </div>
    </motion.div>
  );
};

// --- OurEvents Component ---
const ourEvents = () => {
  const events = [
    {
      name: "E-Summit",
      image: "/eventsLogo/e_summit.jpeg",
    },
    {
      name: "B-Plan Jr.",
      image: "/eventsLogo/B-PlanJr.jpeg",
    },
    {
      name: "Pe Charcha",
      image: "/eventsLogo/peCharcha.jpeg",
    }
  ];

  return (
    <section className="py-16 bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#fac176] to-[#633902] mb-12"
        >
          Our Events
        </motion.h2>

        <div className="flex flex-wrap  justify-center  gap-8">
          {events.map((event, idx) => (
            <EventCard key={idx} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ourEvents;
