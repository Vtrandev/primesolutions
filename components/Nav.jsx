import Image from "next/image";
import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="flex justify-between">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src=""
          alt="PrimeSolutions logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="">PrimeSolutions Financing</p>
      </Link>

      <div className="flex">
        <Link href="/"
        className="mr-5">Apply</Link>

        <Link href="/about"
        className="mr-5">About</Link>

        <Link href="#footer"
        className="mr-5">Contact</Link>
      </div>
    </nav>
  );
}

export default Nav;
