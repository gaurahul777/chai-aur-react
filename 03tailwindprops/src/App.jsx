import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    name: "hitesh",
    age: 21,
  };
  let newArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl mb-4">
        tailwind test
      </h1>
      <Card
        username="chaicode"
        someObj={myObj}
        someObje={newArr}
        btnText="click me"
      />
      <Card username="rahul" btnText="visit me" />
      <Card/>
    </>
  );
}

export default App;
