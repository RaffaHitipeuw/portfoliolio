"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim";

export default function Index() {
  const [words, setWords] = useState([]);
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    fetch("https://raffahitipeuw.github.io/portasset/data/index/index.json")
      .then((res) => res.json())
      .then((json) => setWords(json.words))
      .catch((err) => console.error("Index fetch error:", err));
  }, []);

  useEffect(() => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  useEffect(() => {
    if (!words.length) return;
    if (index === words.length - 1) return;

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, index === 0 ? 1000 : 150);

    return () => clearTimeout(timer);
  }, [index, words]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${
    dimension.height + 300
  } 0 ${dimension.height}  L0 0`;

  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${
    dimension.height
  } 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
    }
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-screen w-screen flex items-center justify-center fixed z-99 bg-[#D9D9D9]"
    >
      {dimension.width > 0 && words.length > 0 && (
        <>
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="flex items-center text-[#2F3238] font-helvetica text-[42px] z-1"
          >
            <span className="block w-2.5 h-2.5 bg-[#2F3238] rounded-full mr-2.5" />
            {words[index]}
          </motion.p>

          <svg className="absolute top-0 w-full h-[calc(100%+300px)]">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              className="fill-[#D9D9D9]"
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}
