import React from "react";

function TestimonialCard({ testimonial, name }) {
  return (
    <div className="w-[100%] md:w-1/3 border-2 border-black m-2 p-4 md:p-8 drop-shadow-lg">
      <p className="mb-3">{testimonial}</p>
      <h1 className="font-semibold">{name}</h1>
    </div>
  );
}

const Testimonial = () => {

  return (
    <section className="md:mx-[50px] lg:mx-[100px] 2xl:mx-[200px] mb-20">
      <h1 className="flex justify-center title">
        What others are saying about us!
      </h1>
      <div className="flex flex-col items-center md:flex-row md:justify-around">
        <TestimonialCard
          testimonial="Super easy! Amazing service! Highly recommended!"
          name="John"
        />
        <TestimonialCard
          testimonial="Super easy! Amazing service! Highly recommended!"
          name="Bob"
        />
        <TestimonialCard
          testimonial="Super easy! Amazing service! Highly recommended!"
          name="Joe"
        />
      </div>
    </section>
  );
};

export default Testimonial;
