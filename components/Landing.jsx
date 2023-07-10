import Image from "next/image";
import React from "react";
import backgroundImg from "../public/assets/background.jpg";
import Link from "next/link";

const Landing = () => {
  return (
    <>
      <Image
        src={backgroundImg}
        alt="World background"
        loading="lazy"
        placeholder="blur"
        className="w-full lg:mx-auto"
      />

      <h1 className="font-bold text-3xl ml-20 mt-6">
        Looking for a car?
        <br className="max-md:hidden" />
      </h1>
      <p className="font-bold text-3xl ml-20 mb-6">Speak to an expert now!</p>

      <p className="ml-20">
        <button className="button">
          <Link href="/form">Apply Now</Link>
        </button>
      </p>
    </>
  );
};

export default Landing;
