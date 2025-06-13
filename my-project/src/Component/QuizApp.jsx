import React, { useState, useEffect } from "react";

const QuizApp = () => {
  const questions = [
    { id: 1, text: "What is 2+2?", options: ["3", "4", "5"], answer: "4" },
    {
      id: 2,
      text: "Capital of France?",
      options: ["Paris", "London", "Berlin"],
      answer: "Paris",
    },
  ];
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizEnded, setIsQuizEnded] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (isQuizStarted && !isQuizEnded && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleSubmit();
    }
  }, [isQuizStarted, isQuizEnded, timeLeft]);

  const startQuiz = () => setIsQuizStarted(true);

  const handleAnswer = (option) => {
    setAnswers({ ...answers, [currentQuestion]: option });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.answer) newScore++;
    });
    setScore(newScore);
    setIsQuizEnded(true);
  };

  const restartQuiz = () => {
    setIsQuizStarted(false);
    setIsQuizEnded(false);
    setCurrentQuestion(0);
    setAnswers({});
    setScore(0);
    setTimeLeft(30);
  };

  return (
    <div className="text-center text-2xl text-gray-600">
      {!isQuizStarted ? (
        <div>
          <h1>Welcome to the Quiz!</h1>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={startQuiz}
          >
            Start Quiz
          </button>
        </div>
      ) : !isQuizEnded ? (
        <div>
          <p>Time Left: {timeLeft}s</p>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].text}</p>
          <div className="flex flex-col items-center">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`m-2 p-2 rounded ${
                  answers[currentQuestion] === option
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="mt-4">
            <button
              className="bg-gray-600 text-white px-4 py-2 rounded mx-2"
              onClick={handlePrev}
              disabled={currentQuestion === 0}
            >
              Prev
            </button>
            <button
              className="bg-gray-600 text-white px-4 py-2 rounded mx-2"
              onClick={handleNext}
              disabled={currentQuestion === questions.length - 1}
            >
              Next
            </button>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded mx-2"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1>Quiz Ended!</h1>
          <p>
            Your Score: {score} / {questions.length}
          </p>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={restartQuiz}
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
