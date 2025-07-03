"use client";

import therapist from "../lib/data";
import RevealOnScroll from "./RevealOnScroll";


export default function Rates() {
  return (
    <RevealOnScroll>
      <section className="bg-[#97b7bb] text-[#1e1e1e] py-24 px-4 md:px-8 text-center font-sans">
        <h2 className="text-4xl md:text-5xl font-serif mb-10">Rates and Insurance</h2>

      <p className="text-xl mb-4">{therapist.fees.individual}</p>
      <p className="text-xl mb-8">{therapist.fees.couples}</p>

      <p className="text-lg max-w-3xl mx-auto mb-6">
        I accept both private pay and do not take insurance directly. However, a superbill is provided for reimbursement.
      </p>

      <p className="text-lg max-w-4xl mx-auto">
        For out-of-network plans, you may be eligible for reimbursement. Use{" "}
        <a
          href="/"
          target="_blank"
          className="underline hover:text-[#1a3d3d]"
        >
          this tool
        </a>{" "}
        to check your eligibility.
      </p>
    </section>
    </RevealOnScroll>
  );
}
