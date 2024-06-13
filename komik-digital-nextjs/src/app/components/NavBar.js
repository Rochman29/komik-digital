"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-[#996633] h-16 flex flex-row items-center text-[beige] z-[1]">
      <div className="flex flex-row justify-between min-w-full px-5">
        <div className="">
          <div>Digital Komik</div>
        </div>
        <div className="flex flex-row justify-between items-center gap-9">
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#komik">Komik</Link>
          <Link href="#kontak">Kontak</Link>
        </div>
      </div>
    </div>
  );
}
