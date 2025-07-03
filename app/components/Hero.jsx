"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import { Button } from "@/components/ui/button";
import RevealOnScroll from "./RevealOnScroll";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <RevealOnScroll>
      <section className="bg-[#f4f0e9] py-4 px-4 md:px-8 relative">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto flex justify-between items-center py-2 mb-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
            src="/logo2.png"
            alt="Serena Blake Logo"
            width={50}
            height={50}
            className="bg-[#f4f0e9]"
          />
          <div className="text-[#2f4f4f]">
            <h1 className="text-xl sm:text-2xl font-serif font-semibold">
              Dr. Serena Blake, PsyD
            </h1>
            <p className="text-sm sm:text-base font-sans">Psychological Services</p>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <Button
          className="md:hidden  text-[#2f4f4f] p-2" variant={"ghost"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </Button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#f4f0e9] shadow-lg transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-semibold text-[#2f4f4f]">Menu</span>
          <Button onClick={() => setMenuOpen(false)} variant={"ghost"} className="text-[#2f4f4f]">
            <X size={24} />
          </Button>
        </div>
        <nav className="flex flex-col gap-4 p-4 text-[#2f4f4f]">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="#about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="#services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>

      {/* Background Video Section */}
      <div className="relative overflow-hidden rounded-lg h-[80vh] w-full shadow-lg">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white font-semibold mb-4">
            Dr. Serena Blake, PsyD
          </h1>
          <h2 className="text-md sm:text-xl md:text-2xl font-sans text-white mb-6 max-w-2xl">
            Compassionate Therapy for Anxiety, Trauma & Relationships
          </h2>
          <Link
            href="#contact"
            className="bg-[#bfd2c5] text-[#3e3e3e] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#aabeb2] transition"
          >
            Book a Free Consult
          </Link>
        </div>
      </div>
    </section>
    </RevealOnScroll>
  );
}
