"use client";

import Image from "next/image";
import Navbar from "./components/NavBar";

export default function Home() {
  return (
    <div className="bg-[#C2B280] text-[#6F3D1E] font-serif scroll-behavior:smooth">
      <header>
        <Navbar />
      </header>
      <main
        id="home"
        className="pt-16 h-full min-h-screen max-h-screen flex flex-row justify-around items-center"
      >
        <div className="flex flex-col justify-center items-center text-center pb-20">
          <div className="text-6xl">KOMIK UPTD</div>
          <div className="text-6xl">SD NEGERI 6 PEMALI</div>
        </div>
        <div>
          <Image src="/boom.png" width={500} height={500} />
        </div>
      </main>
      <div
        id="about"
        className="pt-16 px-10 min-h-screen max-h-screen items-center justify-around"
      >
        <div className="text-6xl text-center">ABOUT</div>
        <div className="flex flex-row justify-center items-center">
          <div className="w-1/2 flex flex-col gap-10 items-center">
            <div className="flex justify-center">
              <Image
                src="/element-komik.png"
                width={230}
                height={230}
                className="scale-150"
              />
            </div>
            <div className="h-1/4 flex justify-center">
              <Image
                src="/buku.png"
                width={230}
                height={230}
                className="scale-125"
              />
            </div>
          </div>
          <div className="text-2xl flex flex-col items-center justify-between w-1/2">
            <div className="text-center">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
