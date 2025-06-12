import React from "react";
import { useState } from "react";

const PracticeState = () => {
  const [color, setcolor] = useState("white");
  const [student, setStudent] = useState({
    lastName: "Okeyemi",
    firstName: "Dolapo",
    gender: "male",
    age: 23,
    occupation: "tiler",
  });
  const changeColor = () => {
    setcolor("Blue");
  };

  const changeProfile = () => {
    setStudent({
      lastName: "Ighalo",
      firstName: "Rachael",
      gender: "female",
      age: 15,
      occupation: "student",
    });
  };

  const changeAge = () => {
    setStudent((prev) => {
      return { ...prev, age: 29 };
    });
  };
  return (
    <div style={{ textAlign: "center", paddingBottom: "55px" }}>
      <p>Sedorf Favorite color is {color}</p>
      <button onClick={changeColor}>Change color</button>
      <button onClick={() => setcolor("White")}>
        Change color
      </button> <br /> <br />
      <h1>About</h1>
      <p>
        My name is {student.firstName} {student.lastName}. I am a{" "}
        {student.gender} and {student.age} years. I am a {student.occupation}
      </p>
      <button
        onClick={() =>
          setStudent({
            lastName: "Okeyemi",
            firstName: "Dolapo",
            gender: "male",
            age: 23,
            occupation: "tiler",
          })
        }
      >
        Prev
      </button>
      <button onClick={changeProfile}>Change Profile</button>
      <button onClick={changeAge}>Change age</button>
    </div>
  );
};

export default PracticeState;
