import Image from "next/image";
import React from "react";
import backgroundImg from "../public/assets/background.jpg";
import carImg from "../public/assets/car.png"
import Link from "next/link";

const Landing = () => {
  return (
    <header className="m-8 relative">
      {/* <Image
        src={backgroundImg}
        alt="World background"
        loading="lazy"
        className="absolute bg-contain top-0 -z-10 opacity-40"
      /> */}



      <div className="flex flex-col items-center justify-center min-h-[50vh] lg:flex-row lg:items-center">
        <div className="mr-34 text-[#303030]">
          <h1 className="font-bold  text-xl md:text-3xl md:ml-12 mt-6">
            Looking for a car?
            {/* <br className="max-md:hidden" /> */}
          </h1>
          <p className="font-bold text-xl md:text-3xl md:ml-12 mb-6">
            Speak to an expert now!
          </p>

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
