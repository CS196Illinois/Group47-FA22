import React from 'react'
import "./Translate.css"
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Translate() {
    /**
     * @todo Translate Button should send the POST request with the base64 image to the backend
     * Currently, the button just sends a practice POST JSON request to /ingredients in the backend
    **/
    // Defines the handleClick event for the Translate button
    const handleClick = async() => {
        // Define the axios POST request
        // TODO: the data should be the base64 image
        const {data} = await axios({
            method: "post",
            url: "http://127.0.0.1:8000/ingredients",
            data: {'ingredients': "Peaches"},
            contentType: "application/json"
        })
        .then(function (response) {
            console.log("Translate Button response" + response)
        })
        .then(function (error) {
            console.log("Translate Button error: " + error)
        });
        }
    
    return (
        <div>
            <Link to="/ingredients">
                {/* add the onClick method when the image POST Request is properly implemented*/}
                {/* <button className = "TranslateButton" onClick={handleClick}/> */}
                <button className = "TranslateButton">
                    Translate!
                </button>
            </Link>
        </div>
    )
}