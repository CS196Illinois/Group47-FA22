import React from 'react'
import './IngredientsDisplay.css';

export default function IngredientsDisplay(props) {
  // Display every ingredient in the list
  return (
    <div className="ingredients">
      <span>{props.ingredient}</span>
    </div>
  )
}