"use client";
import Link from "next/link";
import Image from "next/image";
export default function () {
  return (
    <footer className="bg-[#2c3e50] text-white py-4 relative">
      <div className="flex justify-between max-w-6xl m-auto flex-wrap">
        <div className="flex w-full flex-wrap">
          <div className="flex-1 m-2.5 min-w-52">
            <h4 className="mb-5 text-lg font-semibold uppercase border-b-2 border-solid">
              About Us
            </h4>
            <p className="text-sm leading-6">
              Website ini adalah hasil dari kolaborasi peserta didik UPT SD
              NEGERI 6 PEMALI, Mahasiswa kampus mengajar angkatan 7, dan
              mahasiswa Pendidikan Sistem Dan Teknologi Informasi Universitas
              Pendidikan Indonesia Kampus Purwakarta
            </p>
          </div>
          <div className="flex-1 m-2.5 min-w-52">
            <h4 className="mb-5 text-lg font-semibold uppercase border-b-2 border-solid">
              Quick Links
            </h4>
            <ul className="text-sm leading-6 list-none p-0 mb-[10px] text-white">
              <li className="mb-[10px]">
                <Link className="text-sm leading-6" href="#home">
                  Home
                </Link>
              </li>
              <li className="mb-[10px]">
                <Link className="text-sm leading-6" href="#about">
                  About
                </Link>
              </li>
              <li className="mb-[10px]">
                <Link className="text-sm leading-6" href="#komik">
                  Comics
                </Link>
              </li>
              <li className="mb-[10px]">
                <Link className="text-sm leading-6" href="#kontak">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 m-2.5 min-w-52">
            <h4 className="mb-5 text-lg font-semibold uppercase border-b-2 border-solid">
              Follow Us
            </h4>
            <div className="mt-3">
              <Link
                className="inline-block mr-2.5"
                href="https://www.instagram.com/km7_uptdsdn6pemali?igsh=MXU0Z2JqYzl0eHJpeQ=="
                target="_blank"
              >
                <Image src="/ig.png" width={36} height={36} />
              </Link>
            </div>
          </div>
          <div className="flex-1 m-2.5 min-w-52">
            <h4 className="mb-5 text-lg font-semibold uppercase border-b-2 border-solid">
              Contact Us
            </h4>
            <p>Edis Erianisya Putri</p>
            <p>Rochman Bambang E S</p>
            <p>Email: km.10900110@kampusmengajar.belajar.id</p>
            <p>Phone: (+62) 831-5778-1105</p>
            <p>Address: Bangka Belitung, indonesia</p>
          </div>
        </div>
      </div>
      <div className="text-center py-5 px-0 bg-[#233140] mt-5">
        <p>&copy; 2024 km7uptdsdn6pemali. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
