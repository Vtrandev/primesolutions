import React from "react";

const Formpage3 = ({ register, PrevStep }) => {
  return (
    <div className="card">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 w-[100%] rounded-full"></div>
      </div>

      {/* Form */}
      <label className="block" htmlFor="employment">
        What is your employment?
      </label>
      <input
        className="form"
        type="text"
        placeholder="Employed, self-employed, etc"
        id="employment"
        {...register("employment", {})}
      />

      <label className="block" htmlFor="income">
        What is your current monthly gross income?
      </label>
      <input
        className="form"
        type="number"
        placeholder="Current monthly gross income"
        id="income"
        {...register("income", {})}
      />

      <label className="block" htmlFor="duration">
        How long have you been working?
      </label>
      <input
        className="form"
        type="text"
        placeholder="Length of work"
        id="duration"
        {...register("duration", {})}
      />

      <label className="block" htmlFor="location">
        Where are you located? (City, Province)
      </label>
      <input
        className="form"
        type="text"
        placeholder="City, Province"
        id="location"
        {...register("location", {})}
      />
      <div className="text-center">
        <button className="button mr-3" onClick={() => PrevStep()}>
          Previous
        </button>
        <button type="submit" className="button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Formpage3;
