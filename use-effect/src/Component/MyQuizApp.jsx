import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";

const MyQuizApp = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-[rgba(0,0,0,0.1)]">
      <h1 className="text-5xl text-center font-mono font-extrabold mb-4">
        Hello
      </h1>
      {/* ........Quiiz landingpage.......... */}

      {/* <div className="flex flex-col items-center text-white w-[30%] h-[70vh] bg-[rgba(0,0,0,0.3)] ml-[500px] shadow-md rounded-md">
        <div className=" flex gap-4 items-center mb-6">
          <h1 className="text-3xl font-mono font-medium ">
            Mini Quiz <br /> App
          </h1>
          <HiOutlineLightBulb className="text-yellow-500 text-[55px]" />
        </div>
        <p className="text-sm text-center font-mono font-medium mb-2">
          Test your knowledge in seconds
        </p>
        <button className="bg-blue-500 rounded-md text-white text-sm px-24 py-4 cursor-pointer my-4">
          Start Quiz
        </button>
        <button className=" text-white text-sm px-20 py-4 cursor-pointer my-4">
          View High Scores
        </button>
        <button className=" text-white text-sm px-24 py-4 cursor-pointer my-4 capitalize">
          How to play
        </button>
      </div> */}

      {/* ........Quiz Page........... */}
      <div className="flex flex-col items-center text-white w-[60%] h-[70vh] bg-[rgba(0,0,0,0.3)] ml-[300px] shadow-md rounded-md">
        <div className="flex gap-40 mt-8">
          <h1 className="px-10 py-4 rounded-full text-white bg-blue-700 hover:bg-blue-400">
            Number 5 of 15
          </h1>
          <p className="px-5 py-4 rounded-full text-white bg-blue-700 hover:bg-blue-400">
            45
          </p>
        </div>
        <p className="pt-10 text-2xl text-center px-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
          enim inventore quibusdam.
        </p>
        <div className="flex gap-6 text-white bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.2)]">
          <button>A</button>
          <button>A</button>
          <button>A</button>
          <button>A</button>
        </div>
      </div>
    </div>
  );
};

export default MyQuizApp;
