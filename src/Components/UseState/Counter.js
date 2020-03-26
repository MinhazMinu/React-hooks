import React, { useState } from "react";

/* 
        Three Steps to use useState
        1. use functional component
        2. initialize initial value     
        3.use set function to set new state value 
    */

// 1. use functional component
const Counter = () => {
  // 2. initialize initial value
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>Counter</h4>
      <button className="btn btn-info" onClick={() => setCount(count + 1)}>
        Counter : {count}{" "}
      </button>
    </div>
  );
};

export default Counter;
