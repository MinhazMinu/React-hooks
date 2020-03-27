import React, { useState, useEffect } from "react";
/**
 * We want to Change the PageTitle of The browser tab ,
 *  whenEver we click on the counter Button.
 * Todo so, First implement the Counter Button and
 * as a Side effect of that counter value change, we useEffect To perform side effect.
 * in our case Changing the page Title
 */

const CounterUE = () => {
  const [count, setCount] = useState(0);

  //useEffect passes a function as arguments
  //this function get Executed after every randers of a component
  useEffect(() => {
    document.title = `You Clicked ${count} time`;
  });
  return (
    <div className="container border m-5 p-5">
      <h4 className="mb-4">UseEffect - Counter</h4>
      <button className="btn btn-info" onClick={() => setCount(count + 1)}>
        Counter : {count}{" "}
      </button>
    </div>
  );
};

export default CounterUE;
