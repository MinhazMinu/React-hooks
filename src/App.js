import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
// Context import
import Context from "./Components/Context/Context";
import UseRef from "./Components/UseRef/FocusInputUR";
import Navigation from "./Components/Navigation/Navigation";
import TimerUR2 from "./Components/UseRef/TimerUR2";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Counter></Counter>
            <Counter2></Counter2>
            <Counter3></Counter3>
            <Counter4></Counter4>
            <SummeryUseState></SummeryUseState>
          </Route>

          <Route path="/useState">
            <Counter></Counter>
            <Counter2></Counter2>
            <Counter3></Counter3>
            <Counter4></Counter4>
            <SummeryUseState></SummeryUseState>
          </Route>

          <Route path="/useEffect">
            <CounterUE></CounterUE>
            <CounterUE2></CounterUE2>
            <MouseUE3></MouseUE3>
            <MouseContainer></MouseContainer>
            <CounterUE5></CounterUE5>
            <DataFetchingUseEffect6></DataFetchingUseEffect6>
            <SearchPostByIdUseEffect7></SearchPostByIdUseEffect7>
          </Route>

          <Route path="/useContext">
            <Context></Context>
          </Route>

          <Route path="/useRef">
            <UseRef></UseRef>
            <TimerUR2></TimerUR2>
          </Route>
          <Route path="*">
            <Counter></Counter>
            <Counter2></Counter2>
            <Counter3></Counter3>
            <Counter4></Counter4>
            <SummeryUseState></SummeryUseState>
          </Route>
        </Switch>
      </Router>

      {/* <Counter></Counter>
      <Counter2></Counter2>
      <Counter3></Counter3>
      <Counter4></Counter4>
      <SummeryUseState></SummeryUseState> */}
      {/* UseEffect */}
      {/* <CounterUE></CounterUE>
      <CounterUE2></CounterUE2>
      <MouseUE3></MouseUE3>
      <MouseContainer></MouseContainer>
      <CounterUE5></CounterUE5>
      <DataFetchingUseEffect6></DataFetchingUseEffect6>
      <SearchPostByIdUseEffect7></SearchPostByIdUseEffect7> */}
      {/* COntext */}
      {/* <Context></Context> */}
      {/* UseRef */}
      {/* <UseRef></UseRef> */}
    </div>
  );
}

export default App;
