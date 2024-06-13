"use client";

import { useTransform, useScroll, motion } from "framer-motion";

import Image from "next/image";
import ImagesGallery from "./ImagesGallery";

export default function Section2() {
  return (
    <main>
      <div className="text-4xl lg:text-6xl text-center">ABOUT</div>
      <div className="grid grid-cols-2 min-h-96 max-h-screen">
        <div className="grid grid-rows-2">
          <div className="flex justify-center items-center">
            <Image
              src="/element-komik.png"
              width={280}
              height={280}
              loading="eager"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image src="/buku.png" width={250} height={250} loading="eager" />
          </div>
        </div>
        <div className="text-lg lg:text-2xl flex flex-col items-center justify-center">
          <div className="text-center">
            Website ini didedikasikan untuk pengembangan kreativitas peserta
            didik, terutama untuk peserta didik di sekolah dasar negeri 6
            pemali.
          </div>
        </div>
      </div>
      <ImagesGallery />
    </main>
  );
}
