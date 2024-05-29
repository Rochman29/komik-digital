"use client";

import TypingEffect from "./TypingEffect";
import Image from "next/image";

export default function Section1() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center pb-20 px-10">
        <TypingEffect />
      </div>
      <div className="flex justify-center items-center">
        <Image src="/boom.png" width={500} height={500} loading="eager" />
      </div>
    </>
  );
}
