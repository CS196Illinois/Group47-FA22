import React, { useState, useEffect } from 'react'
import Ingredients from './Ingredients'
import './Ingredients.css';
import { IngredientsContext } from '../Components/ImageUploader';
import axios from 'axios';

const ingredientsData = ["salt", "canola oil", "raspberry", "anatto", "milk"];

export default function IngredientsList() {

  // let ingredMethod = getIngredientsList();
  // const [ingredos, setIngredos] = useState([{}])

  let ingredos = []

  // useEffect(() => {
  //   axios.get('http://localhost:8000/scan').then( function (response) {
  //     console.log("AXIOS GET: ", response.data)
  //     setIngredos(response.data)
  //   }).then(function (error) {
  //     console.log(error);
  //   })
  // }, [])

  // const handleClick = async() => {
  //   const {data} = await axios({
  //       method: "get",
  //       url: "http://127.0.0.1:8000/scan",
  //       contentType: "application/json"
  //   })
  //   .then(function (response) {
  //       console.log("Translate response" + response.data)
  //   })
  //   .then(function (error) {
  //       console.log("Translate error: " + error)
  //   });
  // }

  const handleClick2 = async() => {
    console.log("CLICKED")
  }

  return (
    <div>
      {/* {props.ingredients.map(i => <Ingredients ingredient={i} />)} */}
      {/* {console.log(props)}
      <p> {props.list} </p> */}
      {/* <IngredientsContext.Consumer>
        {(fname) => {
          return <h1>My Name is {fname}</h1>;
        }}
      </IngredientsContext.Consumer> */}
      {/* <button onClick={() => handleClick2}>Click me</button>
      {ingredos.map(i => <Ingredients ingredient={i} />)} */}
    </div>
  )
}