import React, { useState, createContext } from "react";
import axios from "axios";
import IngredientsList from "./IngredientsList.js"
import "./FileUploader.css";

let INGREDIENTS_LIST = ["Default"];

const FileUploader = (props) => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log("OG UPLOADER: " + fileUploaded)
    var imageCaptured = true
    // props.handleFile(fileUploaded);
  };

  const [postImage, setPostImage] = useState({
    myFile: "",
  });

  const url = "http://localhost:8000/scan";
  const createImage = (newImage) => axios.post(url, newImage)
    .then(function (response) {
      console.log("Image Uploader Response: " + response.data)
      INGREDIENTS_LIST = response.data
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
    createPost(postImage);
  };

  // file saved in fileUploaded
  // add a handle file function to other component

  return (
    <div>
      <input
        type="file"
        label="Image"
        name="myFile"
        accept=".jpeg, .png, .jpg"
        ref={hiddenFileInput}
        onChange={handleChange}
        // onChange={(e) => handleFileUpload(e)}
        className="HiddenFileInput"
      />
      <button onClick={handleClick} className="VisibleUploadButton">
        Upload Ingredients Image Here!
      </button>
    </div>
  );
};
export default FileUploader;