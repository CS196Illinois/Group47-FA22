import React from 'react'
import Ingredients from './Ingredients'
import './Ingredients.css';

export default function IngredientsList(props) {
  return (
    <div>
      {props.ingredients.map(i => <Ingredients key={i.id} ingredient={i.ingredient}/>)}
      
    </div>
  )
}



