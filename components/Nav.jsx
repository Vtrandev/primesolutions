import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoIMG from "../public/assets/logo.png";
import Burgermenu from "./Burgermenu";

function Nav() {
  return (
    <nav className="flex justify-between py-4 text-base items-center">
      <Link href="/" className="flex gap-2 items-center ml-5">
        <Image
          src={logoIMG}
          alt="PrimeSolutions logo"
          style={{
            width: 40,
            height: 40,
          }}
          className="object-contain"
        />
        <p className="font-bold">PrimeSolutions Financing</p>
      </Link>

      <Burgermenu />

      <div className="relative hidden items-center md:flex">
        <Link
          href="/"
          className="mr-5 font-bold text__underline relative hover:text-[#5E00D6]"
        >
          Home
        </Link>

        <Link
          href="/about"
          className="mr-2 md:mr-5 font-bold text__underline relative hover:text-[#5E00D6]"
        >
          About
        </Link>

        <Link
          href="#footer"
          className="mr-2 md:mr-5 font-bold text__underline relative hover:text-[#5E00D6]"
        >
          Contact
        </Link>
        <button className="text-md py-2 px-4 bg-[#5E00D6] hover:bg-[#a35dff] text-white font-bold rounded-3xl">
          <Link href="/form">Apply Now</Link>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
