// 'use client'

// import { useEffect, useRef } from 'react'
// import gsap from 'gsap'
// import { motion } from 'framer-motion'

// export default function TeamCarousel() {
//     const speakers = [
//         {
//             name: "Ashneer Grover",
//             title: "Founder, BharatPe",
//             image: "/guests/ashneer-grover.avif",
//         },
//         {
//             name: "Tanu Jain",
//             title: "Founder, Tathastu ICS",
//             image: "/guests/tanu-jain.jpeg",
//         },
//         {
//             name: "Prafull Billore",
//             title: "CEO & Founder, MBA Chai Wala",
//             image: "/guests/prafull-billore.jpeg",
//         },
//         {
//             name: "Sandeep Jain",
//             title: "CEO & Founder, GeeksforGeeks",
//             image: "/guests/sandeep-jain.jpeg",
//         },
//         {
//             name: "Anubhav Dubey",
//             title: "Founder, Chai Sutta Bar",
//             image: "/guests/anubhav-dubey.jpg",
//         },
//         {
//             name: "Nitin Vijay",
//             title: "Founder, Motion Kota",
//             image: "/guests/nitin-vijay.jpeg",
//         },
//         {
//             name: "Dr. Gajendra Purohit",
//             title: "Founder, MathsCare",
//             image: "/guests/gajendra-purohit.jpeg",
//         },
//         {
//             name: "Haseeb Khan",
//             title: "Stand-up Comedian",
//             image: "/guests/haseeb-khan.jpeg",
//         },
//         {
//             name: "Zey Siegel",
//             title: "Co-founder, Starbucks",
//             image: "/guests/zey-siegel.jpeg",
//         },
//         {
//             name: "Abhishek Upmanyu",
//             title: "Stand-up Comedian",
//             image: "/guests/abhishek-upmanyu.jpg",
//         },
//         {
//             name: "Sanjeev Agrawal",
//             title: "Founder, Sage University",
//             image: "/guests/sanjeev-agrawal.jpeg",
//         },
//         {
//             name: "Gaurav Juyal",
//             title: "Learning Experience Designer",
//             image: "/guests/gaurav-juyal.jpeg",
//         },
//         {
//             name: "Nidhi Narwal",
//             title: "Creative Writer and Live Performer",
//             image: "/guests/nidhi-narwal.jpeg",
//         },
//         {
//             name: "Laksh Maheshwari",
//             title: "Storyteller",
//             image: "/guests/laksh-maheshwari.jpeg",
//         },
//         {
//             name: "Vikas Swarup",
//             title: "High Commissioner of India to Canada",
//             image: "/guests/vikas-swarup.jpeg",
//         },
//         {
//             name: "Siddharth Chaturvedi",
//             title: "Director, AISCET",
//             image: "/guests/siddharth-chaturvedi.jpg",
//         },
//     ];

//     const trackRef = useRef(null)
//     const tweenRef = useRef(null)

//     useEffect(() => {
//         const track = trackRef.current
//         if (!track) return

//         const width = track.scrollWidth / 2

//         tweenRef.current = gsap.to(track, {
//             x: -width,
//             duration: 100,
//             ease: 'none',
//             repeat: -1
//         })

//         return () => tweenRef.current?.kill()
//     }, [])

//     const move = (dir) => {
//         tweenRef.current?.pause()
//         if (!trackRef.current) return
//         gsap.to(trackRef.current, {
//             x: `+=${dir === 'prev' ? 320 : -320}`,
//             duration: 4,
//             ease: 'power2.out',
//             onComplete: () => tweenRef.current?.play()
//         })
//     }

//     return (
//         <section className=" relative w-full bg-gradient-to-bl from-black to-blue-950 py-10">
//             <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
//                 <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#fac176] to-[#633902] mb-12"
//         >
//           Our Past Speakers
//         </motion.h2>
//                 {/* CAROUSEL */}
//                 <div
//                     className="relative overflow-hidden rounded-2xl "
//                     onMouseEnter={() => tweenRef.current?.pause()}
//                     onMouseLeave={() => tweenRef.current?.play()}
//                 >
//                     {/* FADE EDGES */}
//                     <div className="pointer-events-none absolute left-0 top-0 h-full w-6 md:w-8 bg-gradient-to-r from-[#fac176] to-transparent z-10" />
//                     <div className="pointer-events-none absolute right-0 top-0 h-full w-6 md:w-8 bg-gradient-to-l from-[#fac176] to-transparent z-10" />

//                     {/* TRACK */}
//                     <div ref={trackRef} className="flex gap-6 w-max h-100vh">
//                         {[...speakers, ...speakers].map((person, i) => (
//                             <div key= {i} className='py-2'>
//                                 <div
//                                     key={i}
//                                     className="w-[300px] h-[340px] shrink-0 rounded-2xl border border-[#fac176] bg-black p-6
//              transition-all duration-300 hover:scale-[1.03]
//              hover:shadow-[0_0_30px_rgba(250,193,118,0.25)]"
//                                 >
//                                     <div className="flex flex-col items-center text-center gap-4">

//                                         {/* IMAGE */}
//                                         <div className="w-50 h-50 rounded-xl overflow-hidden border border-[#fac176]/30">
//                                             <img
//                                                 src={person.image}
//                                                 alt={person.name}
//                                                 className="w-full h-full object-cover transition duration-300"
//                                             />
//                                         </div>

//                                         {/* TEXT */}
//                                         <div className="flex flex-col gap-1">
//                                             <h3 className="text-lg font-semibold text-[#fac176]">
//                                                 {person.name}
//                                             </h3>
//                                             <p className="text-sm font-medium text-gray-400">
//                                                 {person.title}
//                                             </p>
//                                         </div>

//                                     </div>
//                                 </div>
//                             </div>


//                         ))}
//                     </div>
//                 </div>

//                 {/* CONTROLS */}
//                 <div className="flex justify-start gap-4 mt-10 z-100">
//                     <button
//                         onClick={() => move('prev')}
//                         className="group/button flex h-10 w-10 items-center justify-center
//              rounded-full bg-[#fac176] dark:bg-neutral-800
//              hover:bg-[#FAC176] hover:text-black
//              transition-colors border border-white"
//                     >
//                         <span
//                             className="text-black dark:text-neutral-400
//                transition-transform duration-300
//                group-hover/button:rotate-12"
//                         >
//                             ←
//                         </span>
//                     </button>

//                     <button
//                         onClick={() => move('next')}
//                         className="group/button flex h-10 w-10 items-center justify-center
//              rounded-full bg-gray-100 dark:bg-neutral-800
//              hover:bg-[#FAC176] hover:text-black border border-white
//              transition-colors"
//                     >
//                         <span
//                             className="text-black dark:text-neutral-400
//                transition-transform duration-300
//                group-hover/button:-rotate-12"
//                         >
//                             →
//                         </span>
//                     </button>

//                 </div>
//             </div>
//             {/* BOTTOM FADE TO BLACK */}
// <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40
//                 bg-gradient-to-b from-transparent to-black z-20" />

//         </section>
//     )
// }


'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion'

export default function TeamCarousel() {
    // --- Data ---
    const speakers = [
        { name: "Ashneer Grover", title: "Founder, BharatPe", image: "/guests/ashneer-grover.avif" },
        { name: "Tanu Jain", title: "Founder, Tathastu ICS", image: "/guests/tanu-jain.jpeg" },
        { name: "Prafull Billore", title: "CEO & Founder, MBA Chai Wala", image: "/guests/prafull-billore.jpeg" },
        { name: "Sandeep Jain", title: "CEO & Founder, GeeksforGeeks", image: "/guests/sandeep-jain.jpeg" },
        { name: "Anubhav Dubey", title: "Founder, Chai Sutta Bar", image: "/guests/anubhav-dubey.jpg" },
        { name: "Nitin Vijay", title: "Founder, Motion Kota", image: "/guests/nitin-vijay.jpeg" },
        { name: "Dr. Gajendra Purohit", title: "Founder, MathsCare", image: "/guests/gajendra-purohit.jpeg" },
        { name: "Haseeb Khan", title: "Stand-up Comedian", image: "/guests/haseeb-khan.jpeg" },
        { name: "Zey Siegel", title: "Co-founder, Starbucks", image: "/guests/zey-siegel.jpeg" },
        { name: "Abhishek Upmanyu", title: "Stand-up Comedian", image: "/guests/abhishek-upmanyu.jpg" },
        { name: "Sanjeev Agrawal", title: "Founder, Sage University", image: "/guests/sanjeev-agrawal.jpeg" },
        { name: "Gaurav Juyal", title: "Learning Experience Designer", image: "/guests/gaurav-juyal.jpeg" },
        { name: "Nidhi Narwal", title: "Creative Writer", image: "/guests/nidhi-narwal.jpeg" },
        { name: "Laksh Maheshwari", title: "Storyteller", image: "/guests/laksh-maheshwari.jpeg" },
        { name: "Vikas Swarup", title: "High Commissioner of India", image: "/guests/vikas-swarup.jpeg" },
        { name: "Siddharth Chaturvedi", title: "Director, AISCET", image: "/guests/siddharth-chaturvedi.jpg" },
    ];

    const trackRef = useRef(null)
    const tweenRef = useRef(null)

    useEffect(() => {
        // Use gsap.context for safe cleanup in React
        const ctx = gsap.context(() => {
            const track = trackRef.current
            if (!track) return

            // Function to reset and start the animation
            const startInfiniteScroll = () => {
                // Kill old tween if exists to prevent duplicates
                if (tweenRef.current) tweenRef.current.kill();

                // Calculate the width of ONE set of items (half the total width)
                const totalWidth = track.scrollWidth;
                const singleSetWidth = totalWidth / 2;

                // Reset position to 0 to prevent drift
                gsap.set(track, { x: 0 });

                // Create the infinite loop
                tweenRef.current = gsap.to(track, {
                    x: -singleSetWidth,
                    duration: 40, // Adjusted speed (seconds)
                    ease: 'none',
                    repeat: -1,
                    onRepeat: () => {
                        // Seamless looping: instantly jump back to 0 when we hit the half-way point
                        gsap.set(track, { x: 0 });
                    }
                });
            };

            // 1. Start immediately
            startInfiniteScroll();

            // 2. Recalculate on window resize (fixes width bugs)
            window.addEventListener('resize', startInfiniteScroll);

            // 3. Optional: Recalculate after a slight delay to ensure images loaded
            // (If you don't use the resize listener, the loop might break if images load slow)
            setTimeout(startInfiniteScroll, 500);

            return () => window.removeEventListener('resize', startInfiniteScroll);

        }, trackRef);

        return () => ctx.revert(); // Cleanup GSAP when component unmounts
    }, [speakers]);

    return (
        <section className="relative w-full bg-gradient-to-bl from-black to-blue-950 py-10 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#fac176] to-[#633902] mb-12"
                >
                    Our Past Speakers
                </motion.h2>

                {/* CAROUSEL CONTAINER */}
                <div
                    className="relative overflow-hidden rounded-2xl"
                    // Simple Pause on Hover Interaction
                    onMouseEnter={() => tweenRef.current?.pause()}
                    onMouseLeave={() => tweenRef.current?.play()}
                >
                    {/* FADE EDGES (Visual Polish) */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black to-transparent z-20" />
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black to-transparent z-20" />

                    {/* MOVING TRACK */}
                    <div ref={trackRef} className="flex gap-6 w-max">
                        {/* Render items twice for seamless loop */}
                        {[...speakers, ...speakers].map((person, i) => (
                            <div key={i} className='py-2'>
                                <div
                                    className="w-[300px] h-[340px] shrink-0 rounded-2xl border border-[#fac176] bg-black p-6
                                             transition-all duration-300 hover:scale-[1.03]
                                             hover:shadow-[0_0_30px_rgba(250,193,118,0.25)] group"
                                >
                                    <div className="flex flex-col items-center text-center gap-4">
                                        {/* IMAGE */}
                                        <div className="w-50 h-50 rounded-xl overflow-hidden border border-[#fac176]/30">
                                            <img
                                                src={person.image}
                                                alt={person.name}
                                                className="w-full h-full object-cover transition duration-300"
                                            />
                                        </div>

                                        {/* TEXT */}
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-lg font-semibold text-[#fac176]">
                                                {person.name}
                                            </h3>
                                            <p className="text-sm font-medium text-gray-400">
                                                {person.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black z-20" />
        </section>
    )
}