import { Cormorant_Garamond, Open_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-cormorant",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "Assignment 1 - GrowMyTherapy",
  description: "Therapist website for Dr. Serena Blake",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${openSans.variable} font-sans bg-[#f7f4ef] text-[#3e3e3e] antialiased`}>
        {children}
         <Toaster position="top-center" />
      </body>
    </html>
  );
}
