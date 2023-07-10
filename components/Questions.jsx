import React from "react";

function QuestionCard({ question, answer }) {
  return (
    <div className="w-[80%] mb-5 p-5 border-2 border-black drop-shadow-lg">
      <h2 className="font-bold mb-2">{question}</h2>
      <p>{answer}</p>
    </div>
  );
}

const Questions = () => {
  return (
    <section className="mx-2 lg:mx-12 2xl:mx-16 mb-20">
      <h1 className="flex justify-center items-center title">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-col items-center">
        <QuestionCard
          question="What is a loan?"
          answer="A loan is a sum of money borrowed from a lender with the agreement that
        it will be repaid, typically with interest, over a specified period of
        time."
        />
        <QuestionCard
          question="What types of loans are available?"
          answer="There are various types of loans, including personal loans, home
          mortgages, auto loans, student loans, business loans, and more. Each
          type serves a specific purpose and has its own terms and conditions."
        />
        <QuestionCard
          question="How do I qualify for a loan?"
          answer="Loan eligibility criteria vary depending on the type of loan and the
          lender's requirements. Generally, lenders consider factors such as
          credit history, income, employment stability, and debt-to-income
          ratio when determining loan eligibility."
        />
      </div>
    </section>
  );
};

export default Questions;
