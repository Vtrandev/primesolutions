import Image from "next/image";
import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="flex justify-between py-4">
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
        className="mr-5 font-bold">Home</Link>
        
        <Link href="/form"
        className="mr-5 font-bold">Apply</Link>

        <Link href="/about"
        className="mr-5 font-bold">About</Link>

        <Link href="#footer"
        className="mr-5 font-bold">Contact</Link>
      </div>
    </nav>
  );
}

export default Nav;
