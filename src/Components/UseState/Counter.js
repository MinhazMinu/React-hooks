// 2.import { useState } from "react"
import React, { useState } from "react";

/* 
        Four Steps to use useState
        1. use functional component
        2.import { useState } from "react"
        3. initialize initial value     
        4.use "setState" function to set new state value 
    */

// 1. use functional component
const Counter = () => {
  // 3. initialize initial value
  const [count, setCount] = useState(0);
  return (
    <div className="container border m-5 p-5">
      <h4>Counter</h4>
      {/* 4.use "setState" function to set new state value */}
      <button className="btn btn-info" onClick={() => setCount(count + 1)}>
        Counter : {count}{" "}
      </button>
    </div>
  );
};

export default Counter;
