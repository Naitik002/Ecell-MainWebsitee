"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, Route, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { redirect } from "next/dist/server/api-utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "EVENTS", path: "/events" },
    { name: "E-SUMMIT", path: "https://esummit.ecellnitb.in/#" },
    { name: "SPEAKERS", path: "/speakers" },
    { name: "GALLERY", path: "/gallery" },
    { name: "TEAM", path: "/team" },
    { name: "SPONSOR US", path: "/sponsors" },
    { name: "CONTACT", path: "/contact" },
  ];

  //Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const router = useRouter();

  return (

    <motion.nav
      className="bg-black text-white shadow-md fixed top-0 w-full z-50 transition-transform duration-300"
      animate={{
        y: showNavbar ? 0 : -135,
      }}
    >
      <div className="max-w-[100vw] px-6 lg:px-16 py-4 flex justify-between items-center">
        {/* Logo (hidden visually on home page, but space kept) */}
        <motion.h1 whileHover={{ scale: pathname !== "/" ? 1.05 : 1 }}>
          <div
            onClick={() => router.push("/")}
            className={`items-center h-20 w-20 md:flex md:h-24 md:w-24 ${pathname === "/" ? "invisible md:visible" : ""
              }`}
          >
            <img src="/logo.webp" alt="logo" />
          </div>
        </motion.h1>


        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-lg font-semibold">
          {navItems.map((item) => {
            const isExternal = item.path.startsWith('http');
            return isExternal ? (
              <a
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-300 hover:text-[#FAC176] relative ${pathname === item.path
                    ? "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#FAC176] text-[#FAC176]"
                    : "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#FAC176] hover:after:w-full after:transition-all after:duration-300"
                    }`}
              >
                {item.name}
              </a>
            ) : (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`transition-all duration-300 hover:text-[#FAC176] relative ${pathname === item.path
                    ? "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#FAC176] text-[#FAC176]"
                    : "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#FAC176] hover:after:w-full after:transition-all after:duration-300"
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#FAC176] focus:outline-none z-[100]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: menuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-md z-50 pt-20 flex flex-col items-center space-y-8 text-lg font-semibold"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
              >
                <Link
                  href={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block relative transition-all duration-300 hover:text-[#FAC176] ${pathname === item.path
                    ? "after:content-[''] after:absolute after:-bottom-[3px] after:left-0 after:w-full after:h-[2px] after:bg-[#FAC176]"
                    : "after:content-[''] after:absolute after:-bottom-[3px] after:left-0 after:w-0 after:h-[2px] after:bg-[#FAC176] hover:after:w-full after:transition-all after:duration-300"
                    }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
