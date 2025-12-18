"use client";

import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import useLenis from "./hooks/useLenis";
import Glimpses from "@/components/Glimpses";
import { Testimonials } from "@/components/Testinomials";
import Sponsors from "@/components/Sponsors";
import InfiniteCarousel from "@/components/infiniteCarousal";
import OurEvents from "@/components/OurEvents";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutUs />
      <Glimpses/>
      <OurEvents/>
      <InfiniteCarousel/>
      <Testimonials/>
      <Sponsors/>
    </main>
  );
}
