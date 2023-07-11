import Image from "next/image";
import React from "react";
import backgroundImg from "../public/assets/background.jpg";
import carImg from "../public/assets/car.png"
import Link from "next/link";

const Landing = () => {
  return (
    <header className="m-8">
      <Image
        src={backgroundImg}
        alt="World background"
        loading="lazy"
        placeholder="blur"
        className="w-full opacity-90 lg:mx-auto"
      />

      <div className="flex">
        <div className="mr-34">
          <h1 className="font-bold text-xl md:text-3xl md:ml-12 mt-6">
            Looking for a car?
            <br className="max-md:hidden" />
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
          placeholder="blur"
          className="w-1/2 h-1/2 md:w-1/3 md:h-1/3"
        />
      </div>
    </header>
  );
};

export default Landing;
