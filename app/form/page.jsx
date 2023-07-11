"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from 'google-auth-library'

const Form = () => {
  const router = useRouter();

  // Config variables
  const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;

  const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;

  const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;

  const GOOGLE_SERVICE_PRIVATE_KEY = process.env.GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n');

  const SCOPES = [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive.file',
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
      // await doc.useServiceAccountAuth({
      //   client_email: GOOGLE_CLIENT_EMAIL,
      //   private_key: GOOGLE_SERVICE_PRIVATE_KEY
      // });      

      // loads document properties and worksheets
      await doc.loadInfo();

      console.log(doc.title)

  
      const sheet = doc.sheetsByIndex[0];
      await sheet.addRow(row);

    } catch (e) {
      console.error('Error: ', e);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(values) {
    console.log(values.name);

    const newRow = {
      Name: values.name,
      Email: values.email,
      Phone: values.number,
      Title: values.title,
      Buying: values.buy,
      Budget: values.budget,
      Trade: values.trade,
    }

    appendSpreadsheet(newRow)


    router.push("/success");
  }

  return (
    <div className="max-w-screen-xl mx-auto ml-5 md:ml-28 mb-5 md:mb-20">
      <h1 className="title">Application Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[80%]">
        <label className="block">
          Name {errors.name && `(${errors.name.message})`}
        </label>
        <input
          className="form"
          type="text"
          placeholder="Name"
          {...register("name", { required: false, maxLength: 80 })}
        />

        <label className="block">Email</label>
        <input
          className="form"
          type="text"
          placeholder="Email"
          {...register("email", { required: false, pattern: /^\S+@\S+$/i })}
        />

        <label className="block">Phone number</label>
        <input
          className="form"
          type="tel"
          placeholder="Mobile number"
          {...register("number", {
            required: false,
            minLength: 6,
            maxLength: 12,
          })}
        />

        <label className="block">Title</label>

        <select className="form" {...register("title", { required: false })}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>

        <label className="block">What are you looking to buy?</label>

        <select className="form" {...register("buy")}>
          <option value="Car">Car</option>
          <option value="Truck">Truck</option>
          <option value="SUV">SUV</option>
          <option value="Van">Van</option>
          <option value="RV/Trailer">RV/Trailer</option>
          <option value="Motorcycle">Motorcycle</option>
        </select>

        <label className="block">What is your budget per month?</label>

        <select className="form" {...register("budget")}>
          <option value="$100-$500">$100-$500</option>
          <option value="$500-$1000">$500-$1000</option>
          <option value="$1000-$1500">$1000-$1500</option>
          <option value="$1600-$2000">$1600-$2000</option>
        </select>

        <label className="block">Do you have a trade-in?</label>

        <select className="form" {...register("trade")}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {/* <FormCard question="What is your credit score?" />
        <FormCard question="Employment status?" />
        <FormCard question="Currently monthly gross income?" />
        <FormCard question="How long have you been working in your current role?" />
        <FormCard question="Where are you looking to purchase? (City, Province)" /> */}

        <div>
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
