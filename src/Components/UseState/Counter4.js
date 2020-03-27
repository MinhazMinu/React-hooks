import React, { useState } from "react";

const Counter4 = () => {
  // useState As an array
  const [items, setItems] = useState([]);
  const handleAddItem = () => {
    const newItem = Math.floor(Math.random() * 10) + 1;
    setItems([...items, newItem]); //We need to marge the array
  };
  return (
    <div className="container border m-5 p-5">
      <h4>State variable as Array</h4>
      <h6 className="text-danger">
        useState dose not Automatically marge Array on update <br />
        We need to marge manually{" "}
      </h6>
      <button className="btn btn-info" onClick={handleAddItem}>
        Add Number
      </button>
      <div className="d-flex justify-content-center">
        {items.map(item => (
          <div className="m-2 text-info ">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Counter4;
