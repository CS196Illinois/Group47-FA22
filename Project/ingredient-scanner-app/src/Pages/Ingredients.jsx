
import '../Components/Ingredients.css';
import IngredientsList from '../Components/IngredientsList';
import React, { useState, useEffect } from 'react'
import getIngredientsList from '../Components/ImageUploader';
import ComponentOne from '../Components/ImageUploader';
import Child1 from '../Components/Child1'

const ingredientsData = ["salt", "canola oil", "raspberry", "anatto", "milk"];

export default function Ingredients() {
  return (
    <div>
      {/* {console.log("INGREDIENTS LIST: " + getIngredientsList())} */}
      { /* {(typeof props.list === "undefined") ? (
        // console.log("Empty")
        <p>Empty</p>
      ) : (
        <div> 
          <h1>Ingredients2</h1>
          { <IngredientsList ingredients={props.list} /> }
          <IngredientsList ingredients={ingredientsData} />
        </div>
        
      )} */ }

      <IngredientsList/>
      {/* <Child1/> */}
    </div>
  )
}

