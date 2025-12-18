"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Linkedin, Twitter, Instagram, Mail, Phone } from "lucide-react";

const SendIcon = () => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>;


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

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] } }
};




export function Footer() {

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

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "EVENTS", path: "/events" },
    { name: "E-SUMMIT", path: "/esummit" },
    { name: "GALLERY", path: "/gallery" },
    { name: "TEAM", path: "/team" },
    { name: "SPONSOR US", path: "/sponsors" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      <footer className="bg-black z-50">
        <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        style={{ originX: 0 }} // animate from LEFT
        className="h-[1px] w-full bg-[#fac176] mb-10"
      />
        <motion.div
          className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Map */}
            <div className="w-full h-72 lg:col-span-2 md:h-96 overflow-hidden rounded-lg shadow-lg md:col-span-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.7467611771244!2d77.40177087554915!3d23.21589777903877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42e64b7279e1%3A0x2b8b11cf5f7e585e!2sRolta%20Incubation%20Center!5e0!3m2!1sen!2sin!4v1757606512962!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div>
            <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#fac176] to-[#633902]"
                      >
                        Let's Connect!
                      </motion.h2>

            <motion.div
          variants={fadeInUp}
          className="lg:col-span-1  backdrop-blur-md rounded-2xl p-8 border border-[#fac176] lg:mr-12"
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
        </div>

            {/* Right: Footer Content */}
            <div className="text-center md:col-span-1">
              {/* Logo + Title */}
              <div className="flex flex-col items-center">
                <Link href="/" className="mb-5">
                  <Image
                    src="/logo.webp"
                    alt="E-Cell Logo"
                    width={55}
                    height={55}
                    className="rounded-full hover:opacity-90 transition-opacity"
                  />
                </Link>
                <h2 className="text-2xl font-bold text-white">
                  E-Cell, NIT Bhopal
                </h2>
                <p className="text-gray-400 mt-2 max-w-md">
                  #makethingshappen
                </p>
              </div>

              {/* Nav Links */}
              <nav
                className="my-8 flex flex-wrap justify-center  gap-x-6 gap-y-2"
                aria-label="Footer"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.path}
                    className="text-base text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Socials */}
              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.linkedin.com/company/ecell-manit/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin />
                </a>
                <a
                  href="https://x.com/ecell_nitb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <Twitter />
                </a>
                <a
                  href="https://www.instagram.com/ecell_nitb/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <Instagram />
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-8 space-y-3 text-gray-400">
                <p className="flex items-center justify-center  gap-2">
                  <Mail className="text-xl text-gray-400" /> contact@ecell.com
                </p>
                <p className="flex items-center justify-center  gap-2">
                  <Phone className="text-xl text-gray-400" /> +91 7000616813
                </p>
              </div>

              {/* Copyright */}
              <div className="mt-10 pt-8 border-t border-gray-800/50">
                <p className="text-base text-gray-500 text-center ">
                  &copy; {new Date().getFullYear()} E-Cell, Bhopal. All Rights
                  Reserved.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </footer>
    </>
  );
}
