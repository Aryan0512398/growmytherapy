"use client";

import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

export default function About() {
  return (
    <RevealOnScroll>
      <section id="about" className="bg-white py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:items-start">
          {/* Heading - Always First */}
          <h2 className="text-4xl font-serif text-[#3e3e3e] mb-6 md:hidden">
            Meet Dr. Serena Blake
        </h2>

        {/* Image */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <Image
            src="/serena.jpg"
            alt="Dr. Serena Blake"
            className="rounded-lg shadow-md object-cover w-full h-auto"
            width={500}
            height={600}
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col justify-start">
          {/* Heading for desktop */}
          <h2 className="text-4xl font-serif text-[#3e3e3e] mb-4 hidden md:block">
            Meet Dr. Serena Blake
          </h2>

          <p className="text-[#5a5a5a] font-sans leading-relaxed text-xl">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in
            Los Angeles, CA, with eight years of experience and over 500 client
            sessions. She blends evidence-based approaches—like
            cognitive-behavioral therapy and mindfulness—with compassionate,
            personalized care to help you overcome anxiety, strengthen
            relationships, and heal from trauma.
            <br /><br />
            Whether you meet in her Maplewood Drive office or connect virtually
            via Zoom, Dr. Blake is committed to creating a safe, supportive
            space for you to thrive.
          </p>
        </div>
      </div>
       <hr className="border-t border-black w-3/4 mx-auto mt-12" />
    </section>
    </RevealOnScroll>
  );
}
