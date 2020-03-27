// how to use state based on previous state value

import React, { useState } from "react";

const Counter2 = () => {
  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      //   setCount(count + 1);   though we loop through 5 time count value is increasing by only 1
      // to avoid this , we use another function t

      setCount(prevValue => prevValue + 1);
      /**
       * wHEN WE HAVE TO UPDATE STATE BASED ON PREVIOUS VALUE,
       * PASSING A FUNCTION TO  setState FUNCTION
       */
    }
  };
  const [count, setCount] = useState(0);
  return (
    <div className="container border m-5 p-5">
      <h4>How to use state based on previous state value</h4>
      <h5>Count : {count} </h5>
      {/* state based on previous state value but "its not safe" */}
      <button
        className="btn btn-danger m-2"
        onClick={() => setCount(count - 1)} //safe option  setCount(prevValue => prevValue - 1);
      >
        Decrement
      </button>
      <button className="btn btn-warning m-2 " onClick={() => setCount(0)}>
        Reset
      </button>
      {/* state based on previous state value but "its not safe" */}
      <button
        className="btn btn-success m-2"
        onClick={() => setCount(count + 1)} //safe option  setCount(prevValue => prevValue + 1);
      >
        Increment
      </button>

      {/* Lets see why its not safe to change  state value "directly" based on 
      previous state value
      => let assume we wat to increment Counter by 5 , so we declare a function to update counter value 5 time
      and set it to counter*/}
      <br />
      <button className="btn btn-success m-2" onClick={incrementByFive}>
        Increment by 5
      </button>
    </div>
  );
};

export default Counter2;
