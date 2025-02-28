import React, { useState } from "react";

const StateHook = () => {
  const [count, setCount] = useState(0);
  const [Toggled, setToggled] = useState(false); 

  function Increment() {
    setCount(count + 1);
  }

  function Toggle() {
    setToggled(!Toggled); 
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <h1>{Toggled ? "ON" : "OFF"}</h1> 
      <button onClick={Toggle}>Toggle</button>
    </>
  );
};

export default StateHook;
