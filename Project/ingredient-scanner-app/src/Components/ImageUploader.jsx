import React, { useState, createContext } from "react";
import axios from "axios";
import IngredientsList from "./IngredientsList.js"

// const IngredientsContext = createContext();

// export {IngredientsContext};

let INGREDIENTS_LIST = ["Default"];

export default function ImageUploader(props){

    const changeListCallback = (newList) => {
        props.changeListCallback(newList);
    }

    const [postImage, setPostImage] = useState({
        myFile: "",
    });

    const url = "http://localhost:8000/scan";
    const createImage = (newImage) => axios.post(url, newImage)
    .then(function (response) {
        console.log("Image Uploader Response: " + response.data)
        INGREDIENTS_LIST = response.data
        props.changeListCallback(INGREDIENTS_LIST)
        });

    const createPost = async (post) => {
        try {
            await createImage(post);
        } catch (error) {
            console.log("Image Uploader Error: " + error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost(postImage);
    };

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };
    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setPostImage({ ...postImage, myFile: base64 });
    };

    const handleDrill = (e) => {
        props.changeListCallback(["Chocolate", "Cake", "Flour"])
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    label="Image"
                    name="myFile"
                    accept=".jpeg, .png, .jpg"
                    onChange={(e) => handleFileUpload(e)}
                    // style={{ display: 'none'}}
                />

                <button className="SubmitButton">Submito</button>
            </form>
            {/* <button onClick={handleDrill}> Drill Upwards </button> */}
            {/* <IngredientsContext.Provider value={'LIST GOES HEREEEEE'}>
            <IngredientsList/>
            </IngredientsContext.Provider> */}
        </div>
    );
}

export function getIngredientsList() {
    // return INGREDIENTS_LIST
    return ["apples", "peaches", "pears"]
}

// export function ComponentOne() {
//     const ComponentOne = () => {
//         // let varOne = INGREDIENTS_LIST
//         let varTwo = "Tyson"
//         return (
//             <div>
//             <IngredientsList list={["yogurt", "bananas"]} varTwo={varTwo}/>
//             </div>
//         )};
// }