import Image from "next/image";
import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="flex justify-between py-4 text-base">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/logo.png"
          alt="PrimeSolutions logo"
          width={40}
          height={40}
          className="object-contain"
        />
        <p className="font-bold">PrimeSolutions Financing</p>
      </Link>

      <div className="flex">
        <Link href="/"
        className="mr-5 font-bold hidden md:flex hover:text-[#5E00D6] hover:underline">Home</Link>
        
        <Link href="/form"
        className="mr-5 font-bold hidden md:flex hover:text-[#5E00D6] hover:underline">Apply</Link>

        <Link href="/about"
        className="mr-2 md:mr-5 font-bold hover:text-[#5E00D6] hover:underline">About</Link>

        <Link href="#footer"
        className="mr-2 md:mr-5 font-bold hover:text-[#5E00D6] hover:underline">Contact</Link>
      </div>
    </nav>
  );
}

export default Nav;
