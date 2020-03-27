import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Components/UseState/Counter";
import Counter2 from "./Components/UseState/Counter2";
import Counter3 from "./Components/UseState/Counter3";
import Counter4 from "./Components/UseState/Counter4";
import SummeryUseState from "./Components/UseState/SummeryUseState";
// UseEffect import
import CounterUE from "./Components/UseEffect/CounterUE";
import CounterUE2 from "./Components/UseEffect/CounterUE2";
import MouseUE3 from "./Components/UseEffect/MouseUE3";
import MouseContainer from "./Components/UseEffect/MouseContainer4";
import CounterUE5 from "./Components/UseEffect/CounterUE5";
import DataFetchingUseEffect6 from "./Components/UseEffect/DataFetchingUseEffect6";
import SearchPostByIdUseEffect7 from "./Components/UseEffect/SearchPostByIdUseEffect7";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Counter2></Counter2>
      <Counter3></Counter3>
      <Counter4></Counter4>
      <SummeryUseState></SummeryUseState>
      {/* UseEffect */}
      <CounterUE></CounterUE>
      <CounterUE2></CounterUE2>
      {/* <MouseUE3></MouseUE3> */}
      <MouseContainer></MouseContainer>
      <CounterUE5></CounterUE5>
      <DataFetchingUseEffect6></DataFetchingUseEffect6>
      <SearchPostByIdUseEffect7></SearchPostByIdUseEffect7>
    </div>
  );
}

export default App;
