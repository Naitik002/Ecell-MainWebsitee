"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft, FaMicrophone, FaEnvelope } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

export default function Speakers() {
  const speakers = [
  {
    name: "Ashneer Grover",
    title: "Founder, BharatPe",
    image: "/guests/ashneer-grover.avif",
  },
  {
    name: "Tanu Jain",
    title: "Founder, Tathastu ICS",
    image: "/guests/tanu-jain.jpeg",
  },
  {
    name: "Prafull Billore",
    title: "CEO & Founder, MBA Chai Wala",
    image: "/guests/prafull-billore.jpeg",
  },
  {
    name: "Sandeep Jain",
    title: "CEO & Founder, GeeksforGeeks",
    image: "/guests/sandeep-jain.jpeg",
  },
  {
    name: "Anubhav Dubey",
    title: "Founder, Chai Sutta Bar",
    image: "/guests/anubhav-dubey.jpg",
  },
  {
    name: "Nitin Vijay",
    title: "Founder, Motion Kota",
    image: "/guests/nitin-vijay.jpeg",
  },
  {
    name: "Dr. Gajendra Purohit",
    title: "Founder, MathsCare",
    image: "/guests/gajendra-purohit.jpeg",
  },
  {
    name: "Haseeb Khan",
    title: "Stand-up Comedian",
    image: "/guests/haseeb-khan.jpeg",
  },
  {
    name: "Zey Siegel",
    title: "American Keynote Speaker and Presenter",
    image: "/guests/zey-siegel.jpeg",
  },
  {
    name: "Abhishek Upmanyu",
    title: "Stand-up Comedian",
    image: "/guests/abhishek-upmanyu.jpg",
  },
  {
    name: "Sanjeev Agrawal",
    title: "Founder, Sage University",
    image: "/guests/sanjeev-agrawal.jpeg",
  },
  {
    name: "Gaurav Juyal",
    title: "Learning Experience Designer",
    image: "/guests/gaurav-juyal.jpeg",
  },
  {
    name: "Nidhi Narwal",
    title: "Creative Writer and Live Performer",
    image: "/guests/nidhi-narwal.jpeg",
  },
  {
    name: "Laksh Maheshwari",
    title: "Storyteller",
    image: "/guests/laksh-maheshwari.jpeg",
  },
  {
    name: "Vikas Swarup",
    title: "High Commissioner of India to Canada",
    image: "/guests/vikas-swarup.jpeg",
  },
  {
    name: "Siddharth Chaturvedi",
    title: "Director, AISCET",
    image: "/guests/siddharth-chaturvedi.jpg",
  },
];



  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-6"
        style={{
          background: `
            radial-gradient(ellipse at center, rgba(0,0,0,0.7) 0%, rgba(0,0,0,1) 80%),
            url('/speakers-bg.jpg')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#fac176] to-[#633902] mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          Inspiring Minds Who’ve Graced E-Cell MANIT
        </motion.h1>
        <motion.p
          className="max-w-2xl text-white/90 text-base md:text-lg"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
        >
          Over the years, our stage has hosted visionaries, founders, and change
          makers who’ve inspired thousands of young innovators.
        </motion.p>
      </section>

      {/* Speakers Grid */}
      <section className="px-8 md:px-16 bg-gradient-to-b from-black via-[#0A0A0A] to-black">
        {/* <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#FAC176] mb-12 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          Our Distinguished Speakers
        </motion.h2> */}

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center max-w-6xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
        >
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-black border border-[#FAC176]/40 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {speaker.name}
                </h3>
                <p className="text-[#FAC176] text-sm mb-3">{speaker.title}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Featured Talks / Testimonials */}
      {/* <section className="py-20 px-8 md:px-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#FAC176] mb-12 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          Words That Inspired Generations
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto bg-black border border-[#FAC176]/40 p-8 rounded-xl shadow-lg flex flex-col gap-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          <FaQuoteLeft className="text-[#FAC176] text-3xl" />
          <p className="text-white text-lg italic">
            “E-Cell MANIT is a remarkable platform nurturing creativity and
            entrepreneurship among students. It’s always a joy to interact with
            such energetic young minds.”
          </p>
          <span className="text-[#FAC176] font-semibold self-end">
            — Ritesh Agarwal, OYO
          </span>
        </motion.div>
      </section> */}

      {/* Invite a Speaker */}
      <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-black px-8 md:px-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#FAC176] mb-8 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          Invite a Speaker
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
          <input
            type="text"
            placeholder="Speaker’s Name"
            className="bg-black border border-[#FAC176]/40 p-3 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-[#FAC176]"
          />
          <textarea
            placeholder="Why do you want to invite this speaker?"
            rows="4"
            className="bg-black border border-[#FAC176]/40 p-3 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-[#FAC176]"
          />
          <button
            type="submit"
            className="bg-[#FAC176] text-black font-semibold py-3 rounded-lg hover:bg-[#eab465] transition-all flex justify-center items-center gap-2"
          >
            <FaEnvelope /> Send Request
          </button>
        </motion.form>
      </section>

     
    </main>
  );
}
