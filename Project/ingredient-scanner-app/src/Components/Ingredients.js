import React from 'react'
import './Ingredients.css'

export default function Ingredients(props) {
  return (
    <div className="ingredient">
      <span>{props.ingredient}</span> 
    </div>
  )
}