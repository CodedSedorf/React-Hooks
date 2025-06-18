import React, { useState } from "react";
import PracticeState from "./Component/UseState/PracticeState";
import Signup from "./Component/UseState/Signup";
import QuizApp from "./Component/QuizApp";
import Practice from "./Component/UseRef/Practice";

const App = () => {
  const [color, setcolor] = useState("Red");
  //Instead of declaring states differently use object as written below after line 9
  // const [brand, setbrand] = useState("CyberTruck");
  // const [model, setmodel] = useState("Tesla");
  // const [year, setyear] = useState("2024");
  // const [colorCar, setcolorCar] = useState("black");

  //Object
  const [carDetails, setcarDetails] = useState({
    brand: "CyberTruck",
    model: "Tesla",
    year: "2024",
    carColor: "Black",
  });

  //Function for method2
  const changeColor = () => {
    setcolor("Yellow");
  };

  //update carColor in the state object
  const updateColor = () => {
    setcarDetails((prev) => {
      return { ...prev, carColor: "rebecapurple" };
    });
  };

  return (
    <>
      <Practice />
      <div
        style={{
          textAlign: "center",
          paddingTop: "55px",
          paddingBottom: "222px",
        }}
      >
        <h1>My favorite color is {color}!</h1>
        {/* ..........Method1: Using a callback function inside the button.............. */}
        <button onClick={() => setcolor("Blue")}>Change color</button>
        {/* .......Creating a vanilla function.......... */}
        <button
          className="text-white bg-blue-500 rounded-md px-4 py-2"
          onClick={changeColor}
        >
          Change Color
        </button>
        <h1>Car: {carDetails.brand}</h1>
        <h2>
          It is a {carDetails.carColor} {carDetails.model} model{" "}
          {carDetails.year} {carDetails.brand}
        </h2>
        <button
          onClick={() =>
            setcarDetails({
              brand: "Model Y",
              model: "Tesla",
              year: "2027",
              carColor: "White",
            })
          }
        >
          Update states
        </button>
        <br />
        <button onClick={updateColor}>Update color</button>
      </div>

      <PracticeState />
      <Signup />
      <QuizApp />
    </>
  );
};

export default App;
