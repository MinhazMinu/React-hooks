/**
 * useRef make it possible to access DOM node directly withIn Functional Component.
 * in our case we will focusing a "text input"  on first time page load and for these we
 * can use useEffect hook
 */

/**
 * There are Four step to use useRef Hooks
 * 1. import useRef from react
 * 2. crete a ref variable (our case inputRef ) by calling useRef() and passing in initial value
 * 3. attached the ref variable to DOM by using ref={} (our case <input />)
 * 4.call DOM method (our case focus() method ) inputRef.current.focus()
 */
// 1. import useRef from react
import React, { useEffect, useRef } from "react";

const FocusInputUR = () => {
  // 2. crete a ref variable(our case) by calling useRef() and passing in initial value
  const inputRef = useRef(null);

  //focus only first time the page load
  useEffect(() => {
    // 4.call DOM method(our case focus() method) inputRef.current.focus()
    inputRef.current.focus();
  }, []);
  return (
    <div className="container border m-5 p-5">
      <h4>useRef -to access DOM node </h4>
      <h6>This input field automatically focused when page load</h6>
      <input ref={inputRef} type="text" className="form-control-sm" />
    </div>
  );
};

export default FocusInputUR;
