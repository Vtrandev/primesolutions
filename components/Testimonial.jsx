"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import axios from "axios";

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
  const [data, setData] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/api/testimonial");
      setData(data);
    }
    fetchData();
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla w-[80%]" ref={emblaRef}>
      <div className="embla__container">
        {data
          ? data.map((testimonial, id) => (
              <div
                className="embla__slide p-5 border-2 border-black drop-shadow-lg"
                key={id}
              >
                <TestimonialCard
                  testimonial={testimonial.testimonial}
                  name={testimonial.name}
                />
              </div>
            ))
          : null}
      </div>
      <div className="flex justify-center">
        <button className="embla__prev m-2" onClick={scrollPrev}>
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button className="embla__next m-2" onClick={scrollNext}>
          <ChevronRightIcon className="w-6 h-6" />
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
