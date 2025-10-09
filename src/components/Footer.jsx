"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "EVENTS", path: "/events" },
    { name: "E-SUMMIT", path: "/esummit" },
    { name: "SPEAKERS", path: "/speakers" },
    { name: "GALLERY", path: "/gallery" },
    { name: "TEAM", path: "/team" },
    { name: "SPONSOR US", path: "/sponsors" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      <footer className="bg-black z-50">
        <motion.div
          className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left: Map */}
            <div className="w-full h-72 md:h-96 overflow-hidden rounded-lg shadow-lg md:col-span-1">
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

            {/* Right: Footer Content */}
            <div className="text-center md:col-span-2">
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
                  Igniting the next generation of innovators and leaders.
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
                  <Phone className="text-xl text-gray-400" /> +91 96856 94466
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
