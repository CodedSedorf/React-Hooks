import React from "react";
import { useState } from "react";

const Signup = () => {
  const [registerUser, setregisterUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    gender: "",
  });
  const [isSubmitted, setisSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setregisterUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setisSubmitted(true);
  };

  const reset = () => {
    setregisterUser({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      gender: "",
    });
    setisSubmitted(false);
  };

  const edit = () => {
    setregisterUser({
      firstname: prompt("enter firstname"),
      lastname: prompt("enter lastname"),
      email: prompt("enter valid email"),
      password: prompt("enter new password"),
      gender: prompt("enter gender"),
    });
  };
  return (
    <>
      {!isSubmitted ? (
        <div className="">
          <form
            action=""
            className="flex flex-col mb-40 text-center ml-72 leading-10"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Enter firstname"
              className="w-1/4 m-2 "
              value={registerUser.firstname}
              onChange={handleChange}
              name="firstname"
            />
            <input
              type="text"
              placeholder="Enter lastname"
              className="w-1/4 m-2"
              value={registerUser.lastname}
              onChange={handleChange}
              name="lastname"
            />
            <input
              type="email"
              placeholder="Enter email"
              className="w-1/4 m-2"
              value={registerUser.email}
              onChange={handleChange}
              name="email"
            />
            <input
              type="password"
              placeholder="Enter password"
              className="w-1/4 m-2"
              value={registerUser.password}
              onChange={handleChange}
              name="password"
            />
            <input
              type="text"
              placeholder="Enter gender"
              className="w-1/4 m-2"
              value={registerUser.gender}
              onChange={handleChange}
              name="gender"
            />
            <input
              type="submit"
              className="w-1/4 m-2 bg-blue-600 text-white cursor-pointer"
            />
          </form>
        </div>
      ) : (
        <div className="flex flex-col text-4xl text-yellow-600 mb-10 leading-snug">
          <h2>User Profile</h2>
          <h1>
            Hello {registerUser.firstname} {registerUser.lastname}
          </h1>
          <p>Gender: {registerUser.gender}</p>
          <p>Email: {registerUser.email}</p>
          <p>Password: {registerUser.password}</p>
          <div>
            <button
              className="text-white bg-blue-700 rounded-md cursor-pointer px-4 py-2 mx-2 gap-2"
              onClick={reset}
            >
              Reset
            </button>
            <button
              className="text-white bg-blue-700 rounded-md cursor-pointer px-4 py-2 mx-2 gap-2"
              onClick={edit}
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
