import React from "react";
import Radio from "../ui/Radio";

const Formpage2 = ({ register, PrevStep, NextStep }) => {
  return (
    <div className="card">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div className="bg-blue-600 h-full w-[66%] rounded-full"></div>
      </div>

      {/* Form */}

      <label className="block" htmlFor="buy">
        What are you looking to buy?
      </label>
      <div className="radio-tile-group">
        <Radio register={register} input="buy" choice="Car" />
        <Radio register={register} input="buy" choice="Truck" />
        <Radio register={register} input="buy" choice="Van" />
        <Radio register={register} input="buy" choice="SUV" />
        <Radio register={register} input="buy" choice="RV/Trailer" />
        <Radio register={register} input="buy" choice="Motorcycle" />
      </div>

      <label className="block" htmlFor="budget">
        What is your budget per month?
      </label>
      <div className="radio-tile-group">
        <Radio register={register} input="budget" choice="$100-$500" />
        <Radio register={register} input="budget" choice="$600-$1000" />
        <Radio register={register} input="budget" choice="$1100-$1500" />
        <Radio register={register} input="budget" choice="$1600-$2000" />
      </div>

      <label className="block" htmlFor="trade">
        Do you have a trade-in?
      </label>

      <div className="radio-tile-group">
        <Radio register={register} input="trade" choice="Yes" />
        <Radio register={register} input="trade" choice="No" />
      </div>

      <label className="block" htmlFor="credit">
        What is your credit score?
      </label>
      <div className="radio-tile-group">
        <Radio register={register} input="credit" choice="0-500" />
        <Radio register={register} input="credit" choice="501-750" />
        <Radio register={register} input="credit" choice="751-900" />
      </div>

      <div className="text-center">
        <button className="button mr-3" onClick={() => PrevStep()}>
          Previous
        </button>
        <button className="button" onClick={() => NextStep()}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Formpage2;
