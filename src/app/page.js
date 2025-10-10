"use client";

import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import useLenis from "./hooks/useLenis";
import Glimpses from "@/components/Glimpses";
import { Testimonials } from "@/components/Testinomials";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  useLenis();
  return (
    <main className="w-full">
      <HeroSection />
      <AboutUs />
      <Glimpses/>
      <Testimonials/>
      <Sponsors/>
    </main>
  );
}
