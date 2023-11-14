import Link from "next/link";
import React from "react";

const Layout = ({ number, firstParagraph, secondParagraph, button }) => {
  return (
    <>
      <h1 className="title">Step {number}</h1>
      <p className="m-4 w-[80%] lg:w-[50%]">
        {firstParagraph}
        <br />
        {secondParagraph}
      </p>
      <button className="button m-6">
        <Link href="/form">{button}</Link>
      </button>
    </>
  );
};

const StepProcess = () => {
  return (
    <section className="mx-5 md:mx-[50px] lg:mx-[100px] 2xl:mx-[200px] mb-20">
      <div className="flex flex-col items-start">
        <Layout
          number={"1: Submit your Application"}
          firstParagraph={
            "The application process could take less than two minutes to complete."
          }
          secondParagraph={
            "Our car loan application is 100% free, no SIN required, and no obligation."
          }
          button={"Get Started"}
        />
      </div>
      <div className="flex flex-col items-end">
        <Layout
          number={"2: Get approved"}
          firstParagraph={
            "Once you submit your application, we will be able to connect you to a suitable partner within our extensive network of dealerships across Canada who can help you regardless of your financial situation"
          }
          button={"Get Approved"}
        />
      </div>
      <div className="flex flex-col items-start">
        <Layout
          number={"3: Drive"}
          firstParagraph={
            "This could be you, driving away in a new car. People have been able to get on the road in less than 48 hours."
          }
          secondParagraph={"What are you waiting for?"}
          button={"Drive Away"}
        />
      </div>
    </section>
  );
};

export default StepProcess;
