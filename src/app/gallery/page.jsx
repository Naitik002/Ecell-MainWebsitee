"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExpandIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 14H5v5h5v-2H7v-3zM5 10h2V7h3V5H5v5zm14 4h-3v3h-2v-5h5v2zM17 5v2h3v3h2V5h-5z"/></svg>;
const CloseIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const ChevronLeftIcon = () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>;
const ChevronRightIcon = () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>;


const AnimatedGlowBackground = () => (
  <div className="absolute inset-0 -z-50 overflow-hidden bg-black">
    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-amber-500/10 to-transparent rounded-full animate-pulse-slow blur-3xl"></div>
    <div className="absolute bottom-1/A4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-yellow-600/10 to-transparent rounded-full animate-pulse-slow animation-delay-4000 blur-3xl"></div>
  </div>
);

const ImageCard = ({ src, alt, layoutId, onClick }) => {
  return (
    <motion.div
      layoutId={layoutId}
      onClick={onClick}
      className="relative w-80 h-56 rounded-xl overflow-hidden shadow-lg cursor-pointer flex-shrink-0 group"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/320x224/000000/FBBF24?text=Event+Photo`; }}/>
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="p-3 bg-black/50 rounded-full">
          <ExpandIcon />
        </div>
      </div>
       <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
    </motion.div>
  );
};


const Lightbox = ({ selectedImage, setSelectedImage, eventImages }) => {
  if (!selectedImage) return null;

  const currentIndex = eventImages.findIndex(img => img.id === selectedImage.id);

  const navigate = (direction) => {
    const newIndex = (currentIndex + direction + eventImages.length) % eventImages.length;
    setSelectedImage(eventImages[newIndex]);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedImage(null)}
    >
      <motion.img
          layoutId={selectedImage.id}
          src={selectedImage.src}
          className="max-w-[90vw] max-h-[85vh] object-contain z-10"
          onClick={(e) => e.stopPropagation()}
      />

      <motion.button
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
          onClick={() => setSelectedImage(null)}
          whileHover={{ scale: 1.1, rotate: 90 }}
      >
          <CloseIcon/>
      </motion.button>

      <motion.button
          className="absolute left-6 text-gray-500 hover:text-white transition-colors"
          onClick={(e) => {e.stopPropagation(); navigate(-1);}}
          whileHover={{ scale: 1.1, x: -5 }}
      >
          <ChevronLeftIcon />
      </motion.button>

      <motion.button
          className="absolute right-6 text-gray-500 hover:text-white transition-colors"
          onClick={(e) => {e.stopPropagation(); navigate(1);}}
          whileHover={{ scale: 1.1, x: 5 }}
      >
          <ChevronRightIcon />
      </motion.button>
    </motion.div>
  );
};

const GalleryPage = () => {
    const [selectedImage, setSelectedImage] = React.useState(null);

    const galleryData = [
        {
            title: "E-Summit '25",
            description: "Our flagship event, a confluence of brilliant minds.",
            images: [
                { id: "es1", src: "https://placehold.co/600x400/000000/FBBF24?text=Keynote+Speaker", alt: "Keynote Speaker at E-Summit" },
                { id: "es2", src: "https://placehold.co/600x400/111111/FBBF24?text=Panel+Discussion", alt: "Panel Discussion" },
                { id: "es3", src: "https://placehold.co/600x400/0a0a0a/FBBF24?text=Networking+Session", alt: "Networking" },
                { id: "es4", src: "https://placehold.co/600x400/0f0f0f/FBBF24?text=Award+Ceremony", alt: "Awards" },
                { id: "es5", src: "https://placehold.co/600x400/141414/FBBF24?text=Audience", alt: "Audience" },
            ]
        },
        {
            title: "Startup Expo '25",
            description: "Connecting visionaries with opportunities.",
            images: [
                { id: "sc1", src: "https://placehold.co/600x400/1a1a1a/FBBF24?text=Startup+Pitches", alt: "Startup Pitches" },
                { id: "sc2", src: "https://placehold.co/600x400/1c1c1c/FBBF24?text=Investor+Meet", alt: "Investor Meet" },
                { id: "sc3", src: "https://placehold.co/600x400/1e1e1e/FBBF24?text=Mentorship+Session", alt: "Mentorship Session" },
            ]
        },
        {
            title: "Bplan Competition '25",
            description: "Where groundbreaking ideas take flight.",
            images: [
                { id: "is1", src: "https://placehold.co/600x400/2a2a2a/FBBF24?text=Final+Pitches", alt: "Ideastorm Finals" },
                { id: "is2", src: "https://placehold.co/600x400/222222/FBBF24?text=Judging+Panel", alt: "Judges" },
                { id: "is3", src: "https://placehold.co/600x400/252525/FBBF24?text=Winners", alt: "Winners" },
                { id: "is4", src: "https://placehold.co/600x400/282828/FBBF24?text=Team+Collaboration", alt: "Collaboration" },
            ]
        },
        {
            title: "Case Study",
            description: "Fostering skills for tomorrow's leaders.",
            images: [
                { id: "ws1", src: "httpsD://placehold.co/600x400/3a3a3a/FBBF24?text=Digital+Marketing", alt: "Digital Marketing Workshop" },
                { id: "ws2", src: "https://placehold.co/600x400/333333/FBBF24?text=Blockchain+Seminar", alt: "Blockchain Seminar" },
                { id: "ws3", src: "https://placehold.co/600x400/383838/FBBF24?text=Finance+101", alt: "Finance Workshop" },
            ]
        },
    ];

    const [activeEventImages, setActiveEventImages] = React.useState([]);

    const openLightbox = (image, images) => {
        setActiveEventImages(images);
        setSelectedImage(image);
    };

    return (
        <div className="min-h-screen bg-black text-gray-300 font-sans mt-15 overflow-x-hidden">
            <AnimatedGlowBackground />

            <main className="relative z-10">
                <section className="text-center py-24 md:py-32">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
                        className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 tracking-tighter"
                    >
                        Chronicles of <span className="bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Innovation</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
                        className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
                    >
                        A visual journey through the landmark events, workshops, and moments that define E-Cell NIT Bhopal.
                    </motion.p>
                </section>

                <div className="space-y-24 pb-24">
                    {galleryData.map((event) => (
                        <section key={event.title}>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                                <motion.h2
                                  initial={{ opacity: 0, x: -50 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true, amount: 0.3 }}
                                  transition={{ duration: 0.6, ease: "easeOut" }}
                                  className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-500">
                                    {event.title}
                                </motion.h2>
                                <motion.p
                                  initial={{ opacity: 0, x: -50 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true, amount: 0.3 }}
                                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                                  className="text-gray-400 mt-2">
                                    {event.description}
                                </motion.p>
                            </div>
                            <motion.div className="flex gap-8 py-4 cursor-grab pl-4 sm:pl-6 lg:pl-8" whileTap={{ cursor: "grabbing" }}>
                                <motion.div
                                    drag="x"
                                    dragConstraints={{ right: 0, left: -((event.images.length * 352) - (typeof window !== 'undefined' ? window.innerWidth : 0) + 100) }}
                                    className="flex gap-8"
                                >
                                    {event.images.map((image) => (
                                        <ImageCard
                                            key={image.id}
                                            src={image.src}
                                            alt={image.alt}
                                            layoutId={image.id}
                                            onClick={() => openLightbox(image, event.images)}
                                        />
                                    ))}
                                </motion.div>
                            </motion.div>
                        </section>
                    ))}
                </div>
            </main>

            <AnimatePresence>
                <Lightbox
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                    eventImages={activeEventImages}
                />
            </AnimatePresence>
        </div>
    );
};

export default GalleryPage;