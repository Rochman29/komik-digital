"use client";
import Link from "next/link";
import Image from "next/image";
export default function Section3() {
  return (
    <>
      <div className="text-4xl lg:text-6xl text-center">KOMIK</div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 min-h-96 max-h-screen gap-10">
        <div className="flex flex-col justify-center items-center bg-[#996633] sm:gap-20 gap-2 pb-7 sm:p-0">
          <Link
            href="https://drive.google.com/drive/folders/1634DFxCxQHfukkkngP11rBIZPyr9fJoW?usp=drive_link"
            target="_blank"
            className="bg-[#C2B280] sm:w-1/2 text-center text-sm lg:text-2xl"
          >
            BAHASA INDONESIA
          </Link>
          <div>
            <Link
              href="https://drive.google.com/drive/folders/1634DFxCxQHfukkkngP11rBIZPyr9fJoW?usp=drive_link"
              target="_blank"
            >
              <Image
                src="/bendera-indonesia.jpg"
                width={280}
                height={280}
                loading="eager"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#996633] sm:gap-20 gap-2 pb-7 sm:p-0">
          <Link
            href="https://drive.google.com/drive/folders/1648Mh55z5oMZoE5YSHSvg4ptTaOGilE2?usp=drive_link"
            target="_blank"
            className="bg-[#C2B280] w-1/2 text-center text-sm lg:text-2xl"
          >
            BAHASA INGGRIS
          </Link>
          <div>
            <Link
              href="https://drive.google.com/drive/folders/1648Mh55z5oMZoE5YSHSvg4ptTaOGilE2?usp=drive_link"
              target="_blank"
            >
              <Image
                src="/bendera-inggris.png"
                width={280}
                height={280}
                loading="eager"
                className="sm:w-[305] sm:h-[305]"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
