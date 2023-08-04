import Image from "next/image";
import React from "react";
import backgroundImg from "../public/assets/background.jpg";
import carImg from "../public/assets/car.png";
import Link from "next/link";

const Landing = () => {
  return (
    <header className="relative">
      <div className="absolute w-full h-[300px] md:h-[400px] overflow-hidden border -z-10 opacity-30">
        <Image
          src={backgroundImg}
          alt="World background"
          loading="lazy"
          className="w-full"
        />
      </div>

      <div className="flex flex-col items-center justify-center min-h-[60vh] lg:flex-row lg:items-center">
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
