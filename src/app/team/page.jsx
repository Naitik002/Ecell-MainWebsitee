// "use client";

// import React, { useState, useMemo } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// // --- Reusable SVG Icons ---
// const LinkedinIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" fill="currentColor"/></svg>;
// const GithubIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/></svg>;

// // --- Animated Background (Reused from Contact Page for consistency) ---
// const AnimatedGlowBackground = () => (
//   <div className="absolute inset-0 -z-50 overflow-hidden bg-black">
//     <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-amber-500/10 to-transparent rounded-full animate-pulse-slow blur-3xl"></div>
//     <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-yellow-600/10 to-transparent rounded-full animate-pulse-slow animation-delay-4000 blur-3xl"></div>
//   </div>
// );

// // --- ✨ NEW: Gilded Member Card with 3D Tilt Effect ---
// const GildedMemberCard = ({ name, role, image, socials }) => {
//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.8 }}
//       transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//       className="relative group perspective-1000"
//     >
//       <motion.div
//         whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
//         transition={{ type: 'spring', stiffness: 200, damping: 15 }}
//         className="relative p-0.5 rounded-2xl overflow-hidden bg-gradient-to-b from-gray-800 to-black transition-all duration-500 preserve-3d h-full"
//       >
//         <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 opacity-0 group-hover:opacity-75 transition-opacity duration-500 animate-aurora"></div>
//         <div className="relative bg-black rounded-[14px] p-6 h-full flex flex-col items-center text-center">
//           <motion.img
//             src={image}
//             alt={name}
//             className="w-32 h-32 object-cover rounded-full border-2 border-gray-700 group-hover:border-amber-400/50 transition-colors duration-300 mb-4"
//             onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/128x128/000000/FBBF24?text=${name.split(' ').map(n=>n[0]).join('')}`; }}
//             style={{ transform: 'translateZ(40px)' }}
//           />
//           <h3
//             className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-500"
//             style={{ transform: 'translateZ(20px)' }}
//           >
//             {name}
//           </h3>
//           <p
//             className="text-gray-400 mb-4"
//             style={{ transform: 'translateZ(10px)' }}
//           >
//             {role}
//           </p>
//           <div className="flex space-x-4 mt-auto pt-4">
//             {socials.linkedin && (
//               <motion.a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-amber-400 transition-colors duration-300 w-6 h-6" whileHover={{ scale: 1.2, y: -2 }}>
//                 <LinkedinIcon />
//               </motion.a>
//             )}
//             {socials.github && (
//               <motion.a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-amber-400 transition-colors duration-300 w-6 h-6" whileHover={{ scale: 1.2, y: -2 }}>
//                 <GithubIcon />
//               </motion.a>
//             )}
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// // --- Animation Variants ---
// const fadeInUp = {
//   initial: { y: 60, opacity: 0 },
//   animate: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] } }
// };

// // --- Main Team Page Component ---
// const TeamPage = () => {
//   const [activeVertical, setActiveVertical] = useState('All');

//   const teamData = {
//     "Faculty Advisors": [
//       { name: "Dr. Rohan Verma", role: "Faculty Advisor", image: "https://placehold.co/200x200/000000/FBBF24?text=RV", socials: { linkedin: "#" } },
//       { name: "Prof. Priya Mehra", role: "Assoc. Faculty Advisor", image: "https://placehold.co/200x200/000000/FBBF24?text=PM", socials: { linkedin: "#" } },
//     ],
//     "Core Team": [
//       { name: "Aisha Sharma", role: "President", image: "https://placehold.co/200x200/000000/FBBF24?text=AS", socials: { linkedin: "#", github: "#" } },
//       { name: "Ben Carter", role: "Vice President", image: "https://placehold.co/200x200/000000/FBBF24?text=BC", socials: { linkedin: "#" } },
//       { name: "Chloe Davis", role: "General Secretary", image: "https://placehold.co/200x200/000000/FBBF24?text=CD", socials: { linkedin: "#" } },
//     ],
//     "Technical": [
//       { name: "David Lee", role: "Tech Head", image: "https://placehold.co/200x200/000000/FBBF24?text=DL", socials: { linkedin: "#", github: "#" } },
//       { name: "Eva Chen", role: "Web Developer", image: "https://placehold.co/200x200/000000/FBBF24?text=EC", socials: { linkedin: "#", github: "#" } },
//     ],
//     "Marketing": [
//       { name: "Frank Gomez", role: "Marketing Head", image: "https://placehold.co/200x200/000000/FBBF24?text=FG", socials: { linkedin: "#" } },
//     ],
//     "Design": [
//       { name: "Grace Hall", role: "Design Head", image: "https://placehold.co/200x200/000000/FBBF24?text=GH", socials: { linkedin: "#" } },
//       { name: "Henry Ian", role: "Graphic Designer", image: "https://placehold.co/200x200/000000/FBBF24?text=HI", socials: { linkedin: "#" } },
//     ]
//   };

//   const verticals = ['All', 'Technical', 'Marketing', 'Design'];

//   const filteredMembers = useMemo(() => {
//     if (activeVertical === 'All') {
//       return verticals.slice(1).flatMap(key => teamData[key] || []);
//     }
//     return teamData[activeVertical] || [];
//   }, [activeVertical, teamData]);

//   return (
//     <div className="min-h-screen bg-black mt-20 text-gray-300 font-sans selection:bg-amber-500/30 overflow-x-hidden">
//       <AnimatedGlowBackground />

//       <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <motion.section
//           initial="initial"
//           animate="animate"
//           variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
//           className="text-center mb-20"
//         >
//           <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 tracking-tighter">
//             The Minds Behind the <span className="bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Mission</span>
//           </motion.h1>
//           <motion.p variants={fadeInUp} className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
//             Meet the dedicated individuals who drive our vision forward. A collective of innovators, creators, and leaders committed to excellence.
//           </motion.p>
//         </motion.section>

//         {/* --- Faculty and Core Team (Always Visible) --- */}
//         {["Faculty Advisors", "Core Team"].map(sectionTitle => (
//           <section key={sectionTitle} className="mb-20">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{ duration: 0.5 }}
//               className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-500"
//             >
//               {sectionTitle}
//             </motion.h2>
//             <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
//               {teamData[sectionTitle].map((member, index) => (
//                 <GildedMemberCard key={index} {...member} />
//               ))}
//             </div>
//           </section>
//         ))}

//         {/* --- Vertical Teams (Filterable) --- */}
//         <section>
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{ duration: 0.5 }}
//               className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-500"
//             >
//               Our Verticals
//             </motion.h2>
//             {/* Filter Buttons */}
//             <div className="flex justify-center flex-wrap gap-4 mb-12">
//               {verticals.map((vertical) => (
//                 <button
//                   key={vertical}
//                   onClick={() => setActiveVertical(vertical)}
//                   className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black
//                     ${activeVertical === vertical ? 'text-black' : 'text-amber-400 bg-black border border-amber-400/50 hover:bg-amber-400/10'}`}
//                 >
//                   <AnimatePresence>
//                     {activeVertical === vertical && (
//                       <motion.span
//                         layoutId="activeVertical"
//                         className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     )}
//                   </AnimatePresence>
//                   <span className="relative z-10">{vertical}</span>
//                 </button>
//               ))}
//             </div>

//             {/* Team Grid */}
//             <motion.div layout className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//               <AnimatePresence>
//                 {filteredMembers.map((member, index) => (
//                   <GildedMemberCard key={`${activeVertical}-${member.name}`} {...member} />
//                 ))}
//               </AnimatePresence>
//             </motion.div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default TeamPage;














"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { data1, data2 } from '@/components/TeamData';

const LinkedinIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" fill="currentColor"/></svg>;
const InstagramIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.784.305-1.48.73-2.175 1.425C1.27 2.73 1.02 3.33.63 4.136c-.3.765-.5 1.63-.56 2.91C.015 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.28.26 2.15.56 2.91.3.765.73 1.46 1.425 2.155.695.695 1.39 1.12 2.155 1.425.765.3 1.63.5 2.91.56 1.28.057 1.687.072 4.947.072s3.667-.015 4.947-.072c1.28-.06 2.15-.26 2.91-.56.765-.3 1.46-.73 2.155-1.425.695-.695 1.12-1.39 1.425-2.155.3-.765.5-1.63.56-2.91.057-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.28-.26-2.15-.56-2.91-.3-.765-.73-1.46-1.425-2.155C21.27 1.27 20.67 1.02 19.864.63c-.765-.3-1.63-.5-2.91-.56C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.012 4.85.07 1.17.055 1.805.248 2.227.415.562.217.96.477 1.382.896.42.42.68.82.896 1.382.167.422.36 1.057.413 2.227.058 1.265.07 1.646.07 4.85s-.012 3.585-.07 4.85c-.055 1.17-.248 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.42-.82.68-1.382.896-.422.167-1.057.36-2.227.413-1.265.058-1.646.07-4.85.07s-3.585-.012-4.85-.07c-1.17-.055-1.805-.248-2.227-.413-.562.217-.96-.477-1.382-.896-.42-.42-.68-.82-.896-1.382-.167-.422-.36-1.057-.413-2.227-.058-1.265-.07-1.646-.07-4.85s.012-3.585.07-4.85c.055-1.17.248 1.805.413-2.227.217-.562.477.96.896-1.382.42-.42.82.68 1.382-.896.422-.167 1.057.36 2.227.413C8.415 2.172 8.797 2.16 12 2.16zm0 2.91c-3.61 0-6.49 2.88-6.49 6.49s2.88 6.49 6.49 6.49 6.49-2.88 6.49-6.49S15.61 5.07 12 5.07zm0 10.81c-2.4 0-4.33-1.93-4.33-4.33s1.93-4.33 4.33-4.33 4.33 1.93 4.33 4.33-1.93 4.33-4.33 4.33zm6.405-11.835c-.75 0-1.36-.61-1.36-1.36s.61-1.36 1.36-1.36 1.36.61 1.36 1.36-.61 1.36-1.36 1.36z" fill="currentColor"/></svg>;
const EmailIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"><title>Email</title><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" fill="currentColor"/></svg>;

const AnimatedGlowBackground = () => (
  <div className="absolute inset-0 -z-50 overflow-hidden bg-black">
    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-amber-500/10 to-transparent rounded-full animate-pulse-slow blur-3xl"></div>
    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-yellow-600/10 to-transparent rounded-full animate-pulse-slow animation-delay-4000 blur-3xl"></div>
  </div>
);

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
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 opacity-0 group-hover:opacity-75 transition-opacity duration-500 animate-aurora"></div>
        <div className="relative bg-black rounded-[14px] p-6 h-full flex flex-col items-center text-center">
          <motion.img
            src={imgLink}
            alt={personName}
            className="w-32 h-32 object-cover rounded-full border-2 border-gray-700 group-hover:border-amber-400/50 transition-colors duration-300 mb-4"
            onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/128x128/000000/FBBF24?text=${personName.split(' ').map(n=>n[0]).join('')}`; }}
            style={{ transform: 'translateZ(40px)' }}
          />
          <h3
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-500"
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
              <motion.a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-amber-400 transition-colors duration-300 w-6 h-6" whileHover={{ scale: 1.2, y: -2 }}>
                <LinkedinIcon />
              </motion.a>
            )}
            {insta && (
              <motion.a href={insta} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-amber-400 transition-colors duration-300 w-6 h-6" whileHover={{ scale: 1.2, y: -2 }}>
                <InstagramIcon />
              </motion.a>
            )}
            {mail && (
              <motion.a href={mail} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-amber-400 transition-colors duration-300 w-6 h-6" whileHover={{ scale: 1.2, y: -2 }}>
                <EmailIcon />
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] } }
};

const TeamPage = () => {
  const [activeVertical, setActiveVertical] = useState('All');

  const facultyData = [
    {
      imgLink: "https://placehold.co/200x200/000000/FBBF24?text=AB",
      personName: "Dr. Akhilesh Barve",
      personVertical: "Chairman MRIC",
      linkedin: "https://www.linkedin.com/in/akhilesh-barve-879477201/",
      insta: null,
      mail: null
    },
    {
      imgLink: "https://placehold.co/200x200/000000/FBBF24?text=DK",
      personName: "Dr. Deepak Kumar",
      personVertical: "Coordinator",
      linkedin: "https://www.linkedin.com/in/dr-deepak-kumar-ab3787166/",
      insta: null,
      mail: null
    },
  ];

  const verticals = ['All', 'Web Developer', 'Content Writer', 'Event Manager', 'Sponsorship Executive', 'Video Editor', 'Designer'];

  const teamData = useMemo(() => {
    const groupedVerticals = {};
    const verticalsList = verticals.slice(1);

    verticalsList.forEach(vertical => {
      groupedVerticals[vertical] = data2.filter(member => member.personVertical === vertical);
    });

    return {
      "Faculty Advisors": facultyData,
      "Core Team": data1,
      ...groupedVerticals
    };
  }, [data1, data2]);

  const filteredMembers = useMemo(() => {
    if (activeVertical === 'All') {
      const verticalsOnly = verticals.slice(1);
      return verticalsOnly.flatMap(key => teamData[key] || []);
    }
    return teamData[activeVertical] || [];
  }, [activeVertical, teamData, verticals]);

  return (
    <div className="min-h-screen bg-black mt-20 text-gray-300 font-sans selection:bg-amber-500/30 overflow-x-hidden">
      <AnimatedGlowBackground />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.section
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
          className="text-center mb-20"
        >
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 tracking-tighter">
            The Minds Behind the <span className="bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Mission</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the dedicated individuals who drive our vision forward. A collective of innovators, creators, and leaders committed to excellence.
          </motion.p>
        </motion.section>

        {["Faculty Advisors", "Core Team"].map(sectionTitle => (
          <section key={sectionTitle} className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-500"
            >
              {sectionTitle}
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {teamData[sectionTitle] && teamData[sectionTitle].map((member, index) => (
                <GildedMemberCard key={`${sectionTitle}-${index}`} {...member} />
              ))}
            </div>
          </section>
        ))}

        <section>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-500"
            >
              Our Verticals
            </motion.h2>
            <div className="flex justify-center flex-wrap gap-4 mb-12">
              {verticals.map((vertical) => (
                <button
                  key={vertical}
                  onClick={() => setActiveVertical(vertical)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black
                    ${activeVertical === vertical ? 'text-black' : 'text-amber-400 bg-black border border-amber-400/50 hover:bg-amber-400/10'}`}
                >
                  <AnimatePresence>
                    {activeVertical === vertical && (
                      <motion.span
                        layoutId="activeVertical"
                        className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>
                  <span className="relative z-10">{vertical}</span>
                </button>
              ))}
            </div>

            <motion.div layout className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <AnimatePresence>
                {filteredMembers.map((member) => (
                  <GildedMemberCard key={`${activeVertical}-${member.personName}`} {...member} />
                ))}
              </AnimatePresence>
            </motion.div>
        </section>
      </main>
    </div>
  );
};

export default TeamPage;