"use client";

import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import useLenis from "./hooks/useLenis";

export default function Home() {
  useLenis();
  return (
    <main className="w-full">
      <HeroSection />
      <AboutUs />
      {/* You can add more sections below, they will scroll naturally */}
    </main>
  );
}
