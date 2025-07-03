import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Faq from "./components/Faq";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Rates from "./components/Rates ";
import Quote from "./components/Quote";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Rates />
      <Faq />
      <ContactForm />
      <Quote />
      <Footer />
    </>
  );
}
