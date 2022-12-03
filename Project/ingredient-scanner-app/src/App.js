import { Route, HashRouter as Router, Routes } from "react-router-dom";
import React, { useState } from "react";
import './App.css';
import Home from './Pages/Home';
import Ingredients from './Pages/Ingredients';

export default function App() {
  // Use state to store the list of ingredients and pass it between components
  // If nothing has been scanned, use default value for list
  const [list, changeList] = useState(["You have not scanned any ingredients yet."]);
  // Callback function to change the list of ingredients
  const changeListCallback = (childData) => {
    changeList(childData);
  };

  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home changeListCallback={changeListCallback}/>} />
            <Route path="/ingredients" element={<Ingredients list={list}/>} />
          </Routes>
        </Router>
    </div>
  );
}


