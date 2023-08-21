"use client";

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import moment from "moment/moment";

const Form = () => {
  const router = useRouter();

  // Config variables
  const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
  const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;
  const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
  const GOOGLE_SERVICE_PRIVATE_KEY =
    process.env.GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, "\n");

  const SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.file",
  ];

  const jwt = new JWT({
    email: GOOGLE_CLIENT_EMAIL,
    key: GOOGLE_SERVICE_PRIVATE_KEY,
    scopes: SCOPES,
  });

  // GoogleSpreadsheet Initialize
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID, jwt);

  const appendSpreadsheet = async (row) => {
    try {
      // loads document properties and worksheets
      await doc.loadInfo();
      console.log(doc.title);

      const sheet = doc.sheetsByIndex[0];
      await sheet.addRow(row);
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const time = moment().format("MMMM Do YYYY, h:mm:ss a");

  async function onSubmit(values) {
    if (values.name && values.email && values.number) {
      const newRow = {
        Name: values.name,
        Email: values.email,
        Phone: values.number,
        Title: values.title,
        Buying: values.buy,
        Budget: values.budget,
        Trade: values.trade,
        Credit: values.credit,
        Employment: values.employment,
        Income: values.income,
        Duration: values.duration,
        Location: values.location,
        Timestamp: time,
      };

      appendSpreadsheet(newRow);
      router.push("/success");
    } else alert("Submit failed. Check Name, Email, & Phone");
  }

  const [step, setStep] = useState(1);

  function NextStep(currStep) {
    step < 3 && setStep(currStep + 1);
  }

  function PrevStep(currStep) {
    if (step > 0) {
      setStep(currStep - 1);
    }
  }

  return (
    <div className="max-w-screen-xl mb-5 md:mb-20">
      <h2 className="title text-center">Application Form</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-[80%] mx-auto"
      >
        {/* ----------------------Step 1--------------- */}
        {step === 1 && (
          <div className="card">
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 w-[33%] rounded-full"></div>
            </div>

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
                minLength: 6,
                maxLength: 15,
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
              <button className="button" onClick={() => NextStep(step)}>
                Next
              </button>
            </div>
          </div>
        )}

        {/* ----------------------Step 2--------------- */}
        {step === 2 && (
          <div className="card">
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 w-[66%] rounded-full"></div>
            </div>
            <label className="block" htmlFor="buy">
              What are you looking to buy?
            </label>

            <select className="form" id="buy" {...register("buy")}>
              <option value="Car">Car</option>
              <option value="Truck">Truck</option>
              <option value="SUV">SUV</option>
              <option value="Van">Van</option>
              <option value="RV/Trailer">RV/Trailer</option>
              <option value="Motorcycle">Motorcycle</option>
            </select>

            <label className="block" htmlFor="budget">
              What is your budget per month?
            </label>

            <select className="form" id="budget" {...register("budget")}>
              <option value="$100-$500">$100-$500</option>
              <option value="$500-$1000">$500-$1000</option>
              <option value="$1000-$1500">$1000-$1500</option>
              <option value="$1600-$2000">$1600-$2000</option>
            </select>

            <label className="block" htmlFor="trade">
              Do you have a trade-in?
            </label>

            <select className="form" id="trade" {...register("trade")}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <label className="block" htmlFor="credit">
              What is your credit score?
            </label>
            <select className="form" id="credit" {...register("credit")}>
              <option value="0-500">0-500</option>
              <option value="501-750">501-750</option>
              <option value="751-900">751-900</option>
            </select>
            <div className="text-center">
              <button className="button mr-3" onClick={() => PrevStep(step)}>
                Previous
              </button>
              <button className="button" onClick={() => NextStep(step)}>
                Next
              </button>
            </div>
          </div>
        )}

        {/* ----------------------Step 3--------------- */}
        {step === 3 && (
          <div className="card">
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 w-[100%] rounded-full"></div>
            </div>
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
              <button className="button mr-3" onClick={() => PrevStep(step)}>
                Previous
              </button>
              <button type="submit" className="button">
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
