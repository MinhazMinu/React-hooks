import React, { useState, useEffect } from "react";

const CounterUE5 = () => {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  //   if you think dependency array is a way to specify when to r run a an effect ,you r going to in problem.should be though be
  return (
    <div className="container border m-5 p-5">
      <h4>Auto increment {count} </h4>
    </div>
  );
};

export default CounterUE5;
