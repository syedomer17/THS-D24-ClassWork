import React from "react";
import "./App.css";

function App() {
  let fruits = ['mango','apple','banana']
  return (
    <>
    <h1>Hello React.js</h1>
    <p>{fruits.map((ele)=> <h1 key={ele}>{ele}</h1>)}</p>
    </>
  )
}

export default App