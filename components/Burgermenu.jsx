"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Burgermenu = () => {
  const [flexClass, setFlexClass] = useState(false);

  function activeMenu() {
    setFlexClass(true);
  }
  function inactiveMenu() {
    setFlexClass(false);
  }

  return (
    <>
      <div className="block mr-5 md:hidden">
        <button onClick={() => activeMenu()}>
          <Bars3Icon className="h-8 w-8" />
        </button>
      </div>

      <div
        className={`absolute flex-col items-center top-0 left-0 right-0 bottom-0 bg-gray-200 z-10 animate-fade-left
        animate-duration-700
        ${flexClass ? "flex" : "hidden "}`}
      >
        <button onClick={() => inactiveMenu()}>
          <XMarkIcon className="absolute top-5 right-5 h-8 w-8" />
        </button>
        <Link
          href="/"
          className="text-2xl mt-10 mb-3 font-bold text__underline relative hover:text-[#5E00D6]"
          onClick={() => inactiveMenu()}
        >
          Home
        </Link>

        <Link
          href="/about"
          className="text-2xl my-3 font-bold text__underline relative hover:text-[#5E00D6]"
          onClick={() => inactiveMenu()}
        >
          About
        </Link>

        <Link
          href="#footer"
          className="text-2xl mt-3 mb-7 font-bold text__underline relative hover:text-[#5E00D6]"
          onClick={() => inactiveMenu()}
        >
          Contact
        </Link>

        <button
          className="text-xl py-2 px-4 bg-[#5E00D6] hover:bg-[#a35dff] text-white font-bold rounded-3xl"
          onClick={() => inactiveMenu()}
        >
          <Link href="/form">Apply Now</Link>
        </button>
      </div>
    </>
  );
};

export default Burgermenu;
