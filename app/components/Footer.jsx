"use client";

import Link from "next/link";
import therapist from "../lib/data";
import RevealOnScroll from "./RevealOnScroll";

export default function Footer() {
  return (
    <RevealOnScroll>
      <footer className="bg-[#f4f0e9] text-[#3e3e3e] text-center py-12 px-4 font-serif">
        <div className="max-w-3xl mx-auto space-y-4">
          {/* Therapist Name & Title */}
          <h2 className="text-2xl md:text-3xl font-medium">
            {therapist.name}, {therapist.title}
        </h2>

        {/* Contact Info */}
        <div className="space-y-1 text-base">
          <p>
            <a
              href={`mailto:${therapist.contact.email}`}
              className="underline hover:opacity-80"
            >
              {therapist.contact.email}
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href={`tel:${therapist.contact.phone}`} className="underline">
              {therapist.contact.phone}
            </a>
          </p>
          <p>{therapist.location}</p>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4 mt-2">
          <Link href="#home" className="underline">
            Home
          </Link>
          <Link href="#about" className="underline">
            About
          </Link>
          <Link href="#contact" className="underline">
            Contact
          </Link>
        </div>

        {/* Client Portal (optional link) */}
        <div className="mt-4">
          <Link
            href="/"
            className="underline text-lg hover:opacity-80"
          >
            Client Portal
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-[#5a5a5a] mt-6">
          © {new Date().getFullYear()} {therapist.name}. All rights reserved.
        </p>
      </div>
    </footer>
    </RevealOnScroll>
  );
}
