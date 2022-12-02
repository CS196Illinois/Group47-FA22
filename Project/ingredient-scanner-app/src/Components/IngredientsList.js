import React from 'react'
import Ingredients from './Ingredients'
import './Ingredients.css';
 
export default function IngredientsList(props) {
 return (
   <div>
    {/* {console.log(props)} */}
    {props.ingredients.map(i => <Ingredients ingredient={i}/>)}

    
   </div>
 )
}