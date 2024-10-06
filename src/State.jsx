/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

function State() {
  // function handleClick() {
  //   alert("Hello, you clicked me");
  //   console.log("Hello, you clicked me");
  // }
  const [count, setCount] = useState(10);
  // const [value, setValue] = useState("Click Me");
  const [color, setColor] = useState("blue");
  function handleCount() {
    setCount(count + 3);
  }

  function handleColor() {
    setColor("red");
  }

  return (
    <>
      {/* <button
        onClick={() => {
          alert("Hello, you clicked me");
        }}
      >
        I don&apos;t do anything
      </button> */}
      {/* <button onClick={handleClick}>I don&apos;t do anything</button> */}
      {/* <AlertBtn message={"Jawan"}> Play Movie</AlertBtn>
      <AlertBtn message={"GOT"}> Play Series</AlertBtn> */}
      <button onClick={handleCount}>Click Me {count}</button>
      <h2>{count}</h2>
      <button onClick={handleColor}>CHANGE COLOR</button>
      <div className="box" style={{ backgroundColor: color }}></div>
    </>
  );
}

export default State;
function AlertBtn({ message, children }) {
  return (
    <button
      onClick={() => {
        alert(`Hello, ${message} is loading coming soon!`);
      }}
    >
      {children}
    </button>
  );
}
