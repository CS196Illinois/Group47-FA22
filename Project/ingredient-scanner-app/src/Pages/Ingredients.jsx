
import '../Components/Ingredients.css';
import IngredientsList from '../Components/IngredientsList';
import React, { useState, useEffect } from 'react'

const ingredients = [
  { id: 1, ingredient: "salt" },
  { id: 2, ingredient: "canola oil" },
  { id: 3, ingredient: "raspberry" },
  { id: 4, ingredient: "anatto" },
  { id: 5, ingredient: "milk" }
];



function Ingredients() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/scanner").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>
      {console.log(data)}
      {(typeof data === "undefined") ? (
        console.log("Empty")
      ) : (
        
        <div>
          <IngredientsList ingredients={data} />
          {console.log(data)}
        </div>
        
      )}

    </div>
  )
}

export default Ingredients

