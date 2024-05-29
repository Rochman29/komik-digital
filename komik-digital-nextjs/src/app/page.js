"use client";

import Image from "next/image";
import Navbar from "./components/NavBar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#C2B280] text-[#6F3D1E] font-serif scroll-smooth focus:scroll-auto">
      <header>
        <Navbar />
      </header>
      <main
        id="home"
        className="pt-16 h-full min-h-screen max-h-screen grid grid-cols-2"
      >
        <Section1 />
      </main>
      <div id="about" className="pt-16 px-10 min-h-screen max-h-screen">
        <Section2 />
      </div>
      <div
        id="komik"
        className="pt-16 px-10 min-h-screen max-h-screen items-center justify-around"
      >
        <Section3 />
      </div>
      <div id="kontak" className="pt-16">
        <Footer />
      </div>
    </div>
  );
}
