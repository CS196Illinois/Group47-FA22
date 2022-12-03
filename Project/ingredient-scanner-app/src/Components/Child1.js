import React, {createContext} from "react";
import Child2 from './Child2';
  
const Name = createContext();
  
const Child1 = () => {
    return (
      <>
        <Name.Provider value={'Archna'}>
        <Child2/>
        </Name.Provider>
      </>
    );
}
  
export default Child1;
export {Name};