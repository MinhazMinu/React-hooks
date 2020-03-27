/**
 * There are There steps to consume context value
 * 1. import  useContext from react
 * 2. import the created Context. in our case its UserContext
 * 3. call the useContext( function and pass created context as argument)
 */

// 1. import useContext from react
import React, { useContext } from "react";
// import the created Context.in our case its UserContext
import { UserContext } from "./Context";

const ContextComponentB = () => {
  // call the useContext(function and pass created context as argument)
  const user = useContext(UserContext);
  return (
    <div>
      <h6>
        Showing name from{" "}
        <span className="text-success">ContextComponentB</span>{" "}
      </h6>
      <h4>My Name is {user} </h4>
    </div>
  );
};

export default ContextComponentB;
