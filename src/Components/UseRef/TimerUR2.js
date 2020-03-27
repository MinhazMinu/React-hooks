/**
 * Although useRef Can hold a reference of a Dom node using ref={} attribute,
 * it can also hold any "Mutable" Value and it did not causing any additional render when value changes
 */

// import React, { useState, useEffect, useRef } from "react";

// const TimerUR2 = () => {
//     const interValRef = useRef(initialValue)
//   const [timer, setTimer] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimer(prevTimer => prevTimer + 1);
//     }, 1000);
//     return () => {
//       clearInterval(interval);
//     };
//   }, []);
//   return (
//     <div className="container border m-5 p-5">
//         <h4>UseRef to Clear </h4>
//       Timer => <span className="bg-warning text-danger border">{timer}</span>
//     </div>
//   );
// };

// export default TimerUR2;

import React, { useState, useEffect, useRef } from "react";

const TimerUR2 = () => {
  const interValRef = useRef();
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    interValRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(interValRef.current);
    };
  }, []);
  return (
    <div className="container border m-5 p-5">
      <h4>UseRef to perform UseEffect=>return Function on Button click </h4>
      <h5 className="m-5">
        Timer =>{" "}
        <span className="bg-warning text-danger border  p-3 rounded">
          {timer}
        </span>
      </h5>
      <button
        className="btn btn-sm btn-primary"
        onClick={() => clearInterval(interValRef.current)}
      >
        Clear Hook Timer{" "}
      </button>
    </div>
  );
};

export default TimerUR2;
