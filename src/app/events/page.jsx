'use client'
import React from 'react'
import { motion } from 'framer-motion'
import MagicBento from '@/components/Magicbento';

const LinkedinIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" fill="currentColor" /></svg>;
const InstagramIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.784.305-1.48.73-2.175 1.425C1.27 2.73 1.02 3.33.63 4.136c-.3.765-.5 1.63-.56 2.91C.015 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.28.26 2.15.56 2.91.3.765.73 1.46 1.425 2.155.695.695 1.39 1.12 2.155 1.425.765.3 1.63.5 2.91.56 1.28.057 1.687.072 4.947.072s3.667-.015 4.947-.072c1.28-.06 2.15-.26 2.91-.56.765-.3 1.46-.73 2.155-1.425.695-.695 1.12-1.39 1.425-2.155.3-.765.5-1.63.56-2.91.057-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.28-.26-2.15-.56-2.91-.3-.765-.73-1.46-1.425-2.155C21.27 1.27 20.67 1.02 19.864.63c-.765-.3-1.63-.5-2.91-.56C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.012 4.85.07 1.17.055 1.805.248 2.227.415.562.217.96.477 1.382.896.42.42.68.82.896 1.382.167.422.36 1.057.413 2.227.058 1.265.07 1.646.07 4.85s-.012 3.585-.07 4.85c-.055 1.17-.248 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.42-.82.68-1.382.896-.422.167-1.057.36-2.227.413-1.265.058-1.646.07-4.85.07s-3.585-.012-4.85-.07c-1.17-.055-1.805-.248-2.227-.413-.562.217-.96-.477-1.382-.896-.42-.42-.68-.82-.896-1.382-.167-.422-.36-1.057-.413-2.227-.058-1.265-.07-1.646-.07-4.85s.012-3.585.07-4.85c.055-1.17.248 1.805.413-2.227.217-.562.477.96.896-1.382.42-.42.82.68 1.382-.896.422-.167 1.057.36 2.227.413C8.415 2.172 8.797 2.16 12 2.16zm0 2.91c-3.61 0-6.49 2.88-6.49 6.49s2.88 6.49 6.49 6.49 6.49-2.88 6.49-6.49S15.61 5.07 12 5.07zm0 10.81c-2.4 0-4.33-1.93-4.33-4.33s1.93-4.33 4.33-4.33 4.33 1.93 4.33 4.33-1.93 4.33-4.33 4.33zm6.405-11.835c-.75 0-1.36-.61-1.36-1.36s.61-1.36 1.36-1.36 1.36.61 1.36 1.36-.61 1.36-1.36 1.36z" fill="currentColor" /></svg>;
const EmailIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"><title>Email</title><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" fill="currentColor" /></svg>;



const GildedMemberCard = ({ imgLink, personName, personVertical, linkedin, insta, mail }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative group perspective-1000"
    >
      <motion.div
        whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="relative p-0.5 rounded-2xl overflow-hidden bg-gradient-to-b from-gray-800 to-black transition-all duration-500 preserve-3d h-full"
      >
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#fac176] to-[#633902] opacity-0 group-hover:opacity-75 transition-opacity duration-500 animate-aurora"></div>
        <div className="relative bg-black rounded-[14px] p-6 h-full flex flex-col items-center text-center">
          <motion.img
            src={imgLink}
            alt={personName}
            className="w-24 h-24 md:w-32 md:h-32 object-cover aspect-square rounded-full border-2 border-gray-700 group-hover:border-amber-400/50 transition-colors duration-300 mb-4"
            onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/128x128/000000/FBBF24?text=${personName.split(' ').map(n => n[0]).join('')}`; }}
            style={{ transform: 'translateZ(40px)' }}
          />
          <h3
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#fac176] to-[#633902]"
            style={{ transform: 'translateZ(20px)' }}
          >
            {personName}
          </h3>
          <p
            className="text-gray-400 mb-4"
            style={{ transform: 'translateZ(10px)' }}
          >
            {personVertical}
          </p>
          <div className="flex space-x-4 mt-auto pt-4">
            {linkedin && (
              <motion.a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#fac176] transition-colors duration-300 w-6 h-6" whileHover={{ scale: 1.2, y: -2 }}>
                <LinkedinIcon />
              </motion.a>
            )}
            {insta && (
              <motion.a href={insta} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#fac176] transition-colors duration-300 w-6 h-6" whileHover={{ scale: 1.2, y: -2 }}>
                <InstagramIcon />
              </motion.a>
            )}
            {mail && (
              <motion.a href={mail} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#fac176] transition-colors duration-300 w-6 h-6" whileHover={{ scale: 1.2, y: -2 }}>
                <EmailIcon />
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};


const teamData = [
  {
    "imgLink": "./team_images/Dev Bansal.webp",
    "personName": "Dev Bansal",
    "personVertical": "Events Lead",
    "linkedin": "https://www.linkedin.com/in/dev-bansal-22a54a282/",
    "insta": "https://www.instagram.com/db_devbansal/",
    "mail": "mailto:bansaldev894@gmail.com"
  },
  {
    "imgLink": "./team_images/Hiya Sanghvi.webp",
    "personName": "Hiya Sanghvi",
    "personVertical": "Events Lead",
    "linkedin": "http://www.linkedin.com/in/hiya-sanghvi10",
    "insta": "https://instagram.com/_._hiyaaa_._/",
    "mail": "mailto:hiyasanghvi037@gmail.com"
  },
  {
    "imgLink": "./team_images/Snehal Terdalkar.webp",
    "personName": "Snehal Terdalkar",
    "personVertical": "Events Secretary",
    "linkedin": "https://www.linkedin.com/in/snehal-terdalkar-74466b290",
    "insta": "https://instagram.com/_snehal _2610",
    "mail": "mailto:snehalterdalkar@gmail.com"
  },
  {
    "imgLink": "./team_images/gaurvint.jpg",
    "personName": "Gaurvint Verma",
    "personVertical": "Events Secretary",
    "linkedin": "https://www.linkedin.com/in/gaurvint-verma-554329302/",
    "insta": "http://instagram.com/gaurvint",
    "mail": "mailto:gaurvint@gmail.com"
  }
];

const events = () => {
  return (
    <main className="w-full mt-40 flex flex-col items-center overflow-hidden">

      <motion.h1
        className="text-5xl md:text-7xl mt-10 font-bold text-center mb-6 bg-clip-text text-transparent"
        initial={false}
      >
        <motion.span
          className="bg-gradient-to-r from-[#fac176] to-[#fac176] text-transparent bg-clip-text"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          Our
        </motion.span>
        <span> </span>
        <motion.span
          className="bg-gradient-to-r from-[#fac176] to-[#633902] text-transparent bg-clip-text"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          Events
        </motion.span>
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
      {/* Innovative Animated Timeline */}


      {/* Animated Heading */}


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
        className="w-full mt-5"
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
      
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto mb-10 mt-4">
        {teamData.map((member, index) => (
          <GildedMemberCard key={index} {...member} />
        ))}
      </div>
    </main>
  )
}

export default events
