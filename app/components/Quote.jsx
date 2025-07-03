// components/Quote.tsx
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

export default function Quote() {
  return (
    <RevealOnScroll>
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[400px] md:h-[500px] flex items-center justify-center text-center text-black px-4"
        style={{ backgroundImage: `url('/bgImage.jpg')` }}
      >
        <div className="max-w-4xl mx-auto">
        <p className="text-2xl md:text-3xl font-serif  leading-relaxed">
          “I have come to believe that caring for myself is not self-indulgent.
          Caring for myself is an act of survival.”
        </p>
        <p className="mt-4 text-lg md:text-xl">— Audre Lorde</p>
      </div>
    </section>
    </RevealOnScroll>
  );
}
