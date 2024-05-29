"use client";
import Link from "next/link";
import Image from "next/image";
export default function Section3() {
  return (
    <>
      <div className="text-4xl lg:text-6xl text-center">KOMIK</div>
      <div className="mt-10 grid grid-cols-2 min-h-96 max-h-screen gap-10">
        <div className="flex flex-col justify-center items-center bg-[#996633] gap-20">
          <div className="bg-[#C2B280] w-1/2 text-center text-sm lg:text-2xl">
            BAHASA INDONESIA
          </div>
          <div>
            <Link href="/">
              <Image
                src="/bendera-indonesia.jpg"
                width={280}
                height={280}
                loading="eager"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#996633] gap-20">
          <div className="bg-[#C2B280] w-1/2 text-center text-sm lg:text-2xl">
            BAHASA INGGRIS
          </div>
          <div>
            <Link href="/">
              <Image
                src="/bendera-inggris.png"
                width={280}
                height={280}
                loading="eager"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
