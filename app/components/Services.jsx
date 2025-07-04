"use client";

import Image from "next/image";
import therapist from "../lib/data";
import RevealOnScroll from "./RevealOnScroll";

export default function Services() {
  return (
    <RevealOnScroll>
      <section id="services" className="bg-[#f7f4ef] py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Intro Paragraph */}
          <p className="text-xl md:text-2xl font-sans text-[#5a5a5a] mb-8 leading-relaxed">
            Therapy can be a space where you invest in yourself—one of the highest
          forms of self-care. You may be led to therapy by anxiety, depression,
          relationship stress, past or recent trauma, grief and loss,
          self-esteem issues, or challenges with family, parenting, or parental
          relationships. Whatever the source of your stress, you don't have to
          face it alone. Therapy offers you the time and space to work toward
          wellness and peace.
        </p>

        <hr className="border-t border-[#d4cfc8] w-3/4 mx-auto mb-12" />

        {/* Section Heading */}
        <h2 className="text-4xl md:text-4xl font-serif text-[#3e3e3e] mb-14">
          Services & Specialties
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {therapist.services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Service Image */}
              <div className="w-48 h-48 mb-6 rounded-full overflow-hidden">
                <Image
                  src={`/service${index + 1}.jpg`} 
                  alt={service.title}
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="text-xl font-serif text-[#3e3e3e] mb-3">
                {service.title}
              </h3>
              <p className="text-[#5a5a5a] font-sans leading-relaxed text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </RevealOnScroll>
  );
}
