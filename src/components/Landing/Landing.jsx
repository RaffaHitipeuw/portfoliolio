"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./Navbar";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  useEffect(() => {
    gsap.fromTo(
      ".hero-line",
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: -50,
        ease: "power3.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: ".hero-text",
          start: "top top",
          end: "bottom+=200 top",
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#2F3238] text-[#D9D9D9]">
      <Navbar />

      <div className="w-full h-full flex flex-col items-center justify-center hero-text">
        
        <h1 className="hero-line font-magnet text-3xl leading-2.5 md:text-4xl md:leading-6 xl:text-6xl xl:leading-6">
          <span className="font-pixel">R</span>AFFA <span className="font-pixel">H</span>ITIPEUW
        </h1>

        <h1 className="hero-line font-magnet text-2xl md:text-4xl xl:text-6xl">
          FRONT END DEVELOPER
        </h1>

        <h1 className="hero-line font-pixel text-xl leading-4 md:text-4xl md:leading-10 xl:text-6xl xl:leading-16">
          CRAFTED VISUALS, CLEAN ENERGY
        </h1>

        <h1 className="hero-line text-xl leading-6 md:text-4xl md:leading-6 xl:text-5xl xl:leading-6">
          <span className="font-magnet">BASED IN </span>
          <span className="font-pixel">JAKARTA</span>
        </h1>

        <h1 className="hero-line text-lg leading-3 md:text-3xl md:leading-9 xl:text-5xl xl:leading-12">
          <span className="font-pixel">FOLIO</span>
          <span className="font-magnet">©2025</span>
        </h1>

      </div>
    </div>
  );
}
