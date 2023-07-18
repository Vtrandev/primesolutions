"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

function TestimonialCard({ testimonial, name }) {
  return (
    <>
      <p className="mb-3">{testimonial}</p>
      <h1 className="font-semibold">{name}</h1>
    </>
  );
}

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla w-[80%]" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide p-5 border-2 border-black drop-shadow-lg">
            <TestimonialCard
              testimonial="Super easy! Amazing service! Highly recommended!"
              name="John"
            />
          </div>
          <div className="embla__slide p-5 border-2 border-black drop-shadow-lg">
            <TestimonialCard
              testimonial="Super easy! Amazing service! Highly recommended!"
              name="Joe"
            />
          </div>
          <div className="embla__slide p-5 border-2 border-black drop-shadow-lg">
            <TestimonialCard
              testimonial="Super easy! Amazing service! Highly recommended!"
              name="Bob"
            />
          </div>
          <div className="embla__slide p-5 border-2 border-black drop-shadow-lg">
            <TestimonialCard
              testimonial="Super easy! Amazing service! Highly recommended!"
              name="Billy"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="embla__prev m-2" onClick={scrollPrev}>
            Prev
          </button>
          <button className="embla__next m-2" onClick={scrollNext}>
            Next
          </button>
        </div>
    </div>
  );
};



const Testimonial = () => {
  return (
    <section className="mx-5 md:mx-[50px] lg:mx-[100px] 2xl:mx-[200px] mb-20">
      <h1 className="flex justify-center title">
        What others are saying about us!
      </h1>
      <div className="flex flex-col items-center md:flex-row md:justify-around">
        <EmblaCarousel />
      </div>
    </section>
  );
};

export default Testimonial;
