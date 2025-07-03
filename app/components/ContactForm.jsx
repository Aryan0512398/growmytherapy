"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import RevealOnScroll from "./RevealOnScroll";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    preferredTime: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required.";
    if (!form.phone) newErrors.phone = "Phone is required.";
    if (!form.email || !form.email.includes("@"))
      newErrors.email = "Valid email is required.";
    if (!form.message) newErrors.message = "Please enter a message.";
    if (!form.preferredTime) newErrors.preferredTime = "Preferred time is required.";
    if (!form.agree) newErrors.agree = "Consent is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    toast.success("Form submitted successfully!");
    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
      preferredTime: "",
      agree: false,
    });
    setErrors({});
  };

  return (
    <RevealOnScroll>
      <section id="contact" className="bg-[#f4f0e9] py-20 px-4 md:px-10">
        <div className="max-w-xl mx-auto border border-[#2f4f4f] rounded-xl p-8 shadow-md bg-white">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2f4f4f] text-center mb-2 font-semibold">
            Get In Touch
          </h2>
        <p className="text-center text-[#2f4f4f] text-base mb-8 font-sans font-medium">
          Simply fill out the brief fields below and Dr. Blake will be in touch with you soon.
          This form is safe, private, and completely free.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 text-[#2f4f4f] font-medium">
          {/* Name */}
          <div>
            <Label htmlFor="name" className="mb-1 font-semibold">Name</Label>
            <Input
              id="name"
              placeholder="Name"
              className="border border-[#2f4f4f] rounded-md text-[#2f4f4f] placeholder:text-gray-400"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" className="mb-1 font-semibold">Email</Label>
            <Input
              id="email"
              placeholder="you@example.com"
              type="email"
              className="border border-[#2f4f4f] rounded-md text-[#2f4f4f] placeholder:text-gray-400"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <Label htmlFor="phone" className="mb-1 font-semibold">Phone</Label>
            <Input
              id="phone"
              placeholder="(555) 234–5678"
              className="border border-[#2f4f4f] rounded-md text-[#2f4f4f] placeholder:text-gray-400"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message" className="mb-1 font-semibold">Message</Label>
            <Textarea
              id="message"
              placeholder="How can I help you?"
              className="border border-[#2f4f4f] rounded-md text-[#2f4f4f] placeholder:text-gray-400"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Preferred Time */}
          <div>
            <Label htmlFor="preferredTime" className="mb-1 font-semibold">Preferred Contact Time</Label>
            <Input
              id="preferredTime"
              placeholder="e.g., Mornings, Evenings"
              className="border border-[#2f4f4f] rounded-md text-[#2f4f4f] placeholder:text-gray-400"
              value={form.preferredTime}
              onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
            />
            <p className="text-sm mt-1 font-normal">
              Let us know when you’re available for a call or consult.
            </p>
            {errors.preferredTime && (
              <p className="text-red-600 text-sm mt-1">{errors.preferredTime}</p>
            )}
          </div>

          {/* Consent */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="agree"
              checked={form.agree}
              onCheckedChange={(checked) => setForm({ ...form, agree: checked })}
            />
            <Label htmlFor="agree" className="text-sm font-semibold">
              I agree to be contacted
            </Label>
          </div>
          {errors.agree && <p className="text-red-600 text-sm mt-1">{errors.agree}</p>}

          {/* Submit */}
          <Button
            type="submit"
            className="w-full bg-[#2f4f4f] text-white hover:bg-[#1e3a3a] rounded-md font-semibold"
          >
            Submit
          </Button>

          <p className="text-xs text-[#2f4f4f] mt-4 text-center font-medium">
            By clicking submit, you consent to receive texts and emails from Dr. Serena Blake.
          </p>
        </form>
      </div>
    </section>
    </RevealOnScroll>
  );
}
