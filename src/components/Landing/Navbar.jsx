"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://raffahitipeuw.github.io/portasset/data/navbar/navbar.json")
      .then(res => res.json())
      .then(json => setData(json.navbar))
      .catch(err => console.error("Navbar fetch error:", err));
  }, []);

  if (!data) return null;

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 font-ms text-[#D9D9D9]">

      <div className="text-lg tracking-tight">
        {data.brand}
      </div>

      <div className="flex gap-6 text-sm md:text-base">
        {data.links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="hover:opacity-70 transition-opacity"
          >
            {link.label}
          </a>
        ))}
      </div>

    </nav>
  );
}
