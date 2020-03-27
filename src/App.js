import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Components/UseState/Counter";
import Counter2 from "./Components/UseState/Counter2";
import Counter3 from "./Components/UseState/Counter3";
import Counter4 from "./Components/UseState/Counter4";
import SummeryUseState from "./Components/UseState/SummeryUseState";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Counter2></Counter2>
      <Counter3></Counter3>
      <Counter4></Counter4>
      <SummeryUseState></SummeryUseState>
    </div>
  );
}

export default App;
