import React, { useState } from "react";
import axios from "axios";

let INGREDIENTS_LIST = ["Default Ingredient List"];

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

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    label="Image"
                    name="myFile"
                    accept=".jpeg, .png, .jpg"
                    onChange={(e) => handleFileUpload(e)}
                />
                <button className="SubmitButton">Submit your File</button>
            </form>
        </div>
    );
}