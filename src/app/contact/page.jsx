// // "use client";



// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

// // // Animation variants
// // const fadeInUp = {
// //   initial: { y: 60, opacity: 0 },
// //   animate: { y: 0, opacity: 1 },
// //   transition: { duration: 0.6, ease: "easeOut" }
// // };

// // const staggerChildren = {
// //   animate: {
// //     transition: {
// //       staggerChildren: 0.2
// //     }
// //   }
// // };

// // const CoordinatorCard = ({ name, role, email, phone, image, linkedin }) => {
// //   return (
// //     <motion.div
// //       variants={fadeInUp}
// //       className="bg-zinc-900 rounded-xl p-6 hover:bg-zinc-800 transition-all duration-300 border border-yellow-500/20"
// //     >
// //       <div className="flex flex-col items-center space-y-4">
// //         <div className="relative w-32 h-32 overflow-hidden rounded-full border-2 border-yellow-500">
// //           <img
// //             src={image}
// //             alt={name}
// //             className="w-full h-full object-cover"
// //           />
// //         </div>
// //         <div className="text-center">
// //           <h3 className="text-xl font-bold text-yellow-500">{name}</h3>
// //           <p className="text-gray-400 mb-2">{role}</p>
// //           <div className="flex flex-col space-y-2 items-center text-sm">
// //             <a href={`mailto:${email}`} className="flex items-center space-x-2 hover:text-yellow-500 transition-colors">
// //               <FaEnvelope />
// //               <span>{email}</span>
// //             </a>
// //             <a href={`tel:${phone}`} className="flex items-center space-x-2 hover:text-yellow-500 transition-colors">
// //               <FaPhone />
// //               <span>{phone}</span>
// //             </a>
// //             {linkedin && (
// //               <a href={linkedin} target="_blank" rel="noopener noreferrer"
// //                 className="flex items-center space-x-2 hover:text-yellow-500 transition-colors">
// //                 <FaLinkedin />
// //                 <span>LinkedIn</span>
// //               </a>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // const Contact = () => {
// //   const studentCoordinators = [
// //     {
// //       name: "John Doe",
// //       role: "President",
// //       email: "john.doe@ecell.com",
// //       phone: "+91 98765 43210",
// //       image: "/images/coordinators/john.jpg",
// //       linkedin: "https://linkedin.com/in/johndoe"
// //     },

// //   ];

// //   const facultyCoordinators = [
// //     {
// //       name: "Dr. Jane Smith",
// //       role: "Faculty Advisor",
// //       email: "jane.smith@nitb.ac.in",
// //       phone: "+91 98765 43211",
// //       image: "/images/faculty/jane.jpg",
// //       linkedin: "https://linkedin.com/in/janesmith"
// //     },
// //     // Add more faculty members here
// //   ];

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Add your form submission logic here
// //     console.log('Form submitted');
// //   };

// //   return (
// //     <div className="min-h-screen bg-black  text-white mt-25 pb-20">
// //       {/* Hero Section */}
// //       <motion.div
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ duration: 1 }}
// //         className="relative h-[40vh] bg-gradient-to-b from-yellow-500/20 to-black"
// //       >
// //         <div className="absolute inset-0 bg-black/40" />
// //         <div className="absolute inset-0 flex items-center justify-center">
// //           <div className="text-center">
// //             <motion.h1
// //               initial={{ y: 20, opacity: 0 }}
// //               animate={{ y: 0, opacity: 1 }}
// //               transition={{ delay: 0.2 }}
// //               className="text-5xl md:text-6xl font-bold text-yellow-500"
// //             >
// //               Contact Us
// //             </motion.h1>
// //             <motion.p
// //               initial={{ y: 20, opacity: 0 }}
// //               animate={{ y: 0, opacity: 1 }}
// //               transition={{ delay: 0.4 }}
// //               className="mt-4 text-xl text-gray-300"
// //             >
// //               Get in touch with the E-Cell team at NIT Bhopal
// //             </motion.p>
// //           </div>
// //         </div>
// //       </motion.div>

// //       {/* Main Content */}
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
// //         {/* Quick Contact Section */}
// //         <motion.div
// //           variants={staggerChildren}
// //           initial="initial"
// //           animate="animate"
// //           className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
// //         >
// //           <motion.div
// //             variants={fadeInUp}
// //             className="bg-zinc-900 rounded-xl p-8 text-center hover:bg-zinc-800 transition-all duration-300 border border-yellow-500/20"
// //           >
// //             <FaEnvelope className="w-8 h-8 mx-auto text-yellow-500 mb-4" />
// //             <h3 className="text-xl font-semibold mb-2">Email Us</h3>
// //             <a href="mailto:ecell@nitb.ac.in" className="text-gray-400 hover:text-yellow-500 transition-colors">
// //               ecell@nitb.ac.in
// //             </a>
// //           </motion.div>

// //           <motion.div
// //             variants={fadeInUp}
// //             className="bg-zinc-900 rounded-xl p-8 text-center hover:bg-zinc-800 transition-all duration-300 border border-yellow-500/20"
// //           >
// //             <FaPhone className="w-8 h-8 mx-auto text-yellow-500 mb-4" />
// //             <h3 className="text-xl font-semibold mb-2">Call Us</h3>
// //             <a href="tel:+919876543210" className="text-gray-400 hover:text-yellow-500 transition-colors">
// //               +91 98765 43210
// //             </a>
// //           </motion.div>

// //           <motion.div
// //             variants={fadeInUp}
// //             className="bg-zinc-900 rounded-xl p-8 text-center hover:bg-zinc-800 transition-all duration-300 border border-yellow-500/20"
// //           >
// //             <FaMapMarkerAlt className="w-8 h-8 mx-auto text-yellow-500 mb-4" />
// //             <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
// //             <p className="text-gray-400">
// //               Maulana Azad National Institute of Technology,<br />
// //               Bhopal, Madhya Pradesh 462003
// //             </p>
// //           </motion.div>
// //         </motion.div>

// //         {/* Student Coordinators Section */}
// //         <motion.div
// //           initial="initial"
// //           whileInView="animate"
// //           viewport={{ once: true }}
// //           className="mb-20"
// //         >
// //           <motion.h2
// //             variants={fadeInUp}
// //             className="text-3xl font-bold text-center mb-12 text-yellow-500"
// //           >
// //             Student Coordinators
// //           </motion.h2>
// //           <motion.div
// //             variants={staggerChildren}
// //             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
// //           >
// //             {studentCoordinators.map((coordinator, index) => (
// //               <CoordinatorCard key={index} {...coordinator} />
// //             ))}
// //           </motion.div>
// //         </motion.div>

// //         {/* Faculty Coordinators Section */}
// //         <motion.div
// //           initial="initial"
// //           whileInView="animate"
// //           viewport={{ once: true }}
// //         >
// //           <motion.h2
// //             variants={fadeInUp}
// //             className="text-3xl font-bold text-center mb-12 text-yellow-500"
// //           >
// //             Faculty Coordinators
// //           </motion.h2>
// //           <motion.div
// //             variants={staggerChildren}
// //             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
// //           >
// //             {facultyCoordinators.map((faculty, index) => (
// //               <CoordinatorCard key={index} {...faculty} />
// //             ))}
// //           </motion.div>
// //         </motion.div>

// //         {/* Contact Form */}
// //         <motion.div
// //           initial="initial"
// //           whileInView="animate"
// //           viewport={{ once: true }}
// //           className="mt-20"
// //         >
// //           <motion.div
// //             variants={fadeInUp}
// //             className="max-w-3xl mx-auto bg-zinc-900 rounded-xl p-8 border border-yellow-500/20"
// //           >
// //             <h2 className="text-3xl font-bold text-center mb-8 text-yellow-500">Send us a Message</h2>
// //             <form onSubmit={handleSubmit} className="space-y-6">
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                 <motion.div variants={fadeInUp}>
// //                   <label className="block text-sm font-medium mb-2">Name</label>
// //                   <input
// //                     type="text"
// //                     className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all"
// //                     placeholder="Your name"
// //                     required
// //                   />
// //                 </motion.div>
// //                 <motion.div variants={fadeInUp}>
// //                   <label className="block text-sm font-medium mb-2">Email</label>
// //                   <input
// //                     type="email"
// //                     className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all"
// //                     placeholder="your@email.com"
// //                     required
// //                   />
// //                 </motion.div>
// //               </div>
// //               <motion.div variants={fadeInUp}>
// //                 <label className="block text-sm font-medium mb-2">Subject</label>
// //                 <input
// //                   type="text"
// //                   className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all"
// //                   placeholder="Message subject"
// //                   required
// //                 />
// //               </motion.div>
// //               <motion.div variants={fadeInUp}>
// //                 <label className="block text-sm font-medium mb-2">Message</label>
// //                 <textarea
// //                   rows={6}
// //                   className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all"
// //                   placeholder="Your message"
// //                   required
// //                 />
// //               </motion.div>
// //               <motion.div variants={fadeInUp} className="text-center">
// //                 <button
// //                   type="submit"
// //                   className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300"
// //                 >
// //                   Send Message
// //                 </button>
// //               </motion.div>
// //             </form>
// //           </motion.div>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Contact;




// "use client";

// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaArrowRight } from 'react-icons/fa';
// import { FiArrowUpRight } from 'react-icons/fi';

// // ✨ NEW: An animated background to create a dynamic, "breathing" effect.

// // ✨ NEW: A reusable, animated input component for a cleaner and more interactive form.
// const AnimatedInput = ({ label, ...props }) => {
//   const [isFocused, setIsFocused] = React.useState(false);
//   return (
//     <motion.div variants={fadeInUp} className="relative">
//       <motion.label
//         className="absolute left-4 transition-all duration-300 pointer-events-none"
//         animate={{
//           y: isFocused || props.value ? -10 : 20,
//           scale: isFocused || props.value ? 0.8 : 1,
//           color: isFocused ? '#FBBF24' : '#9CA3AF',
//         }}
//       >
//         {label}
//       </motion.label>
//       <input
//         onFocus={() => setIsFocused(true)}
//         onBlur={(e) => setIsFocused(e.target.value !== '')}
//         className="w-full px-4 pt-6 pb-2 rounded-lg  border-2 border-gray-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none transition-all duration-300 backdrop-blur-sm"
//         {...props}
//       />
//     </motion.div>
//   );
// };


// // 🎨 ENHANCEMENT: Upgraded Coordinator Card with better hover effects.
// const CoordinatorCard = ({ name, role, email, phone, image, linkedin }) => {
//   return (
//     <motion.div
//       variants={fadeInUp}
//       whileHover={{ scale: 1.03, y: -5 }}
//       transition={{ type: 'spring', stiffness: 300 }}
//       className=" backdrop-blur-md rounded-2xl p-6 group transition-all duration-300 border border-gray-700/50 hover:border-amber-400/50"
//     >
//       <div className="flex flex-col items-center space-y-4">
//         <div className="relative w-32 h-32">
//           <img
//             src={image}
//             alt={name}
//             className="w-full h-full object-cover rounded-full border-2 border-gray-700 group-hover:border-amber-400 transition-colors duration-300"
//           />
//            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/50 to-transparent"></div>
//         </div>
//         <div className="text-center">
//           <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">{name}</h3>
//           <p className="text-gray-400 mb-4">{role}</p>
//           <div className="flex flex-col space-y-2 items-center text-sm text-gray-400">
//             {[
//               { icon: <FaEnvelope />, href: `mailto:${email}`, text: email },
//               { icon: <FaPhone />, href: `tel:${phone}`, text: phone },
//               linkedin && { icon: <FaLinkedin />, href: linkedin, text: "LinkedIn" }
//             ].filter(Boolean).map((item, i) => (
//               <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
//                  className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                  style={{ transitionDelay: `${i * 100}ms` }}
//               >
//                 {item.icon} <span>{item.text}</span>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // --- Animation Variants ---
// const fadeInUp = {
//   initial: { y: 60, opacity: 0 },
//   animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } }
// };

// const staggerContainer = {
//   animate: { transition: { staggerChildren: 0.1 } }
// };


// // --- Main Contact Component ---
// const Contact = () => {
//   const [formData, setFormData] = React.useState({ name: '', email: '', subject: '', message: '' });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const studentCoordinators = [
//     {
//       name: "Aisha Sharma",
//       role: "President",
//       email: "aisha.s@ecell.com",
//       phone: "+91 98765 43210",
//       image: "/images/coordinators/aisha.jpg", // Replace with actual image paths
//       linkedin: "https://linkedin.com/in/aishasharma"
//     },
//     // Add more student coordinators...
//   ];

//   const facultyCoordinators = [
//     {
//       name: "Dr. Rohan Verma",
//       role: "Faculty Advisor",
//       email: "rohan.v@nitb.ac.in",
//       phone: "+91 98765 43211",
//       image: "/images/faculty/rohan.jpg", // Replace with actual image paths
//       linkedin: "https://linkedin.com/in/rohanverma"
//     },
//     // Add more faculty members here
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Add your form submission logic here (e.g., API call)
//   };

//   return (
//     <div className="min-h-screen  text-gray-200 font-sans mt-50 selection:bg-amber-500/30">



//       <motion.div
//         initial="initial"
//         animate="animate"
//         variants={staggerContainer}
//         className="relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden px-4"
//       >
//         <div className="z-10">
//           <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
//             Let's Build Together
//           </motion.h1>
//           <motion.p variants={fadeInUp} className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
//             Have a question, a brilliant idea, or just want to connect? We're here for it. Reach out and let's start a conversation.
//           </motion.p>
//         </div>
//       </motion.div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 -mt-20">

//         {/* Quick Contact & Form Section */}
//         <motion.div
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={staggerContainer}
//             className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 mb-24 items-start"
//         >
//             {/* Left Side: Info */}
//             <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-8">
//                 <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">
//                     Get in Touch
//                 </h2>
//                 {[
//                     { icon: FaEnvelope, title: "Email Us", content: "ecell@nitb.ac.in", href: "mailto:ecell@nitb.ac.in" },
//                     { icon: FaPhone, title: "Call Us", content: "+91 98765 43210", href: "tel:+919876543210" },
//                     { icon: FaMapMarkerAlt, title: "Visit Us", content: "MANIT Bhopal, MP, 462003" },
//                 ].map((item, index) => (
//                     <motion.div key={index} variants={fadeInUp} className="flex items-start space-x-4">
//                         <item.icon className="w-6 h-6 text-amber-400 mt-1" />
//                         <div>
//                             <h3 className="text-lg font-semibold text-gray-200">{item.title}</h3>
//                             {item.href ? (
//                                 <a href={item.href} className="text-gray-400 hover:text-amber-400 transition-colors group flex items-center">
//                                     {item.content} <FiArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
//                                 </a>
//                             ) : (
//                                 <p className="text-gray-400">{item.content}</p>
//                             )}
//                         </div>
//                     </motion.div>
//                 ))}
//             </motion.div>

//             {/* Right Side: Form */}
//             <motion.div
//                 variants={fadeInUp}
//                 className="lg:col-span-3  backdrop-blur-md rounded-2xl p-8 border border-gray-700/50"
//             >
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                     <AnimatedInput label="Your Name" name="name" type="text" required value={formData.name} onChange={handleInputChange} />
//                     <AnimatedInput label="Your Email" name="email" type="email" required value={formData.email} onChange={handleInputChange} />
//                     <AnimatedInput label="Subject" name="subject" type="text" required value={formData.subject} onChange={handleInputChange} />
//                     <motion.div variants={fadeInUp} className="relative">
//                         <textarea
//                             name="message"
//                             rows={5}
//                             className="w-full px-4 py-3 rounded-lg  border-2 border-gray-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none transition-all duration-300 backdrop-blur-sm"
//                             placeholder="Your Message..."
//                             required
//                             value={formData.message}
//                             onChange={handleInputChange}
//                         />
//                     </motion.div>
//                     <motion.div variants={fadeInUp} className="text-center">
//                         <button
//                             type="submit"
//                             className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-amber-400 bg-gray-900 rounded-lg shadow-lg transition-all duration-300 hover:shadow-amber-400/30"
//                         >
//                             <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-300 ease-out bg-amber-400 group-hover:w-full group-hover:h-full"></span>
//                             <span className="relative text-black group-hover:text-gray-900 transition-colors duration-300">Send Message</span>
//                         </button>
//                     </motion.div>
//                 </form>
//             </motion.div>
//         </motion.div>


//         {/* Coordinators Section */}
//         {[{ title: "Student Coordinators", data: studentCoordinators }, { title: "Faculty Coordinators", data: facultyCoordinators }].map((section, idx) => (
//           <motion.div
//             key={idx}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={staggerContainer}
//             className="mb-24"
//           >
//             <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">
//               {section.title}
//             </motion.h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {section.data.map((coordinator, index) => (
//                 <CoordinatorCard key={index} {...coordinator} />
//               ))}
//             </div>
//           </motion.div>
//         ))}

//       </div>
//     </div>
//   );
// };

// export default Contact;
















"use client";

import React from 'react';
// Using framer-motion for smooth, physics-based animations.
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

// --- Reusable SVG Icons for a modern look ---
// Using inline SVGs to avoid extra dependencies and ensure consistency.
const MailIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const PhoneIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const MapPinIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const LinkedinIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const ArrowUpRightIcon = () => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>;
const SendIcon = () => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>;

// --- ✨ NEW: Animated Background Component (Black & Yellow Theme) ---
const AnimatedGlowBackground = () => {
  return (
    <div className="absolute inset-0 -z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-amber-500/10 to-transparent rounded-full animate-pulse-slow blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-yellow-600/10 to-transparent rounded-full animate-pulse-slow animation-delay-4000 blur-3xl"></div>
    </div>
  );
};


// --- ✨ NEW: Universal Animated Form Field (Black & Yellow Theme) ---
const AnimatedFormField = ({ label, name, type = 'text', as = 'input', value, onChange, required }) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const isFilled = value && value.length > 0;
  const InputComponent = as;

  return (
    <motion.div variants={fadeInUp} className="relative">
      <motion.label
        htmlFor={name}
        className="absolute left-4 transition-all duration-300 pointer-events-none "
        animate={{
          y: isFocused || isFilled ? -2 : 20,
          scale: isFocused || isFilled ? 0.8 : 1,
          color: isFocused ? '#FBBF24' : '#9CA3AF',
        }}
      >
        {label}
      </motion.label>
      <InputComponent
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        rows={as === 'textarea' ? 5 : undefined}
        className="w-full px-4 pt-6 pb-2 rounded-lg border-2 border-[#fac176] focus:border-amber-400 focus:ring-2 focus:ring-amber-400/50 outline-none transition-all duration-300 backdrop-blur-sm text-white"
      />
    </motion.div>
  );
};

// --- ✨ NEW: Gilded-Border Card Component ---
const GildedCoordinatorCard = ({ name, role, image, linkedin, mail, insta }) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      className="relative p-0.5 rounded-2xl group transition-all duration-300 overflow-hidden bg-gradient-to-b from-gray-800 to-black"
    >
      {/* The animated gilded effect */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#fac176] to-[#633902] opacity-0 group-hover:opacity-75 transition-opacity duration-500 animate-aurora"></div>

      <div className="relative bg-black rounded-[14px] p-6 h-full">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative w-32 h-32">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-full border-2 border-gray-700 group-hover:border-amber-400/50 transition-colors duration-300"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/128x128/000000/FBBF24?text=Img'; }}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div>
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#fac176] to-[#633902]">{name}</h3>
            <p className="text-gray-400">{role}</p>
          </div>
          <div className="pt-2 flex space-x-4">
            {[
              { icon: <MailIcon />, href: `${mail}`, text: mail },
              linkedin && { icon: <LinkedinIcon />, href: linkedin, text: "LinkedIn" }, {
              }
            ].filter(Boolean).map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-gray-400 hover:text-[#fac176] transition-all duration-300 my-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                style={{ transitionDelay: `${100 + i * 100}ms` }}
              >
                <span className="w-5 h-5">{item.icon}</span> 
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};


// --- Animation Variants ---
const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] } }
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } }
};


// --- Main Contact Component ---
const Contact = () => {
  const [formData, setFormData] = React.useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = React.useState({ submitted: false, message: '' });
  const [loading, setLoading] = React.useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL = "https://script.google.com/macros/s/AKfycbzu5aJyChvNegJ0W4dsonz5GyLej8Dmc5aRf8gPKu8JJN2UfMsRZdcR0vzyKFnTo94Wyw/exec";

    setLoading(true);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors", // prevents CORS issues
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setFormStatus({ submitted: true, message: "Thank you! Your message has been sent." });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus({ submitted: false, message: '' }), 5000);
    } catch (error) {
      console.error("Error!", error.message);
      setFormStatus({ submitted: true, message: "Oops! Something went wrong." });
    } finally {
      setLoading(false);
    }
  };


  const studentCoordinators = [
    {
    image: '/Images-team/Aryan Samil.webp',
    name: 'Aryan Samil',
    role: 'President',
    linkedin: 'https://www.linkedin.com/in/aryan-samil-249414276',
    insta: 'https://instagram.com/aryann__09?igshid=MzNlNGNkZWQ4Mg==',
    mail: 'mailto:aryan.samil.54@gmail.com'
  },
  {
    image: '/Images-team/Sanjana Kumari.webp',
    name: 'Sanjana Kumari',
    role: 'Vice President',
    linkedin: 'https://www.linkedin.com/in/sanjana-kumari-3bab99258',
    insta: 'https://instagram.com/sanjanaaa._13_?igshid=ZDc4ODBmNjlmNQ==',
    mail: 'mailto:sanjanaparul940@gmail.com'
  },
  {
    image: '/Images-team/Eashan Srivastava.webp',
    name: 'Eashan Srivastava',
    role: 'Co-Cordinator (Finance)',
    linkedin: 'https://www.linkedin.com/in/eashan-srivastava-191384255',
    insta: 'https://instagram.com/eashmo17?igshid=MzNlNGNkZWQ4Mg==',
    mail: 'mailto:srivastavaeashan@gmail.com'
  },

  {
    image: '/Images-team/Kavish Sarse.jpg',
    name: 'Kavish Sarse',
    role: 'Co-Cordinator (Operations)',
    linkedin: 'https://www.linkedin.com/in/kavish-sarse-0819b3254',
    insta: 'https://instagram.com/kavish_sarse?igshid=MzNlNGNkZWQ4Mg==',
    mail: 'mailto:kavishsarse121@gmail.com'
  },
  ];

  const facultyCoordinators = [
    {
      image: "/Images-team/DrAkhileshbharwe.webp",
      name: "Dr. Akhilesh Barve",
      role: "Chairman MRIC",
      linkedin: "https://www.linkedin.com/in/akhilesh-barve-879477201/",
      insta: null,
      mail: null
    },
    {
      image: "/Images-team/Dr. Vinod Yadav.jpg",
      name: "Dr. Vinod Yadav",
      rolt: "Coordinator",
      linkedin: "https://www.linkedin.com/in/vinod-yadav-85a01a21/",
      insta: null,
      mail: null
    },
  ];

  return (
    <div className="min-h-screen bg-black mt-5 text-gray-300 font-sans overflow-x-hidden">
      <AnimatedGlowBackground />

      <main className="relative z-10">
        <motion.section
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="min-h-[70vh] flex flex-col items-center justify-center text-center p-4"
        >
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#fac176] to-[#633902] tracking-tighter">
            Let's Build Together
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Have a question, a brilliant idea, or just want to connect? We're here for it. Reach out and let's start a conversation that matters.
          </motion.p>
        </motion.section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 -mt-20">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-5 gap-12"
          >
            {/* Left Side: Info */}
            <motion.div variants={fadeInUp} className="lg:col-span-2  space-y-8 pt-8 lg:pl-10">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#fac176] to-[#633902]">
                Get in Touch
              </h2>
              {[
                { icon: MailIcon, title: "Email Us", content: "contact@ecell.com", href: "mailto:ecell@nitb.ac.in" },
                { icon: PhoneIcon, title: "Call Us", content: "+91 70006 16813", href: "tel:+917000616813" },
                { icon: MapPinIcon, title: "Visit Us", content: "MANIT Bhopal, MP, 462003" },
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp} className="flex items-start space-x-5">
                  <div className="mt-1 text-[#fac176]"><item.icon /></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-200">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-gray-400 hover:text-amber-300 transition-colors group inline-flex items-center">
                        {item.content} <ArrowUpRightIcon className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-y-0.5 group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </a>
                    ) : (
                      <p className="text-gray-400">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-3  backdrop-blur-md rounded-2xl p-8 border border-[#fac176] lg:mr-12"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <AnimatedFormField label="Your Name" name="name" required value={formData.name}
                onChange={(e) => {
                  // Allow only letters and spaces
                  const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                  setFormData({ ...formData, name: value });
                }} />
                <AnimatedFormField label="Your Email" name="email" type="email" required value={formData.email} onChange={handleInputChange} />
                <AnimatedFormField label="Subject" name="subject" required value={formData.subject} onChange={handleInputChange} />
                <AnimatedFormField label="Your Message..." name="message" as="textarea" required value={formData.message} onChange={handleInputChange} />
                <motion.div variants={fadeInUp} className="text-center pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-[#fac176] bg-black rounded-lg shadow-lg transition-all duration-300 border border-[#fac176] w-full md:w-auto
    ${loading ? "cursor-not-allowed" : "hover:shadow-amber-400/30"}
  `}
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#fac176] to-[#633902] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="relative flex items-center space-x-2 group-hover:text-black transition-colors duration-300">
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <span>Send Message</span> <SendIcon />
                        </>
                      )}
                    </span>
                  </button>

                </motion.div>
                <AnimatePresence>
                  {formStatus.submitted && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-center text-green-400"
                    >
                      {formStatus.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* Coordinators Sections */}
        {[{ title: "Student Coordinators", data: studentCoordinators }, { title: "Faculty Coordinators", data: facultyCoordinators }].map((section, idx) => (
          <motion.section
            key={idx}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="py-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#fac176] to-[#633902]">
              {section.title}
            </motion.h2>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-8 justify-center">
              {section.data.map((coordinator, index) => (
                <GildedCoordinatorCard key={index} {...coordinator} />
              ))}
            </div>
          </motion.section>
        ))}
      </main>
    </div>
  );
};

export default Contact;

