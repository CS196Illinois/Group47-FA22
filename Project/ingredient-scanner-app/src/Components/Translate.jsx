import React from 'react'
import "./Translate.css"
import { Link } from "react-router-dom";
import axios from 'axios';
import fileUploaded from './FileUploader.jsx'

export default function Translate() {
    const handleClick1 = async() => {
        const {data} = await axios({
            method: "post",
            url: "http://127.0.0.1:8000/ingredients",
            data: {'ingredients': "Peaches"},
            contentType: "application/json"
        })
        .then(function (response) {
            console.log("Translate response" + response)
        })
        .then(function (error) {
            console.log("Translate error: " + error)
        });
        }
        
    return (
        <div>
            <Link to="/ingredients">
                {/* <button className = "TranslateButton" onClick={handleClick1}/> */}
                <button className = "TranslateButton">
                    Translate!
                </button>
            </Link>
        </div>
    )
}