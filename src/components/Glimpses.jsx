"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../app/globals.css"; // Ensure you have the necessary styles

export default function MovieCarousel() {
  // Add your movies/images here
  const movies = [
    { id: 1, title: "Adventure", description: "Epic journey", image: "/logo.webp" },
    { id: 2, title: "Mystery", description: "Suspenseful tale", image: "/logo.webp" },
    { id: 3, title: "Comedy", description: "Fun for all", image: "/logo.webp" },
    { id: 4, title: "Romance", description: "Love story", image: "/logo.webp" },
    { id: 5, title: "Sci-Fi", description: "Futuristic adventure", image: "/logo.webp" },
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
    [Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })]
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

  return (
    <div className="relative w-full py-16">
      {/* Heading */}
      <h2 className="text-4xl md:text-6xl font-bold text-center bg-clip-text bg-gradient-to-r from-[#fac176] to-[#633902] text-transparent mb-12">
        Glimpses of Last Year
      </h2>

      {/* Carousel */}
      <div className="relative w-full">
        <div className="overflow-hidden [perspective:1500px]" ref={emblaRef}>
          <div className="flex items-center gap-6 py-12 [transform-style:preserve-3d]">
            {loopedMovies.map((movie, index) => (
              <div
                key={index}
                className="flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_35%] embla__slide"
              >
                <div className="relative overflow-hidden rounded-xl shadow-2xl aspect-video border-2 border-[#fac176] group cursor-pointer transition-all duration-700 hover:scale-105">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl md:text-2xl font-bold mb-1 text-white drop-shadow-lg">
                      {movie.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/90 drop-shadow-md line-clamp-2">
                      {movie.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 hover:scale-110 transition-all duration-300"
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-8 w-8 text-white" />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 hover:scale-110 transition-all duration-300"
          onClick={scrollNext}
        >
          <ChevronRight className="h-8 w-8 text-white" />
        </button>

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
