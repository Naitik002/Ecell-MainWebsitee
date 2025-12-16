"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DomeGallery1 from '@/components/ui/dome_gallery1';
import DomeGallery2 from '@/components/ui/dome_gallery2';

// const ExpandIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 14H5v5h5v-2H7v-3zM5 10h2V7h3V5H5v5zm14 4h-3v3h-2v-5h5v2zM17 5v2h3v3h2V5h-5z"/></svg>;
// const CloseIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
// const ChevronLeftIcon = () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>;
// const ChevronRightIcon = () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>;


// const AnimatedGlowBackground = () => (
//   <div className="absolute inset-0 -z-50 overflow-hidden bg-black">
//     <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-amber-500/10 to-transparent rounded-full animate-pulse-slow blur-3xl"></div>
//     <div className="absolute bottom-1/A4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-yellow-600/10 to-transparent rounded-full animate-pulse-slow animation-delay-4000 blur-3xl"></div>
//   </div>
// );

// const ImageCard = ({ src, alt, layoutId, onClick }) => {
//   return (
//     <motion.div
//       layoutId={layoutId}
//       onClick={onClick}
//       className="relative w-50 h-30 md:w-80 md:h-56  rounded-xl overflow-hidden shadow-lg cursor-pointer flex-shrink-0 group"
//       initial={{ scale: 1 }}
//       whileHover={{ scale: 1.05, y: -5 }}
//       transition={{ type: 'spring', stiffness: 300, damping: 15 }}
//     >
//       <img src={src} alt={alt} className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/320x224/000000/FBBF24?text=Event+Photo`; }}/>
//       <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//       <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//         <div className="p-3 bg-black/50 rounded-full">
//           <ExpandIcon />
//         </div>
//       </div>
//        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
//     </motion.div>
//   );
// };


// const Lightbox = ({ selectedImage, setSelectedImage, eventImages }) => {
//   if (!selectedImage) return null;

//   const currentIndex = eventImages.findIndex(img => img.id === selectedImage.id);

//   const navigate = (direction) => {
//     const newIndex = (currentIndex + direction + eventImages.length) % eventImages.length;
//     setSelectedImage(eventImages[newIndex]);
//   };

//   return (
//     <motion.div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       onClick={() => setSelectedImage(null)}
//     >
//       <motion.img
//           layoutId={selectedImage.id}
//           src={selectedImage.src}
//           className="max-w-[90vw] max-h-[85vh] object-contain z-10"
//           onClick={(e) => e.stopPropagation()}
//       />

//       <motion.button
//           className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
//           onClick={() => setSelectedImage(null)}
//           whileHover={{ scale: 1.1, rotate: 90 }}
//       >
//           <CloseIcon/>
//       </motion.button>

//       <motion.button
//           className="absolute left-6 text-gray-500 hover:text-white transition-colors"
//           onClick={(e) => {e.stopPropagation(); navigate(-1);}}
//           whileHover={{ scale: 1.1, x: -5 }}
//       >
//           <ChevronLeftIcon />
//       </motion.button>

//       <motion.button
//           className="absolute right-6 text-gray-500 hover:text-white transition-colors"
//           onClick={(e) => {e.stopPropagation(); navigate(1);}}
//           whileHover={{ scale: 1.1, x: 5 }}
//       >
//           <ChevronRightIcon />
//       </motion.button>
//     </motion.div>
//   );
// };

// const GalleryPage = () => {
//     const [selectedImage, setSelectedImage] = React.useState(null);

//     const galleryData = [
//   {
//     title: "E-Summit' 25",
//     description:
//       "Startup Expo is a dynamic showcase of innovation, bringing founders and their startups together with executives, investors, venture capitalists, and students on a single platform.",
//     images: [
//   { id: "e251", src: "./gallery/Summit25/251.jpg", alt: "Summit 25 Image 1" },
//   { id: "e252", src: "./gallery/Summit25/252.jpg", alt: "Summit 25 Image 2" },
//   { id: "e253", src: "./gallery/Summit25/253.jpg", alt: "Summit 25 Image 3" },
//   { id: "e254", src: "./gallery/Summit25/254.jpg", alt: "Summit 25 Image 4" },
//   { id: "e255", src: "./gallery/Summit25/255.jpg", alt: "Summit 25 Image 5" },
//   { id: "e256", src: "./gallery/Summit25/256.jpg", alt: "Summit 25 Image 6" },
//   { id: "e257", src: "./gallery/Summit25/257.jpg", alt: "Summit 25 Image 7" },
//   { id: "e258", src: "./gallery/Summit25/258.jpg", alt: "Summit 25 Image 8" },
//   { id: "e259", src: "./gallery/Summit25/259.jpg", alt: "Summit 25 Image 9" },
//   { id: "e2510", src: "./gallery/Summit25/2510.jpg", alt: "Summit 25 Image 10" },
//   { id: "e2511", src: "./gallery/Summit25/2511.jpg", alt: "Summit 25 Image 11" },
//   { id: "e2512", src: "./gallery/Summit25/2512.jpg", alt: "Summit 25 Image 12" }
// ]

//   },
//   {
//     title: "E-Summit' 24",
//     description:
//       "Business Plan Competition gives participants a chance to transform their vision into ventures with real-world impact.",
//     images: [
//   { id: "e241", src: "./gallery/Summit24/244.JPG", alt: "Summit 24 Image 1" },
//   { id: "e242", src: "./gallery/Summit24/248.JPG", alt: "Summit 24 Image 2" },
//   { id: "e243", src: "./gallery/Summit24/243.JPG", alt: "Summit 24 Image 3" },
//   { id: "e244", src: "./gallery/Summit24/246.JPG", alt: "Summit 24 Image 4" },
//   { id: "e245", src: "./gallery/Summit24/245.JPG", alt: "Summit 24 Image 5" },
//   { id: "e246", src: "./gallery/Summit24/241.JPG", alt: "Summit 24 Image 6" },
//   { id: "e247", src: "./gallery/Summit24/247.JPG", alt: "Summit 24 Image 7" },
//   { id: "e248", src: "./gallery/Summit24/242.JPG", alt: "Summit 24 Image 8" }
// ]

//   },

// ];


//     const [activeEventImages, setActiveEventImages] = React.useState([]);

//     const openLightbox = (image, images) => {
//         setActiveEventImages(images);
//         setSelectedImage(image);
//     };

//     return (
//         <div className="min-h-screen bg-black text-gray-300 font-sans mt-15 overflow-x-hidden">
//             <AnimatedGlowBackground />

//             <main className="relative z-10">
//                 <section className="text-center py-24 md:py-32">
//                     <motion.h1
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
//                         className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#fac176] to-[#633902] tracking-tighter"
//                     >
//                         Chronicles of <span className="bg-clip-text bg-gradient-to-r from-white to-white/4">Innovation</span>
//                     </motion.h1>
//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.7, delay: 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
//                         className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
//                     >
//                         A visual journey through the landmark events that define E-Cell NIT Bhopal.
//                     </motion.p>
//                 </section>

//                 <div className="space-y-24 pb-24">
//                     {galleryData.map((event) => (
//                         <section key={event.title}>
//                             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
//                                 <motion.h2
//                                   initial={{ opacity: 0, x: -50 }}
//                                   whileInView={{ opacity: 1, x: 0 }}
//                                   viewport={{ once: true, amount: 0.3 }}
//                                   transition={{ duration: 0.6, ease: "easeOut" }}
//                                   className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#fac176] to-[#633902]">
//                                     {event.title}
//                                 </motion.h2>
//                                 {/* <motion.p
//                                   initial={{ opacity: 0, x: -50 }}
//                                   whileInView={{ opacity: 1, x: 0 }}
//                                   viewport={{ once: true, amount: 0.3 }}
//                                   transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
//                                   className="text-gray-400 mt-2">
//                                     {event.description}
//                                 </motion.p> */}
//                             </div>
//                             <motion.div
//   initial={{ opacity: 0 }}
//   whileInView={{ opacity: 1 }}
//   viewport={{ once: true, amount: 0.2 }}
//   transition={{ duration: 0.5 }}
//   className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
// >
//   <div
//     className="
//       grid
//       grid-cols-2
//       md:grid-cols-3
//       lg:grid-cols-4
//       gap-6
//     "
//   >
//     {event.images.map((image) => (
//       <ImageCard
//         key={image.id}
//         src={image.src}
//         alt={image.alt}
//         layoutId={image.id}
//         onClick={() => openLightbox(image, event.images)}
//       />
//     ))}
//   </div>
// </motion.div>

//                         </section>
//                     ))}
//                 </div>
//             </main>

//             <AnimatePresence>
//                 <Lightbox
//                     selectedImage={selectedImage}
//                     setSelectedImage={setSelectedImage}
//                     eventImages={activeEventImages}
//                 />
//             </AnimatePresence>
//         </div>
//     );
// };

const GalleryPage = () => {
  return (
    <section className="text-center py-24 md:py-32">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="text-5xl md:text-7xl mt-10 font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#fac176] to-[#633902] tracking-tighter"
      >
        Chronicles of Innovation
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10"
      >
        A visual journey through the landmark events that define E-Cell NIT Bhopal.
      </motion.p>
      <section>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold text-left ml-4 pl-4 bg-clip-text text-transparent mt-4 bg-gradient-to-r from-[#fac176] to-[#633902]">
          E-Summit' 25
        </motion.h2>
        <div style={{ width: '100vw', height: '60vh', marginTop: '4rem' }}>
          <DomeGallery1 />
        </div>
      </section>
      <section className="mt-20">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold text-left ml-4 pl-4 bg-clip-text text-transparent mt-4 bg-gradient-to-r from-[#fac176] to-[#633902]">
          E-Summit' 24
        </motion.h2>
        <div style={{ width: '100vw', height: '60vh', marginTop: '4rem' }}>
          <DomeGallery2 />
        </div>
      </section>
    </section>

  );
}

export default GalleryPage;