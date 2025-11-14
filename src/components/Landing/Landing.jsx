"use client";
import { motion } from "framer-motion";
import { slideUp } from "./animation";
import dynamic from "next/dynamic";
const ColorBends = dynamic(() => import("./ColorBends"), { ssr: false });

export default function LandingPage() {
  return (
    <motion.main variants={slideUp} initial="initial" animate="enter">
      <div className="w-full h-screen relative overflow-hidden bg-secondary">

        <ColorBends
          colors={["#A3D8F4", "#F7A9A8", "#C4F1BE"]
}
          rotation={-50}
          speed={0.5}
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
