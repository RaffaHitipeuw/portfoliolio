"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 font-ms text-[#D9D9D9]">
      
      {/* LEFT */}
      <div className="text-lg tracking-tight">
        RAFFA HITIPEUW
      </div>

      {/* RIGHT */}
      <div className="flex gap-6 text-sm md:text-base">
        <a href="/blog" className="hover:opacity-70 transition-opacity">BLOG</a>
        <a href="/contact" className="hover:opacity-70 transition-opacity">CONTACT</a>
        <a href="https://www.linkedin.com/in/raffa-hitipeuw-30124b380/" className="hover:opacity-70 transition-opacity">
          LINKEDIN
        </a>
      </div>

    </nav>
  );
}
