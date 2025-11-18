import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  const data = [
    { project: "TAPAS", name: "TAPAS", year: "OCT - 25", category: "SUSTAINABLE MOBILITY PLATFORM" },
    { project: "TYPION", name: "TYPION TEAM", year: "OCT - 25", category: "ABOUTPROJECT LOREM" },
    { project: "NIVARA", name: "PT NIVARA", year: "24", category: "ABOUTPROJECT LOREM" },
    { project: "LOREM TEAM", name: "LOREM PROJECT", year: "LOREM", category: "ABOUTPROJECT LOREM" },
    { project: "LOREM TEAM", name: "LOREM PROJECT", year: "LOREM", category: "ABOUTPROJECT LOREM" },
    { project: "LOREM TEAM", name: "LOREM PROJECT", year: "LOREM", category: "ABOUTPROJECT LOREM" },
    { project: "LOREM TEAM", name: "LOREM PROJECT", year: "LOREM", category: "ABOUTPROJECT LOREM" },
  ];

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
            toggleActions: "play none none reverse",
          }
        }
      );
    });
  }, []);

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
          <div
            key={idx}
            className="relative grid grid-cols-4 py-5 font-helvetica"
          >
            <span>{row.project}</span>
            <span>{row.name}</span>
            <span>{row.year}</span>
            <span>{row.category}</span>

            <div className="absolute bottom-0 left-0 h-px bg-white/40 w-0 line"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
