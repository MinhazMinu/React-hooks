import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Components/UseState/Counter";
import Counter2 from "./Components/UseState/Counter2";
import Counter3 from "./Components/UseState/Counter3";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Counter2></Counter2>
      <Counter3></Counter3>
    </div>
  );
}

export default App;
