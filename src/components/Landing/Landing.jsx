"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    fetch("https://raffahitipeuw.github.io/portasset/data/hero/hero.json")
      .then(res => res.json())
      .then(data => setHeroData(data.hero))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  useEffect(() => {
    if (!heroData.length) return;

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
          scrub: true
        }
      }
    );
  }, [heroData]);

  const classes = [
    "hero-line font-magnet text-3xl leading-2.5 md:text-4xl md:leading-6 xl:text-6xl xl:leading-6",
    "hero-line font-magnet text-2xl md:text-4xl xl:text-6xl",
    "hero-line font-pixel text-xl leading-4 md:text-4xl md:leading-10 xl:text-6xl xl:leading-16",
    "hero-line text-xl leading-6 md:text-4xl md:leading-6 xl:text-5xl xl:leading-6",
    "hero-line text-lg leading-3 md:text-3xl md:leading-9 xl:text-5xl xl:leading-12"
  ];

  return (
    <div className="relative w-full h-screen bg-[#2F3238] text-[#D9D9D9]">
      <Navbar />

      <div className="w-full h-full flex flex-col items-center justify-center hero-text">
        {!heroData.length ? (
          <div>Loading...</div>
        ) : (
          heroData.map((item, i) => {
            if (i === 0) {
              return (
                <h1 key={i} className={classes[i]}>
                  <span className="font-pixel">R</span>
                  AFFA <span className="font-pixel">H</span>ITIPEUW
                </h1>
              );
            }

            if (i === 3) {
              return (
                <h1 key={i} className={classes[i]}>
                  <span className="font-magnet">BASED IN </span>
                  <span className="font-pixel">JAKARTA</span>
                </h1>
              );
            }

            if (i === 4) {
              return (
                <h1 key={i} className={classes[i]}>
                  <span className="font-pixel">FOLIO</span>
                  <span className="font-magnet">©2025</span>
                </h1>
              );
            }

            return (
              <h1 key={i} className={classes[i]}>
                {item.text}
              </h1>
            );
          })
        )}
      </div>
    </div>
  );
}
