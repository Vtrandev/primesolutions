"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import axios from "axios";

function TestimonialCard({ testimonial, name }) {
  return (
    <>
      <p className="mb-3">{testimonial}</p>
      <h2 className="font-semibold">{name}</h2>
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
                className="embla__slide p-5 border-2 border-black drop-shadow-lg text-[#1F1F1F]"
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
        <button className="embla__prev m-4" onClick={scrollPrev}>
          <ChevronDoubleLeftIcon className="w-6 h-6" />
        </button>
        <button className="embla__next m-4" onClick={scrollNext}>
          <ChevronDoubleRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <section className="mx-5 md:mx-[50px] lg:mx-[100px] 2xl:mx-[200px] mb-20">
      <h2 className="flex justify-center title">
        What others are saying about us!
      </h2>
      <div className="flex flex-col items-center md:flex-row md:justify-around">
        <EmblaCarousel />
      </div>
    </section>
  );
};

export default Testimonial;
