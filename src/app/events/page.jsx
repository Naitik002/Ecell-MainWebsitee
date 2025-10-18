'use client'
import React from 'react'
import { motion } from 'framer-motion'
import MagicBento from '@/components/Magicbento'

const events = () => {
  return (
    <main className="w-full mt-40 flex flex-col items-center overflow-hidden">
      
      {/* Animated Heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-center mb-6 bg-clip-text bg-gradient-to-r from-[#fac176] to-[#633902] text-transparent"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] } }}
      >
        Our Events
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-lg md:text-xl text-center text-gray-300 max-w-2xl mb-20 px-4 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeOut'
        }}
      >
        Explore our lineup of events that ignite innovation, celebrate creativity,  
        and bring the entrepreneurial spirit to life.
      </motion.p>

      {/* Animated Bento Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease: 'easeOut'
        }}
        whileHover={{ scale: 1.02 }}
      >
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={200}
          particleCount={12}
          glowColor="250, 193, 118"
        />
      </motion.div>
    </main>
  )
}

export default events
