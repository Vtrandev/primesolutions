import Image from "next/image";
import React from "react";

const Main = () => {
  return (
    <>
      <Image
        src="/assets/background.jpg"
        alt="World background"
        width={1200}
        height={100}
        className="object-contain mx-auto"
      />

      {/* <Image
        src="/assets/car.png"
        alt="Car"
        width={300}
        height={50}
        className="object-contain absolute right-[200px] top-56"
      /> */}

      <h1 className="font-bold text-3xl ml-10 mt-6">
        Looking for a car?
        <br className="max-md:hidden" />
      </h1>
      <p className="font-bold text-3xl ml-10 mb-6">Speak to an expert now!</p>

      <p className="ml-10">
        <button className="button">Apply Now</button>
      </p>
    </>
  );
};

export default Main;
