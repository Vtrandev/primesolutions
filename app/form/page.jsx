import React from "react";

const Form = () => {
  return (
    <div className="max-w-screen-xl mx-auto ml-20 mb-20">
      <h1 className="title">Form</h1>
      <form action="">
        <h1>What are you looking to buy?</h1>
        <input type="text" className="border-2 border-black w-[460px]  xl:w-[800px] mb-4" />

        <h1>What is your budget?</h1>
        <input type="text" className="border-2 border-black w-[460px]  xl:w-[800px] mb-4" />

        <h1>Do you have a trade in?</h1>
        <input type="text" className="border-2 border-black w-[460px]  xl:w-[800px] mb-4" />

        <h1>What is your credit score?</h1>
        <input type="text" className="border-2 border-black w-[460px]  xl:w-[800px] mb-4" />

        <h1>Employment status?</h1>
        <input type="text" className="border-2 border-black w-[460px]  xl:w-[800px] mb-4" />

        <h1>Currently monthly gross income?</h1>
        <input type="text" className="border-2 border-black w-[460px]  xl:w-[800px] mb-4" />

        <h1> How long have you been working in your current role?</h1>
        <input type="text" className="border-2 border-black w-[460px]  xl:w-[800px] mb-4" />

        <h1>Where are you looking to purchase? (City, Province)</h1>
        <input type="text" className="border-2 border-black w-[460px]  xl:w-[800px] mb-4" />

        <h1>
          <button className="button">Submit</button>
        </h1>
      </form>
    </div>
  );
};

export default Form;
