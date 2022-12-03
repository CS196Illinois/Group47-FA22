import React from 'react'
import IngredientsDisplay from './IngredientsDisplay'

export default function IngredientsList(props) {
  return (
    <div>
      {props.list.map(i => <IngredientsDisplay ingredient={i} />)}
    </div>
  )
}