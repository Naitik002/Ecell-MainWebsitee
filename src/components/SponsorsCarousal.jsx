'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function SponsorsCarousel({ data, direction = 'left' }) {


    const trackRef = useRef(null)
    const tweenRef = useRef(null)

    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        const width = track.scrollWidth / 2
        const dir = direction === "left" ? -1 : 1

        gsap.set(track, { x: 0 })
        tweenRef.current?.kill()

        tweenRef.current = gsap.to(track, {
            x: dir * -width,
            duration: 35,
            ease: "none",
            repeat: -1,
            modifiers: {
                x: (x) => {
                    const wrapped = gsap.utils.wrap(-width, 0)(parseFloat(x))
                    return `${wrapped}px`
                }
            }
        })

        return () => tweenRef.current?.kill()
    }, [direction])





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
        <section className="w-full bg-black">
            <div className="max-w-7xl mx-auto px-4">
                {/* CAROUSEL */}
                <div
                    className="relative overflow-hidden rounded-2xl "
                    onMouseEnter={() => tweenRef.current?.pause()}
                    onMouseLeave={() => tweenRef.current?.play()}
                >

                    {/* TRACK */}
                    <div ref={trackRef} className="flex gap-6 w-max h-100vh">
                        {[...data, ...data].map((spon, i) => (
                            <a key={i} href={spon.website} target="_blank" rel="noopener noreferrer">
                                <div className='py-2'>
                                    <div
                                        key={i}
                                        className="shrink-0 rounded-2xl border border-[#fac176] bg-white 
             transition-all duration-300 hover:scale-[1.03]
             hover:shadow-[0_0_30px_rgba(250,193,118,0.25)]"
                                    >
                                        <div className="flex flex-col items-center text-center gap-4">

                                            {/* IMAGE */}
                                            <div className="w-50 h-50 rounded-xl overflow-hidden border border-[#fac176]/30">
                                                <img
                                                    src={spon.logo}
                                                    alt={`sponsor-${i}`}
                                                    className="w-full h-full object-contain transition duration-300"
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </a>


                        ))}
                    </div>
                </div>

                {/* CONTROLS */}
                {/* <div className="flex justify-start gap-4 mt-10">
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

                </div> */}
            </div>
        </section>
    )
}
