import React from "react";
import logo from "../../logo192.png";

const Navigation = () => {
  return (
    <div className="container pt-3">
      <nav
        className="navbar navbar-expand-lg  fixed-top"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <a className="navbar-brand ml-5 App-logo" href="/">
          <img src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link" href="/useState">
                {/* Home <span className="sr-only">(current)</span> */}
                useState
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/useEffect">
                useEffect
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/useContext">
                useContext
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/useRef">
                useRef
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
