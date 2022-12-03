import React from 'react'
import IngredientsList from '../Components/IngredientsList';

export default function Ingredients(props) {
  return (
    <div>
      <IngredientsList list={props.list}/>
    </div>
  )
}

