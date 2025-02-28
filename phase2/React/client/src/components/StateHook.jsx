import React, { useState } from "react";

const StateHook = () => {
  const [count, setCount] = useState(0);
  const [isToggled, setIsToggled] = useState(false); 

  function Increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function Toggle() {
    setIsToggled(!isToggled); 
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <h1>{isToggled ? "ON" : "OFF"}</h1> 
      <button onClick={Toggle}>Toggle</button>
    </>
  );
};

export default StateHook;
