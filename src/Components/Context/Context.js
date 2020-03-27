/**
 * Context provides a way  to pass data through the component tree without having to pass
 * down manually at every (may be with props)
 */

/**
 * There are Four steps to use UseContext Hook
 * 1. import the Destination Component
 * 2. Create a context using creatContext() method and export it
 * 3. provide the context value at high level in the component tree
 * 4. consume the context value
 */

/**
 * Here component Hierarch is Context.js => ContextComponentA.js => ContextComponentB.js
 * we want pass a value from  Context.js to ContextComponentB.js
 */
import React, { createContext } from "react";
//1. import the Destination Component
import ContextComponentB from "./ContextComponentB";

//2. Create a context using creatContext() method and export it
export const UserContext = createContext();

const Context = () => {
  const name = "Minhaz";
  return (
    <div className="container border m-5 p-5">
      <h3 className="text-info">UseConText</h3>
      {/* provide the context value at high level in the component tree */}
      <UserContext.Provider value={name}>
        <ContextComponentB></ContextComponentB>
      </UserContext.Provider>
    </div>
  );
};

export default Context;
