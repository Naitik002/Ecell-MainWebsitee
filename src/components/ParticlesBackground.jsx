"use client";

import { useEffect } from "react";

export default function ParticlesBackground() {
  useEffect(() => {
    const loadParticles = async () => {
      if (!window.particlesJS) {
        await import("particles.js");
      }

      window.particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 300 } },
          color: { value: "#fac176" },
          opacity: { value: 0.4 },
          size: { value: 2 },
          move: { enable: true, speed: 0.8 },
          line_linked: { enable: false },
        },
        interactivity: {
          events: { onhover: { enable: true, mode: "grab" } },
          modes: { grab: { distance: 200 } },
        },
        retina_detect: true,
      });
    };

    loadParticles();
  }, []);

  return (
    <div
      id="particles-js"
      className="absolute inset-0 z-2 pointer-events-none"
    />
  );
}
