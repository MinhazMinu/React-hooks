// A state variable can be string, number, boolean , object,array
import React, { useState } from "react";

const Counter3 = () => {
  // State variable as object
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div className="container border m-5 p-5">
      <h4>State variable as object</h4>
      <h6 className="text-danger">
        useState dose not Automatically marge on update <br />
        We need to marge manually{" "}
      </h6>
      <form>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              //   value={name.firstName}
              onChange={e => setName({ firstName: e.target.value })}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              //   value={name.lastName}
              onChange={e => setName({ lastName: e.target.value })}
            />
          </div>
        </div>

        <br />
        <h6>You First Name : {name.firstName} </h6>
        {/* here when firstName is typed , lastName value will be lost  */}
        <h6>You Last Name : {name.lastName} </h6>
        {/*  because its is not marge previous value */}
      </form>
      {/*  form with marge the previous state value */}
      <h4>Form with marge the previous state value</h4>
      <form>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              //   value={name.firstName}
              onChange={e => setName({ ...name, firstName: e.target.value })}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              //   value={name.lastName}
              onChange={e => setName({ ...name, lastName: e.target.value })}
            />
          </div>
        </div>

        <br />
      </form>
    </div>
  );
};

export default Counter3;
