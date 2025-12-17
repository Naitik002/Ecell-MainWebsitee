'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function TeamCarousel() {
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

    const trackRef = useRef(null)
    const tweenRef = useRef(null)

    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        const width = track.scrollWidth / 2

        tweenRef.current = gsap.to(track, {
            x: -width,
            duration: 100,
            ease: 'none',
            repeat: -1
        })

        return () => tweenRef.current?.kill()
    }, [])

    const move = (dir) => {
        tweenRef.current?.pause()
        if (!trackRef.current) return
        gsap.to(trackRef.current, {
            x: `+=${dir === 'prev' ? 320 : -320}`,
            duration: 4,
            ease: 'power2.out',
            onComplete: () => tweenRef.current?.play()
        })
    }

    return (
        <section className="w-full bg-black py-10">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-5xl md:text-7xl font-bold text-center mb-15 bg-clip-text text-transparent bg-gradient-to-r from-[#fac176] to-[#633902]">Our Past Speakers</h2>

                {/* CAROUSEL */}
                <div
                    className="relative overflow-hidden rounded-2xl "
                    onMouseEnter={() => tweenRef.current?.pause()}
                    onMouseLeave={() => tweenRef.current?.play()}
                >
                    {/* FADE EDGES */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-6 md:w-8 bg-gradient-to-r from-[#fac176] to-transparent z-10" />
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-6 md:w-8 bg-gradient-to-l from-[#fac176] to-transparent z-10" />

                    {/* TRACK */}
                    <div ref={trackRef} className="flex gap-6 w-max h-100vh">
                        {[...speakers, ...speakers].map((person, i) => (
                            <div key= {i} className='py-2'>
                                <div
                                    key={i}
                                    className="w-[300px] h-[340px] shrink-0 rounded-2xl border border-[#fac176] bg-black p-6
             transition-all duration-300 hover:scale-[1.03]
             hover:shadow-[0_0_30px_rgba(250,193,118,0.25)]"
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

                {/* CONTROLS */}
                <div className="flex justify-start gap-4 mt-10">
                    <button
                        onClick={() => move('prev')}
                        className="group/button flex h-10 w-10 items-center justify-center
             rounded-full bg-gray-100 dark:bg-neutral-800
             hover:bg-[#FAC176] hover:text-black
             transition-colors"
                    >
                        <span
                            className="text-black dark:text-neutral-400
               transition-transform duration-300
               group-hover/button:rotate-12"
                        >
                            ←
                        </span>
                    </button>

                    <button
                        onClick={() => move('next')}
                        className="group/button flex h-10 w-10 items-center justify-center
             rounded-full bg-gray-100 dark:bg-neutral-800
             hover:bg-[#FAC176] hover:text-black
             transition-colors"
                    >
                        <span
                            className="text-black dark:text-neutral-400
               transition-transform duration-300
               group-hover/button:-rotate-12"
                        >
                            →
                        </span>
                    </button>

                </div>
            </div>
        </section>
    )
}
