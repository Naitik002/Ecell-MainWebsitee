"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Speakers({ images = [] }) {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);

  // default example images if none provided
  const defaults = [
    "/PHOTO-2025-10-09-20-40-32.jpg",
    "/PHOTO-2025-10-09-15-25-14.jpg",
    "/PHOTO-2025-10-09-21-00-00.jpg",
    "/PHOTO-2025-10-09-21-05-00.jpg",
    "/PHOTO-2025-10-09-21-10-00.jpg",
  ];
  const items = images.length ? images : defaults;

  // responsive visible count
  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 640) setVisible(1); // mobile
      else if (w < 1024) setVisible(2); // tablet
      else setVisible(3); // desktop
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const total = items.length;

  // clamp index so that last page shows correctly
  useEffect(() => {
    if (index < 0) setIndex(total - visible);
    else if (index > total - visible) setIndex(0);
  }, [index, total, visible]);

  function prev() {
    setIndex((i) => (i - visible >= 0 ? i - visible : Math.max(0, total - visible)));
  }
  function next() {
    setIndex((i) => (i + visible <= total - visible ? i + visible : 0));
  }

  // keyboard support
  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible, total]);

  // compute translate
  const translatePercent = (index / total) * 100;

  return (
    <div className="w-[100vw] max-w-6xl mx-auto relative bg-black">
      {/* viewport */}
      <div className="overflow-hidden bg-black">
        <div
          ref={containerRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${(total / visible) * 100}%`,
            transform: `translateX(-${(index / total) * 100}%)`,
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className={`flex-shrink-0 p-2`}
              style={{ width: `${100 / (total)}%` }}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-800">
                <img
                  src={src}
                  alt={`carousel-${i}`}
                  className="w-full h-64 md:h-72 lg:h-80 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Left Arrow */}
      <button
        aria-label="previous"
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full shadow-lg focus:outline-none"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Right Arrow */}
      <button
        aria-label="next"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full shadow-lg focus:outline-none"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots / Pagination */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: Math.ceil(total / visible) }).map((_, page) => (
          <button
            key={page}
            className={`w-3 h-3 rounded-full ${page * visible === index ? "bg-[#FAC176]" : "bg-gray-500"}`}
            onClick={() => setIndex(page * visible)}
            aria-label={`go-to-${page}`}
          />
        ))}
      </div>
    </div>
  );
}
