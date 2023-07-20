"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

function QuestionCard({ question, answer }) {
  const [openQuestion, setOpenQuestion] = useState(false);

  return (
    <div className="text-[#1F1F1F] mb-5 p-5 border-2 w-[100%] md:w-[50%] border-black drop-shadow-lg">
      <button
        className="font-bold mb-2 w-full hover:bg-slate-100"
        onClick={() => setOpenQuestion(!openQuestion)}
      >
        {question}
      </button>
      <p className={`${openQuestion ? "flex" : "hidden"}`}>{answer}</p>
    </div>
  );
}

const Questions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function dataFetch() {
      const { data } = await axios.get("/api/questions");
      setQuestions(data);
    }
    dataFetch();
  }, []);

  return (
    <section className="mx-2 lg:mx-12 2xl:mx-16 mb-20">
      <h2 className="flex justify-center items-center title">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-row flex-wrap flex-grow">
        {questions &&
          questions.map((data) => (
            <QuestionCard question={data.question} answer={data.answer} />
          ))}
      </div>
    </section>
  );
};

export default Questions;
