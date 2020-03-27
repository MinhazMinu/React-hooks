import React from "react";

const SummeryUseState = () => {
  return (
    <div className="container border m-5 p-5">
      <h4 className="mb-4">
        <span className="border border-warning rounded p-3 ">
          Summery - useState
        </span>
      </h4>
      <div className="h6 text-success mt-5">
        <p>The useState Hook lets you add state to functional components</p>
        <p>state Variable can be Number,String,Boolean,Object,Array</p>
        <p>
          It return two element:
          <br />
          &nbsp;&nbsp;1. Current value of State
          <br />
          &nbsp;&nbsp;2. state Setter function
        </p>
        <p>
          Dealing with Object or Array remember to spare to get Previous values{" "}
        </p>
      </div>
    </div>
  );
};

export default SummeryUseState;
