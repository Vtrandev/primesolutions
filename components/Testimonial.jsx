import React from "react";

const Testimonial = () => {
  return (
    <section className="mx-[50px] lg:mx-[100px] 2xl:mx-[200px] mb-20">
      <h1 className="flex justify-center title">
        What others are saying about us!
      </h1>
      <div className="flex justify-around">

        <div className="border-2 border-black p-10 mx-2 drop-shadow-lg">
          <p>Super easy! Amazing service! Highly recommended!</p>
          <h3>John</h3>
        </div>

        <div className="border-2 border-black p-10 mx-2 drop-shadow-lg">
          Super easy! Amazing service! Highly recommended!
          <h3>Bob</h3>
        </div>

        <div className="border-2 border-black p-10 mx-2 drop-shadow-lg">
          Super easy! Amazing service! Highly recommended!
          <h3>Joe</h3>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
