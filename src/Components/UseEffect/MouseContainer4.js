import React, { useState, useEffect } from "react";

const MouseContainer = () => {
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
    return () => {
      console.log("Component Unmounted");
      window.removeEventListener("mousemove", logMouseMove);
    };
  }, []);

  const [display, setDisplay] = useState(true);

  return (
    <div className="container border m-5 p-5">
      <h6>This Display will Toggle</h6>

      <button className="btn btn-success" onClick={() => setDisplay(!display)}>
        <span>Toggle Mouse Position display</span>
      </button>

      {display && (
        <div>
          <h4 className="mb-4">CleanUp UseEffect</h4>
          <h5>
            Mouse Position x,y = {x} , {y}
            <p>
              <small className="text-warning">*Open console </small>
            </p>
          </h5>
        </div>
      )}
    </div>
  );
};

export default MouseContainer;
