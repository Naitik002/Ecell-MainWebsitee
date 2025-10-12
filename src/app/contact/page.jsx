"use client";



import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

// Animation variants
const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const CoordinatorCard = ({ name, role, email, phone, image, linkedin }) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-zinc-900 rounded-xl p-6 hover:bg-zinc-800 transition-all duration-300 border border-yellow-500/20"
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-32 h-32 overflow-hidden rounded-full border-2 border-yellow-500">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-yellow-500">{name}</h3>
          <p className="text-gray-400 mb-2">{role}</p>
          <div className="flex flex-col space-y-2 items-center text-sm">
            <a href={`mailto:${email}`} className="flex items-center space-x-2 hover:text-yellow-500 transition-colors">
              <FaEnvelope />
              <span>{email}</span>
            </a>
            <a href={`tel:${phone}`} className="flex items-center space-x-2 hover:text-yellow-500 transition-colors">
              <FaPhone />
              <span>{phone}</span>
            </a>
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-yellow-500 transition-colors">
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const studentCoordinators = [
    {
      name: "John Doe",
      role: "President",
      email: "john.doe@ecell.com",
      phone: "+91 98765 43210",
      image: "/images/coordinators/john.jpg",
      linkedin: "https://linkedin.com/in/johndoe"
    },

  ];

  const facultyCoordinators = [
    {
      name: "Dr. Jane Smith",
      role: "Faculty Advisor",
      email: "jane.smith@nitb.ac.in",
      phone: "+91 98765 43211",
      image: "/images/faculty/jane.jpg",
      linkedin: "https://linkedin.com/in/janesmith"
    },
    // Add more faculty members here
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-black  text-white mt-25 pb-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[40vh] bg-gradient-to-b from-yellow-500/20 to-black"
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-yellow-500"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-xl text-gray-300"
            >
              Get in touch with the E-Cell team at NIT Bhopal
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
        {/* Quick Contact Section */}
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="bg-zinc-900 rounded-xl p-8 text-center hover:bg-zinc-800 transition-all duration-300 border border-yellow-500/20"
          >
            <FaEnvelope className="w-8 h-8 mx-auto text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <a href="mailto:ecell@nitb.ac.in" className="text-gray-400 hover:text-yellow-500 transition-colors">
              ecell@nitb.ac.in
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-zinc-900 rounded-xl p-8 text-center hover:bg-zinc-800 transition-all duration-300 border border-yellow-500/20"
          >
            <FaPhone className="w-8 h-8 mx-auto text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <a href="tel:+919876543210" className="text-gray-400 hover:text-yellow-500 transition-colors">
              +91 98765 43210
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-zinc-900 rounded-xl p-8 text-center hover:bg-zinc-800 transition-all duration-300 border border-yellow-500/20"
          >
            <FaMapMarkerAlt className="w-8 h-8 mx-auto text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-400">
              Maulana Azad National Institute of Technology,<br />
              Bhopal, Madhya Pradesh 462003
            </p>
          </motion.div>
        </motion.div>

        {/* Student Coordinators Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center mb-12 text-yellow-500"
          >
            Student Coordinators
          </motion.h2>
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {studentCoordinators.map((coordinator, index) => (
              <CoordinatorCard key={index} {...coordinator} />
            ))}
          </motion.div>
        </motion.div>

        {/* Faculty Coordinators Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center mb-12 text-yellow-500"
          >
            Faculty Coordinators
          </motion.h2>
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {facultyCoordinators.map((faculty, index) => (
              <CoordinatorCard key={index} {...faculty} />
            ))}
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-20"
        >
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto bg-zinc-900 rounded-xl p-8 border border-yellow-500/20"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-yellow-500">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all"
                    placeholder="Your name"
                    required
                  />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </motion.div>
              </div>
              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all"
                  placeholder="Message subject"
                  required
                />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all"
                  placeholder="Your message"
                  required
                />
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;