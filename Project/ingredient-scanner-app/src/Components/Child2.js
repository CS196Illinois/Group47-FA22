import React from "react";
import { Name } from "./Child1";
  
const Child2 = () => {
    return (
      <>
        <Name.Consumer>
          {(fname) => {
            return <h1>My Name is {fname}</h1>;
          }}
        </Name.Consumer>
      </>
    );
};
  
export default Child2;