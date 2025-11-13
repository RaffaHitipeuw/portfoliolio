"use client";
import { motion } from "framer-motion";
import { slideUp } from "./animation";
import dynamic from "next/dynamic";
const ColorBends = dynamic(() => import("./ColorBends"), { ssr: false });

export default function LandingPage() {
  return (
    <motion.main variants={slideUp} initial="initial" animate="enter"
    >
      <div className="w-full h-screen relative overflow-hidden bg-secondary">
        <ColorBends
          colors={["#DF2935"]}
          rotation={0}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.01}
          transparent={true}
        />
      </div>
    </motion.main>
  );
}
