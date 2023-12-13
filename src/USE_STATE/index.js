//using functional components usestates
import React, { useState } from "react";

function USE_STATE() {
  const [count, setCount] = useState(0);
  const HandleIncrement = () => {
    setCount((Prevcount) => Prevcount + 1);
    setCount((Prevcount) => Prevcount + 1);
    setCount((Prevcount) => Prevcount + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={HandleIncrement}>increase</button>
    </div>
  );
}

export default USE_STATE;
