"use client";

import { motion } from "framer-motion";
import { FaHandshake, FaUsers, FaQuoteLeft, FaEnvelope } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

export default function SponsorUs() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6"
        style={{
          background: `
            radial-gradient(ellipse at center, rgba(0,0,0,0.7) 0%, rgba(0,0,0,1) 80%),
            url('/PHOTO-2025-10-09-15-25-14.jpg')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-[#FAC176] mb-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          Partner with E-Cell MANIT
        </motion.h1>
        <motion.p
          className="text-white/90 max-w-2xl text-base md:text-lg"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
        >
          Empower the next generation of innovators by joining hands with us.
          Together, we create opportunities, impact, and change.
        </motion.p>
      </section>

      {/* Past Title Sponsors */}
      <section className="py-20 px-8 md:px-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#FAC176] mb-12 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          Past Title Sponsors
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.3}
        >
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="bg-black border border-[#FAC176]/40 p-6 rounded-xl hover:scale-105 transition-transform w-40 h-40 flex items-center justify-center"
            >
              <img
                src="/placeholder.png"
                alt="Sponsor Logo"
                className="object-contain opacity-90"
              />
            </div>
          ))}
        </motion.div>
      </section>

      {/* Why Sponsor Us + Proposal */}
      <section className="py-20 bg-gradient-to-b from-black via-[#0A0A0A] to-black px-8 md:px-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#FAC176] mb-10 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          Why Sponsor Us
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
        >
          <div>
            <h3 className="text-xl font-semibold text-[#FAC176] mb-3">
              Reach the Brightest Innovators
            </h3>
            <p className="text-white/90">
              Gain exclusive access to thousands of budding entrepreneurs,
              innovators, and creators from across the nation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#FAC176] mb-3">
              Strong Brand Visibility
            </h3>
            <p className="text-white/90">
              Showcase your brand in national-level events, digital promotions,
              and campaigns run by our student community.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.4}
        >
          <a
            href="/proposal.pdf"
            className="bg-[#FAC176] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#eab465] transition-all"
          >
            View Sponsorship Proposal
          </a>
        </motion.div>
      </section>

      {/* Past Sponsors Year-wise */}
      <section className="py-20 px-8 md:px-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#FAC176] mb-10 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          Past Sponsors (Year-wise)
        </motion.h2>
        <motion.div
          className="space-y-8 max-w-4xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          {[2024, 2023, 2022].map((year) => (
            <div key={year}>
              <h4 className="text-xl text-[#FAC176] mb-4 font-semibold">
                {year}
              </h4>
              <div className="flex flex-wrap gap-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-black border border-[#FAC176]/40 p-4 rounded-lg w-36 h-36 flex items-center justify-center"
                  >
                    <img
                      src="/placeholder.png"
                      alt="Sponsor Logo"
                      className="object-contain opacity-90"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Become our Sponsor */}
      <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-black px-8 md:px-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#FAC176] mb-12 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          Become Our Sponsor
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          <div className="bg-black border border-[#FAC176]/40 p-8 rounded-xl">
            <FaHandshake className="text-[#FAC176] text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              Collaborate With Us
            </h3>
            <p className="text-white/90">
              Be part of India’s leading entrepreneurship network and connect
              with student-led innovation initiatives.
            </p>
          </div>
          <div className="bg-black border border-[#FAC176]/40 p-8 rounded-xl">
            <FaUsers className="text-[#FAC176] text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">SPN Team</h3>
            <p className="text-white/90">
              Our Sponsorship team will guide you through all partnership
              details, branding opportunities, and deliverables.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Custom Campaign + Testimonials */}
      <section className="py-20 px-8 md:px-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#FAC176] mb-12 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          Custom Campaigns & Testimonials
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          <div>
            <h3 className="text-xl font-semibold mb-3 text-[#FAC176]">
              Tailored Sponsorship Campaigns
            </h3>
            <p className="text-white/90">
              We design personalized collaborations — from event takeovers to
              co-branded campaigns — aligning with your marketing goals.
            </p>
          </div>
          <div className="bg-black border border-[#FAC176]/40 p-6 rounded-xl flex flex-col">
            <FaQuoteLeft className="text-[#FAC176] text-3xl mb-3" />
            <p className="text-white italic">
              “E-Cell MANIT’s professionalism and reach helped our brand connect
              with future leaders. Truly a great partnership!”
            </p>
            <span className="text-[#FAC176] mt-4 font-semibold">
              — Sponsor, 2024
            </span>
          </div>
        </motion.div>
      </section>

      {/* Contact Us */}
      <section className="py-20 bg-gradient-to-b from-black via-[#0A0A0A] to-black px-8 md:px-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#FAC176] mb-8 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          Contact Us
        </motion.h2>
        <motion.form
          className="max-w-xl mx-auto bg-black border border-[#FAC176]/40 p-8 rounded-xl flex flex-col gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="bg-black border border-[#FAC176]/40 p-3 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-[#FAC176]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-black border border-[#FAC176]/40 p-3 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-[#FAC176]"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="bg-black border border-[#FAC176]/40 p-3 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-[#FAC176]"
          />
          <button
            type="submit"
            className="bg-[#FAC176] text-black font-semibold py-3 rounded-lg hover:bg-[#eab465] transition-all flex justify-center items-center gap-2"
          >
            <FaEnvelope /> Send Message
          </button>
        </motion.form>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-white border-t border-[#FAC176]/30">
        <p>
          © {new Date().getFullYear()} E-Cell MANIT | All Rights Reserved | Built
          with <span className="text-[#FAC176]">💛</span> by Team E-Cell
        </p>
      </footer>
    </main>
  );
}
