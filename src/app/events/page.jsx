import React from 'react'
import MagicBento from '@/components/Magicbento'

const events = () => {
  return (
    <main className="w-full mt-35 flex flex-col items-center">
      
      <h1 className="text-4xl md:text-7xl font-bold text-center mb-10 bg-clip-text bg-gradient-to-r from-[#fac176] to-[#633902] text-transparent">
        Our Events
      </h1>

      {/* MagicBento component */}
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
    </main>
  )
}

export default events
