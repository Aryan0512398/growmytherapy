"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import therapist from "../lib/data";
import RevealOnScroll from "./RevealOnScroll";

export default function Faq() {
  return (
    <RevealOnScroll>
      <section className="bg-white py-20 px-4 md:px-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2c2c2c] text-center mb-10">
            Frequently Asked Questions
          </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {therapist.faq.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-[#e0e0e0] rounded-xl shadow-sm transition"
            >
              <AccordionTrigger className="font-sans text-[#333] text-base md:text-lg px-6 py-4 hover:bg-[#f8f8f8] rounded-t-xl transition">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#555] font-sans text-[15px] leading-relaxed px-6 pb-5 pt-2 bg-white">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
    </RevealOnScroll>
  );
}
