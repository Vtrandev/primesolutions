import Image from "next/image";
import React from "react";
import backgroundImg from "../public/assets/background.jpg";
import carImg from "../public/assets/car.png";
import Link from "next/link";

const Landing = () => {
  return (
    <header className="relative">
      <Image
        src={backgroundImg}
        alt="World background"
        loading="lazy"
        className="absolute bg-center w-full min-h-[20vh] max-h-[40vh] -z-10 opacity-30"
      />

      <div className="flex flex-col items-center justify-center min-h-[50vh] lg:flex-row lg:items-center">
        <div className="mr-34 text-[#1F1F1F]">
          <h1 className="font-bold text-3xl mt-6 md:ml-12 ">
            Looking for a car?
          </h1>
          <h1 className="font-bold text-xl md:text-3xl mb-6 md:ml-12 ">
            Speak to an expert now!
          </h1>

          <p className="md:ml-12">
            <button className="button">
              <Link href="/form">Apply Now</Link>
            </button>
          </p>
        </div>

        <Image
          src={carImg}
          alt="Car image"
          loading="lazy"
          className="object-contain max-w-[40vh]"
        />
      </div>
    </header>
  );
};

export default Landing;
