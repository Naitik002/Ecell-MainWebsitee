"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Twitter, Instagram, Facebook, X, Infinity } from "lucide-react";

const SocialBar = () => {
  const [open, setOpen] = useState(false);

  const socials = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/company/ecell-manit/posts/?feedView=all",
    },
    {
      name: "Twitter",
      icon: <Twitter size={20} />,
      href: "https://x.com/ecell_nitb",
    },
    {
      name: "Instagram",
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/ecell_nitb/?hl=en",
    },
    {
      name: "Facebook",
      icon: <Facebook size={20} />,
      href: "https://www.facebook.com/ecellnitb",
    },
  ];

  return (
    <>
      {/* 🖥️ Desktop: Right-side vertical bar */}
      <div className="hidden md:flex fixed top-[35%] right-0 flex-col space-y-4 z-50">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex items-center justify-center w-12 h-12 bg-black text-[#FAC176] rounded-l-full shadow-lg overflow-hidden transition-all duration-300"
            title={social.name}
          >
            <span className="absolute top-0 left-full w-full h-full bg-[#FAC176] transition-all duration-300 group-hover:-translate-x-full z-0"></span>
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              {social.icon}
            </span>
          </a>
        ))}
      </div>

      {/* 📱 Mobile: Floating expandable button */}
      <div className="md:hidden fixed bottom-6 right-6 z-50 flex items-center justify-center">
        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="w-14 h-14 rounded-full bg-[#FAC176] text-black shadow-lg flex items-center justify-center transition-transform hover:scale-110"
        >
          {open ? <X size={24} /> : <Infinity size={24} />}
        </button>

        {/* Animated Social Icons */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobileMenu"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-16 right-0 flex flex-col space-y-4"
            >
              {socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-12 h-12 bg-[#FAC176] text-black rounded-full flex items-center justify-center shadow overflow-hidden"
                  title={social.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  whileHover={{
                    backgroundColor: "#FAC176",
                    color: "#000",
                    scale: 1.1,
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default SocialBar;
