"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef } from "react";

const ColorBends = dynamic(() => import("./ColorBends"), { ssr: false });

export default function LandingPage() {
  const scrollArea = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollArea,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <div ref={scrollArea} className="relative w-full min-h-[250vh]">

      <motion.div
        style={{ scale }}
        className="h-screen w-full sticky top-0 overflow-hidden bg-secondary"
      >
        <ColorBends
          colors={["#A3D8F4", "#F7A9A8", "#C4F1BE"]}
          rotation={-50}
          speed={0.5}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.01}
          transparent
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none font-harmonditalic text-tertiary">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl">In the Mess</h1>
          <div className="flex flex-row">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">of</h1>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Life</h1>
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">&</h1>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Work</h1>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
