import React from "react";

const Questions = () => {
  return (
    <section className="mx-[50px] lg:mx-[100px] 2xl:mx-[200px] mb-20">
      <h1 className="flex justify-center items-center title">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-col">
        <div className="mb-5 border-2 border-black p-10 drop-shadow-lg">
          <h2 className="font-bold mb-2">What is a loan?</h2>
          <p>
            A loan is a sum of money borrowed from a lender with the agreement
            that it will be repaid, typically with interest, over a specified
            period of time.
          </p>
        </div>
        <div className="mb-5 border-2 border-black p-10 drop-shadow-lg">
          <h2 className="font-bold mb-2">What types of loans are available?</h2>
          <p>
            There are various types of loans, including personal loans, home
            mortgages, auto loans, student loans, business loans, and more. Each
            type serves a specific purpose and has its own terms and conditions.
          </p>
        </div>
        <div className="mb-5 border-2 border-black p-10 drop-shadow-lg">
          <h2 className="font-bold mb-2">How do I qualify for a loan?</h2>
          <p>
            Loan eligibility criteria vary depending on the type of loan and the
            lender's requirements. Generally, lenders consider factors such as
            credit history, income, employment stability, and debt-to-income
            ratio when determining loan eligibility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Questions;
