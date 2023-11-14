import React from "react";

const Formpage1 = ({ register, errors, NextStep }) => {
  return (
    <div className="card">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 w-[33%] rounded-full"></div>
      </div>

      {/* Form */}
      <label
        className={`block ${errors.name && "text-red-600"} `}
        htmlFor="name"
      >
        Name {errors.name && `(${errors.name.message})`}
      </label>
      <input
        className="form"
        type="text"
        placeholder="Name"
        id="name"
        {...register("name", {
          required: "Enter your name",
          maxLength: 80,
        })}
      />

      <label
        className={`block ${errors.email && "text-red-600"} `}
        htmlFor="email"
      >
        Email {errors.email && `(${errors.email.message})`}
      </label>
      <input
        className="form"
        type="text"
        placeholder="Email"
        id="email"
        {...register("email", {
          required: "Enter your email",
          pattern: /^\S+@\S+$/i,
        })}
      />

      <label
        className={`block ${errors.number && "text-red-600"} `}
        htmlFor="number"
      >
        Phone number {errors.number && `(${errors.number.message})`}
      </label>
      <input
        className="form"
        type="tel"
        id="number"
        placeholder="Mobile number"
        {...register("number", {
          required: "Enter your phone #",
          minLength: 10,
          maxLength: 11,
        })}
      />

      <label className="block" htmlFor="title">
        Title
      </label>

      <select
        className="form"
        id="title"
        {...register("title", { required: false })}
      >
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
        <option value="Other">Other</option>
      </select>
      <div className="text-center">
        <button className="button" onClick={() => NextStep()}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Formpage1;
