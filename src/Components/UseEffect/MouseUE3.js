import React, { useState, useEffect } from "react";
/**
 * we Know useEffect  Executed after every randers of a component.
 * but now we want to run useEffect only one time
 */

const MouseUE3 = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMouseMove = e => {
    console.log("Mouse move");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("Called useEffect");

    window.addEventListener("mousemove", logMouseMove);
  }, []);
  /**
   * here [count] , meant useEffect run only if count change
   * N.B Passing an empty array [] mean useEffect run one time
   */
  return (
    <div className="container border m-5 p-5">
      <h4 className="mb-4">Run UseEffect only 1 Time</h4>
      <h5>
        Mouse Position x,y = {x} , {y}
        <p>
          <small className="text-warning">*Open console </small>
        </p>
      </h5>
    </div>
  );
};

export default MouseUE3;
