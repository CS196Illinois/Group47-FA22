import './App.css';
import Home from './Pages/Home';
import Ingredients from './Pages/Ingredients';
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import React, { useState, createContext } from "react";


// const IngredientsContext = createContext();

export default function App() {

  const [list, changeList] = useState(["Defaulto", "Defaulto2", "Defaulto3"]);

  const changeListCallback = (childData) => {
    changeList(childData);
    console.log("DRILL COMPLETE: " + list)
  };

  return (
    <div className="App">
      {/* <IngredientsContext>  */}
        <Router>
          <Routes>
            <Route exact path="/" element={<Home changeListCallback={changeListCallback}/>} />
            <Route path="/ingredients" element={<Ingredients list={list}/>} />
            {/* <Route exact path="/" element={<Home />} />
            <Route path="/ingredients" element={<Ingredients />} /> */}
          </Routes>
        </Router>
      {/* </IngredientsContext> */}
    </div>
  );
}


