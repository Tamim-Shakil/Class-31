import { useState } from "react";

export default function App() {
  // const [isSent, setIsSent] = useState(0/""/{}/[]/true);
  const [isPresent, setIsPresent] = useState(false);
  const [message, setMessage] = useState("Hi..");

  if (isPresent) {
    return (
      <>
        <h1>Your message is on its way!</h1>
      </>
    );
  }

  return (
    <>
      {/* <h2>Sorry😢 No data found!</h2> */}
      {/* {isPresent ? (
        <h2>Data is present in the state</h2>
      ) : (
        <form>
          <textarea placeholder="Message" />
          <button type="submit">Send</button>
        </form>
      )} */}

      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          // console.log("test");
          setIsPresent(true);
        }}
      >
        <textarea
         placeholder="Message" 
        value={message} 
        onChange={(e) => {
        setMessage(e.target.value);
        console.log(message);
        }}
        />
        <button type="submit">Send</button>
      </form> */}

      <Counter />
    </>
  );
}

function Counter() {
  const [number, setNumber] = useState(10);

  return (
    <>
      <h2>{number}</h2>
      <button
        onClick={() => {
          // setNumber(() => number + 4);
          // setNumber(() => number + 1);
          // setNumber(() => number + 5);

          setNumber((v) => v + 1);
          setNumber((v) => v + 1);
          setNumber((v) => v + 1);
        }}
      >
        Add Number
      </button>
    </>
  );
}
