import React from 'react'
import "./Translate.css"
import { Link } from "react-router-dom";

export default function Translate() {
    return (
        <div>
            <Link to="/ingredients">
                <button className = "TranslateButton">
                    Translate!
                </button>
            </Link>
        </div>
    )
}
