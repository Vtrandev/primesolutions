"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import moment from "moment/moment";
import Formpage1 from "@/components/form/Formpage1";
import Formpage3 from "@/components/form/Formpage3";
import Formpage2 from "@/components/form/Formpage2";

const Form = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);

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
    } else {
      alert("Submit failed. Check Name, Email, & Phone");
      setStep(1);
    }
  }

  async function Capture(values) {
    if (values.name && values.email && values.number) {
      const newRow = {
        Name: values.name,
        Email: values.email,
        Phone: values.number,
        Title: values.title,
        Timestamp: time,
      };
      appendSpreadsheet(newRow);
      NextStep();
    } else {
      alert("Check Name, Email, & Phone for errors");
      setStep(1)
    }
  }

  function NextStep() {
    step < 3 && setStep(step + 1);
  }

  function PrevStep() {
    step > 1 && setStep(step - 1);
  }

  return (
    <div className="flex flex-col items-center mb-6 md:mb-16">
      <h2 className="title text-center">Application Form</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full lg:w-[80%]"
      >
        {/* ----------------------Step 1--------------- */}
        {step === 1 && (
          <Formpage1
            register={register}
            errors={errors}
            handleSubmit={handleSubmit(Capture)}
          />
        )}

        {/* ----------------------Step 2--------------- */}
        {step === 2 && (
          <Formpage2
            register={register}
            PrevStep={PrevStep}
            NextStep={NextStep}
          />
        )}

        {/* ----------------------Step 3--------------- */}
        {step === 3 && <Formpage3 register={register} PrevStep={PrevStep} />}
      </form>
    </div>
  );
};

export default Form;
