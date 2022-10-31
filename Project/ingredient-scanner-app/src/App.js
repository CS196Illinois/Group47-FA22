import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Ingredients from './Pages/Ingredients';
import TranslateButton from './Components/TranslateButton'

function App() {
  return (
    <div className="App">
      <Home/> 
      <Ingredients/>
      <TranslateButton 
        border="none"
        height = "100px"
        onClick={() => console.log("You clicked on the translate button")}
        width = "200px"
        children = "Translate!"
      />
    </div>
  );
}

export default App;


