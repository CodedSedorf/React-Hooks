import React, { useEffect, useState } from "react";

const Practice = () => {
  const [value, setvalue] = useState(0);
  const count = useRef(0);

  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => setvalue((prev) => prev - 1)}>Decrease</button>
      <button onClick={() => setvalue((prev) => prev + 1)}>Increase</button>
      <h1>Render Count: {count}</h1>
    </>
  );
};

export default Practice;
