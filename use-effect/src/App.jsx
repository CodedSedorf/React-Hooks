import React from "react";
import { useState, useEffect } from "react";
import QuizApp from "../Components/QuizApp";

const App = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setcount((count) => count + 1);
    }, 2000);
  }, []);
  //In the useEffect when empty array wasn't added, the setTimout function keeps running. i.e, the counter keeps counting without stopping but once the empty array is added to the useEffect, the setTimeout function only run once. Once count is provided inside the array, the count value will be increasing every 2s.

  return (
    <>
      <div className="text-center text-4xl text-gray-400 font-bold font-monospace mb-20">
        Welcome to useEffect class
      </div>
      <p className="text-center text-4xl text-gray-400 font-bold font-monospace mb-20">
        I have counted {count} times
      </p>

      <QuizApp />
    </>
  );
};

export default App;
