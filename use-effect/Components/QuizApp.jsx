import React from "react";

const QuizApp = () => {
  const Questions = [
    {
      id: 1,
      question: "Who is the president of Nigeria?",
      options: ["Abubakar", "Tinubu", "Obi", "Sowore"],
      answer: "Tinubu",
    },
    {
      id: 2,
      question: "Who is known for hooligalism among these?",
      options: ["Abubakar", "Tinubu", "Obi", "Sowore"],
      answer: "Sowore",
    },
    {
      id: 3,
      question: "Who is the former governor of Anambra State?",
      options: ["Abubakar", "Tinubu", "Obi", "Sowore"],
      answer: "Obi",
    },
    {
      id: 4,
      question: "Who was once the vice president of Nigeria?",
      options: ["Abubakar", "Tinubu", "Obi", "Sowore"],
      answer: "Atiku",
    },
  ];
  return (
    <>
      <div className="w-1/2 text-center flex flex-col justify-center leading-snug mx-auto h-screen bg-zinc-950">
        <h1>Welcome to to Sedorf Quiz Test</h1>
        <p>Click the button below to start the exam</p>
        <button>Start</button>
      </div>
    </>
  );
};

export default QuizApp;
