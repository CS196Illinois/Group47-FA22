import React from "react";
import '../Components/Ingredients.css';
import IngredientsList from '../Components/IngredientsList';

const ingredients = [
  {id: 1, ingredient: "salt"},
  {id: 2, ingredient: "canola oil"},
  {id: 3, ingredient: "raspberry"},
  {id: 4, ingredient: "anatto"},
  {id: 5, ingredient: "milk"}
 ];
 


export default function Ingredients() {
  return (
    <div>
      <IngredientsList ingredients={ingredients} />
    </div>
  );
}

