import React, { useState, useEffect } from "react";
/**
 * we Know useEffect  Executed after every randers of a component.
 * but now we want to run useEffect only after a specific element is change.
 * in our case, we want to run useEffect if and only if count change
 */

const CounterUE2 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `You Clicked ${count} time`;
    console.log(`You Clicked ${count} time`);
  }, [count]);
  /**
   * here [count] , meant useEffect run only if count change
   * N.B Passing an empty array [] mean useEffect run one time
   */
  return (
    <div className="container border m-5 p-5">
      <h4 className="mb-4">Conditionally Run UseEffect - Counter</h4>
      <div className="d-flex justify-content-center align-items-center">
        <div className="form-group col-md-3 mb-2">
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <button className="btn btn-info " onClick={() => setCount(count + 1)}>
          Counter : {count}{" "}
        </button>
      </div>
    </div>
  );
};

export default CounterUE2;
