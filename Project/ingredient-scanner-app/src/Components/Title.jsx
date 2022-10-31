import React from 'react'
import logo from './ingredient_logo.png';
import './Title.css';


export default function Title() {
  return (
    <div className = "OuterDiv">
      <div className = "LogoDiv">
        <img src = {logo} alt = "Logo" style = {{height : 100}}/>
      </div>
      <div className = "TitleDiv">
        <h1> Ingredient Scanner </h1>
      </div>
    </div>
  )
}
