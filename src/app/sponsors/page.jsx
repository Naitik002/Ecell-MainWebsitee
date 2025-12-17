"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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

   const sponsors = [
  // 🇮🇳 Government, PSU & National Institutions

  { src: "/sponsors/adani.png" },

  { src: "/sponsors/hpcl.webp" },
  { src: "/sponsors/iocl.webp" },
  { src: "/sponsors/MEITY.webp" },
  { src: "/sponsors/iim-calcutta.jpg" },
  { src: "/sponsors/stpi.webp" },
  { src: "/sponsors/i-am-startup.jpg" },
  { src: "/sponsors/mpsu.webp" },
  { src: "/sponsors/aws.webp" },
  { src: "/sponsors/Canva.webp" },
  { src: "/sponsors/wolfram_research.webp" },

  { src: "/sponsors/pngegg.webp" },

  { src: "/sponsors/bansal.webp" },
  { src: "/sponsors/bob.webp" },
  { src: "/sponsors/redfm.webp" },
  { src: "/sponsors/jiosaavn-logo-inline.png" },
  { src: "/sponsors/AIC.png" },
  { src: "/sponsors/Taskade.webp" },

  // 🇮🇳 Major Indian Startups & Platforms
  { src: "/sponsors/unstop.webp" },
  { src: "/sponsors/easymytrip.webp" },
  { src: "/sponsors/MSG91.webp" },
  { src: "/sponsors/quillbot.webp" },
  { src: "/sponsors/PedalStart.webp" },
  { src: "/sponsors/startupvisor.png" },
  { src: "/sponsors/bhopal angels.jpeg" },
  { src: "/sponsors/Expand My Business.webp" },

  // 🇮🇳 Indian Media, Communities & EdTech
  { src: "/sponsors/ApnaCast.webp" },
  { src: "/sponsors/techstory.webp" },
  { src: "/sponsors/Learning While Traveling.webp" },
  { src: "/sponsors/teachnook.webp" },
  { src: "/sponsors/kitab lovers.png" },
  { src: "/sponsors/stock wealth academy.webp" },
  { src: "/sponsors/offistore.jpg" },

  // 🌍 Global Brands (after Indian priority)
  

  // 🚀 Ecosystem, Tools & Supporting Partners
  
  { src: "/sponsors/Boudhik-IP-Logo.png" },
  { src: "/sponsors/coolberg.webp" },
  { src: "/sponsors/3ways.webp" },
  { src: "/sponsors/bv.webp" },
  { src: "/sponsors/coinpage.png" },
  { src: "/sponsors/crow.png" },
  { src: "/sponsors/crowdera.webp" },
  { src: "/sponsors/forethought.webp" },
  { src: "/sponsors/freashworks.webp" },
  { src: "/sponsors/ftlt.webp" },
  { src: "/sponsors/givemycertificate.png" },
  { src: "/sponsors/goodworks_cowork_logo.webp" },
  { src: "/sponsors/inovative script.webp" },
  { src: "/sponsors/mansarovar.webp" },
  { src: "/sponsors/pan macmillan.webp" },
  { src: "/sponsors/paper.jpeg" },
  { src: "/sponsors/raphe-mphibr.png" },
  { src: "/sponsors/recklabs_logo.webp" },
  { src: "/sponsors/roostoo.webp" },
  { src: "/sponsors/rupeezy_icon.svg" },
  { src: "/sponsors/sf.webp" },
  { src: "/sponsors/shekunj.svg" },
  { src: "/sponsors/sixthsenselogo.webp" },
  { src: "/sponsors/starworks_prime_logo.webp" },
  { src: "/sponsors/wadhwani-foundation.jpg" },
];


  const moreSponsors = Array.from({ length: 32 }, (_, i) =>
    i === 15 || i == 3 || i == 5 || i == 12 ? null : { src: `/sponsors/moreSponsors/Asset ${i + 5}.webp` }
  ).filter(Boolean);

  const allSponsors = [...sponsors, ...moreSponsors];

  const testimonials = [
    {
      quote:
        "Our web services team was delighted with the quality of the visitors and the caliber of participants, which were much greater than expected and we are grateful to have helped the budding startups with their journey ahead.",
      author: "AWS",
      designation: "Web Services Provider",
    },
    {
      quote:
        "It's been really great working with Entrepreneurship Cell NIT Bhopal considering the structure and size of the event. Our team has truly enjoyed its partnership and we were delighted with our results. Communication has been amazing and partnering with the team has enhanced our web results.",
      author: "Dias World",
      designation: "Media Partner",
    },
    {
      quote:
        "Kudos to the team for such professionalism and simultaneously maintaining room for casual conversations. Our team conveys a special thanks to the team for the new and diverse connections we needed.",
      author: "Ibentos",
      designation: "Co-title Sponsor",
    },
    {
      quote:
        "Working with team E-Cell was truly an amazing experience as we witnessed our mutual visions and goals turn into reality with this entrepreneurial fest. A great event to attend for great meetings and advancing networks among huge business prospect ans finest personalities.",
      author: "Skill Lync",
      designation: "Title Sponsor",
    },
  ];



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxXrlJYhFrgSryesebdeEwiQNsqXhMVJ1KeIWROyqGw4lThU1xzrjoW3JI_wFOPch8hew/exec";

    setLoading(true);
    setStatus("");

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors", // important for client-side form submission
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // send JSON to match Apps Script parsing
      });

      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Error sending message.");
    } finally {
      setLoading(false);
    }
  };
  const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
  
    // Detect mobile screen
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      handleResize(); // initial check
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const mobileLimit = 8; // 2 per row, 4 rows
    const sponsorsToShow = isMobile && !showAll ? allSponsors.slice(0, mobileLimit) : allSponsors;

  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6"
        style={{
          background: `
          linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%),
            url('/sponsorBg.jpg')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        
      >
        <div className="absolute inset-0 bg-black/80 z-0"></div>
        <motion.h1
          className="text-4xl z-50 md:text-8xl font-bold bg-gradient-to-r from-[#fac176] to-[#633902] text-transparent bg-clip-text max-w-[70vw]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          Forge Ahead Your Network
        </motion.h1>
        <motion.p
          className="text-white/90 z-50 max-w-2xl text-base md:text-lg mt-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
        >
          Growth and collaborations that are bound to make a change
        </motion.p>
      </section>

      {/* Past Title Sponsors */}
      {/* <section className=" px-8 md:px-16">
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
      </section> */}

      {/* Why Sponsor Us + Proposal */}
      <section className="py-20 bg-gradient-to-b from-black via-[#0A0A0A] to-black px-8 md:px-16">
        <motion.h2
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#fac176] to-[#633902] text-transparent bg-clip-text mb-10 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          Why Sponsor Us
        </motion.h2>
        <motion.div
          className="max-w-5xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
        >
          <div className="flex flex-col justify-center items-center mb-25">
            <p className="text-white/90 text-center">
              Entrepreneurship Cell NIT Bhopal has seen a tremendous growth in the past year, our social media reach has increased by a staggering 220% meanwhile our YouTube channel has seen an increase of 200℅. With these promising statistics of our reach, E-Cell has also successfully hosted Central India's largest entrepreneurial fest and Podcast series which continue to succeed with each iteration. Our sponsors thus far benefit from E-Cell's vast community reach and association with innovative and high impact events.
            </p>
          </div>
          <div>
          </div>
        </motion.div>
        <motion.h2
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#fac176] to-[#633902] text-transparent bg-clip-text mb-10 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          How we helped our past sponsors
        </motion.h2>
        <motion.div
  className="max-w-6xl mx-auto px-4"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {/* Card 1 */}
    <motion.div
      className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 text-white shadow-lg"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <h3 className="text-2xl font-semibold mb-4 text-[#fac176]">
        Strengthening Partnerships Through Growth
      </h3>

      <p className="text-white/85 leading-relaxed">
        Entrepreneurship Cell NIT Bhopal has been organising large-scale events that attract huge audiences as well as committed sponsors and over the years has grown from a small community of innovators into the host of Central India’s largest entrepreneurial fest, now striving to elevate our initiatives toward national-level recognition and impact.
        <br /><br />
        Aligned with our vision to build a strong entrepreneurial environment among the youth, we work to create a mutually beneficial platform where both rising startups and established enterprises thrive. Through this collaboration, our sponsors gain access to an ever-expanding audience along with diverse networking opportunities that broaden their reach and influence.
      </p>
    </motion.div>

    {/* Card 2 */}
    <motion.div
      className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 text-white shadow-lg"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <h3 className="text-2xl font-semibold mb-4 text-[#fac176]">
        A Relationship Built on Trust and Value
      </h3>

      <p className="text-white/85 leading-relaxed">
        We sincerely thank our partners for their trust and continued support. Their satisfaction with the partnership strengthens our dedication to fulfilling commitments with the same consistency and enthusiasm that define our work.
        <br /><br />
        As we look forward to future initiatives, we remain committed to delivering excellence for our participants and for the sponsors who support us and help build a vibrant entrepreneurial ecosystem at E-Cell NIT Bhopal.
      </p>
    </motion.div>

  </div>
</motion.div>


        <motion.h2
          className="text-4xl md:text-6xl font-bold mt-40 bg-gradient-to-r from-[#fac176] to-[#633902] text-transparent bg-clip-text mb-10 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          Sponsorship Proposal
        </motion.h2>
        <motion.div
          className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto px-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          {/* Title Sponsor */}
          <motion.div className="w-[320px] bg-[#1e1e1e] rounded-2xl p-6 border border-[#FAC176]/30 hover:border-[#FAC176] transition">
            <h3 className="text-xl font-semibold text-[#FAC176] mb-3">
              Title Sponsor
            </h3>
            <p className="text-gray-300 text-sm">
              Build best relations in business by extensive engagement with all our dignitaries and grab the finest branding opportunities with our strong community of investors, bureaucrats and students.
            </p>
          </motion.div>

          {/* Co-Sponsor */}
          <motion.div className="w-[320px] bg-[#1e1e1e] rounded-2xl p-6 border border-[#FAC176]/30 hover:border-[#FAC176] transition">
            <h3 className="text-xl font-semibold text-[#FAC176] mb-3">
              Co-Title Sponsor
            </h3>
            <p className="text-gray-300 text-sm">
              Fabricate a unique experience through interaction among intended and diverse users which include speakers, venture capitalists and government officials, this entrepreneurial summit.
            </p>
          </motion.div>

          {/* Event Partner */}
          <motion.div className="w-[320px] bg-[#1e1e1e] rounded-2xl p-6 border border-[#FAC176]/30 hover:border-[#FAC176] transition">
            <h3 className="text-xl font-semibold text-[#FAC176] mb-3">
              Presented By Sponsor
            </h3>
            <p className="text-gray-300 text-sm">
              Enhance brand visibility by boosting profile through promotion in our social media accounts and networking opportunities among our guests.
            </p>
          </motion.div>

          {/* Community Partner */}
          <motion.div className="w-[320px] bg-[#1e1e1e] rounded-2xl p-6 border border-[#FAC176]/30 hover:border-[#FAC176] transition">
            <h3 className="text-xl font-semibold text-[#FAC176] mb-3">
              Co-Presented By Sponsor
            </h3>
            <p className="text-gray-300 text-sm">
              Exclusive networking opportunities among our all visitors and participants with collaborations from various universities across the nation.
            </p>
          </motion.div>

          {/* Gifting Partner */}
          <motion.div className="w-[320px] bg-[#1e1e1e] rounded-2xl p-6 border border-[#FAC176]/30 hover:border-[#FAC176] transition">
            <h3 className="text-xl font-semibold text-[#FAC176] mb-3">
              Event Sponsor
            </h3>
            <p className="text-gray-300 text-sm">
              Networking opportunities and interaction with dignitaries, officials, and label promotion through recorded messages with appearances in promotional advertisements before the event.
            </p>
          </motion.div>
        </motion.div>

      </section>

      {/* Past Sponsors Year-wise */}
      {/* <section className="py-20 px-8 md:px-16">
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
      </section> */}

      {/* Become our Sponsor */}


      {/* Custom Campaign + Testimonials */}
      <section className="py-20 px-8 md:px-16 flex justify-center items-center">
        <div className="max-w-xl w-full text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#fac176] to-[#633902] text-transparent bg-clip-text mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
          >
            Testimonials
          </motion.h2>

          <div className="relative h-[40vh] overflow-hidden mt-20">
  <motion.div
    animate={{ y: ["0%", "-50%"] }}
    transition={{
      duration: testimonials.length * 6,
      ease: "linear",
      repeat: Infinity,
    }}
    className="flex flex-col gap-6"
  >
    {[...testimonials, ...testimonials].map((item, index) => (
      <div
        key={index}
        className="bg-black border border-[#FAC176]/40 p-6 rounded-xl flex flex-col items-center"
      >
        <FaQuoteLeft className="text-[#FAC176] text-3xl mb-3" />
        <p className="text-white italic mb-4">
          “{item.quote}”
        </p>
        <span className="text-[#FAC176] font-semibold">
          — {item.author}
        </span>
        <span className="text-white/70 text-sm mt-1">
          {item.designation}
        </span>
      </div>
    ))}
  </motion.div>
</div>

        </div>
      </section>

      <section className="py-20 mt-20 bg-black px-8 md:px-16">
        <motion.h2
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#fac176] to-[#633902] text-transparent bg-clip-text mb-16 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          Become Our Sponsor
        </motion.h2>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          {/* LEFT SIDE – CARDS */}
          <div className="flex flex-col gap-8">
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
              <h3 className="text-xl font-semibold mb-2 text-white">
                Sponsorship Team
              </h3>
              <p className="text-white/90">
                Our Sponsorship team will guide you through all partnership
                details, branding opportunities, and deliverables.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE – FORM */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-black border border-[#FAC176]/40 p-8 rounded-xl flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => {
                const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                setFormData({ ...formData, name: value });
              }}
              placeholder="Your Name"
              required
              className="bg-black border border-[#FAC176]/40 p-3 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-[#FAC176]"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="bg-black border border-[#FAC176]/40 p-3 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-[#FAC176]"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="6"
              required
              className="bg-black border border-[#FAC176]/40 p-3 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-[#FAC176]"
            />

            <button
              type="submit"
              disabled={loading}
              className={`${loading
                  ? "bg-[#eab465] cursor-not-allowed"
                  : "bg-[#FAC176] hover:bg-[#eab465]"
                } text-black font-semibold py-3 rounded-lg transition-all flex justify-center items-center gap-2`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-black"
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
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FaEnvelope /> Send Message
                </>
              )}
            </button>

            {status && (
              <p className="text-center text-[#FAC176] mt-3">
                {status}
              </p>
            )}
          </motion.form>
        </motion.div>
      </section>

      <section id='allSponsors' className="py-20 mt-20 bg-black md:px-16">
        <motion.h2
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#fac176] to-[#633902] text-transparent bg-clip-text mb-16 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          Our Past Sponsors
        </motion.h2>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 md:gap-8 px-4 md:px-0">
        {sponsorsToShow.map((sponsor, idx) => (
          <div key={idx} className="w-40 h-27 md:w-60 md:h-40 flex items-center justify-center p-4 bg-white rounded-lg">
            <img
              src={sponsor.src}
              alt="Sponsor logo"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}

      </div>

      {/* View More button only for mobile */}
      {isMobile && !showAll && sponsors.length > mobileLimit && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 rounded-md bg-[#FAC176] text-black font-semibold hover:bg-yellow-500 transition"
          >
            View More
          </button>
        </div>
      )}

      </section>


    </main>
  );
}
