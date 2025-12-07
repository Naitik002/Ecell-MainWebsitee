"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../app/globals.css"; // Ensure you have the necessary styles

export default function MovieCarousel() {
  // Add your movies/images here
  const movies = [
    { id: 1,  image: "/logo.webp" },
    { id: 2, image: "/logo.webp" },
    { id: 3, image: "/logo.webp" },
    { id: 4, image: "/logo.webp" },
    { id: 5, image: "/logo.webp" },
  ];

  // Duplicate slides for seamless loop
  const loopedMovies = [...movies, ...movies];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false, // handled manually
      align: "center",
      skipSnaps: false,
      containScroll: "trimSnaps",
      dragFree: true,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  const scrollTo = (index) => emblaApi && emblaApi.scrollTo(index);

  const onSelect = () => {
    if (!emblaApi) return;
    const snapIndex = emblaApi.selectedScrollSnap() % movies.length;
    setSelectedIndex(snapIndex);

    const slides = emblaApi.slideNodes();
    slides.forEach((slide, index) => {
      if (index % movies.length === snapIndex) {
        slide.classList.add("is-snapped");
      } else {
        slide.classList.remove("is-snapped");
      }
    });
  };

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(Array.from({ length: movies.length }, (_, i) => i));
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  gsap.registerPlugin(ScrollTrigger);

const headingRef = useRef(null);

  useEffect(() => {
    if (!headingRef.current) return;

    gsap.from(headingRef.current, {
  opacity: 0,
  y: 40,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: headingRef.current,
    start: "top 85%",
  },
});
  }, []);

  return (
    <div className="relative w-full py-16">
      {/* Heading */}
      <h2 
      ref ={headingRef}
      className="text-4xl md:text-6xl font-bold text-center bg-clip-text bg-gradient-to-r from-[#fac176] to-[#633902] text-transparent mb-12">
        Glimpses of Last Year
      </h2>

      {/* Carousel */}
      <div className="relative w-full">
        <div className="overflow-hidden [perspective:1500px]" ref={emblaRef}>
          <div className="flex items-center gap-6 py-12 px-8 [transform-style:preserve-3d]">
            {loopedMovies.map((movie, index) => (
              <div
                key={index}
                className="flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_35%] embla__slide"
              >
                <div className="relative overflow-hidden rounded-xl shadow-2xl aspect-video border-2 border-[#fac176] group cursor-pointer transition-all duration-700 hover:scale-105">
                  <img
                    src={movie.image}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex ? "w-6 bg-[#fac176]" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
