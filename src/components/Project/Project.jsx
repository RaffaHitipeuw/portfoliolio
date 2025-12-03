"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [data, setData] = useState([]);
  const refs = useRef([]);

  useEffect(() => {
    fetch("https://raffahitipeuw.github.io/portasset/data/project/project.json")
      .then((res) => res.json())
      .then((json) => setData(json.projects))
      .catch((err) => console.error("Project fetch error:", err));
  }, []);

  useEffect(() => {
    gsap.utils.toArray(".line").forEach((line) => {
      gsap.fromTo(
        line,
        { width: 0 },
        {
          width: "100%",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: line,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (!el) return;

      if (activeIndex === i) {
        gsap.to(el, {
          height: "auto",
          opacity: 1,
          duration: 0.35,
          ease: "power2.out"
        });
      } else {
        gsap.to(el, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut"
        });
      }
    });
  }, [activeIndex]);

  return (
    <div className="w-full bg-[#2F3238] text-white px-8 py-10">
      <div className="grid grid-cols-4 w-full text-[10px] border-b border-white pb-4">
        <span>PROJECT</span>
        <span>PROJECT</span>
        <span>YEAR</span>
        <span>CATEGORY</span>
      </div>

      <div className="flex flex-col text-[15px]">
        {data.map((row, idx) => (
          <div key={idx} className="relative">
            <div
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              className="group grid grid-cols-4 py-5 font-helvetica transition-all duration-200 cursor-pointer"
            >
              <span className="group-hover:translate-x-1 transition-all duration-200">
                {row.project}
              </span>
              <span className="group-hover:translate-x-1 transition-all duration-200">
                {row.name}
              </span>
              <span className="group-hover:translate-x-1 transition-all duration-200">
                {row.year}
              </span>
              <span className="group-hover:translate-x-1 transition-all duration-200">
                {row.category}
              </span>

              <div className="absolute bottom-0 left-0 h-px bg-white/30 w-full line group-hover:bg-white/70 transition-all duration-300"></div>
            </div>

            <div
              ref={(el) => (refs.current[idx] = el)}
              className="overflow-hidden h-0 opacity-0"
            >
              <p className="text-[16px] mt-4 leading-6 max-w-3xl">{row.desc}</p>

              <a
                href={row.link}
                target="_blank"
                className="inline-block mt-4 px-4 py-2 bg-black rounded-full text-sm hover:bg-white hover:text-black transition-all"
              >
                see web
              </a>

              <div className="w-full h-px bg-white/20 mt-6"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
