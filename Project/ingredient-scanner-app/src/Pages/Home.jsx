import React from "react";
import "./Home.css";
import Title from "../Components/Title";
import { Camera } from "../Components/Camera";
import Translate from "../Components/Translate";
import ImageUploader from "../Components/ImageUploader";


export default function Home(props) {
  /** 
   * List of ingredients callback function so that the list can be passed up from the ImageUploader component
   * @todo: Add additional callbacks so the FileUploader and Camera components can pass image files to
   * Translate.jsx to be encoded and POSTED
  **/
  const changeListCallback = (newList) => {
    props.changeListCallback(newList);
  }
  
  return (
    <div>
      <Title />
      <div className="ImageComponents">
        {/* FileUploader can be reimplemented when the above TODO changes have been made, right now ImageUploader steals the CSS*/}
        {/* <FileUploader className="FileUploader" /> */}
        <ImageUploader className="FileUploader" changeListCallback={changeListCallback}/>
        <Camera className="Camera" />
      </div>
      <Translate />
    </div>
  );
}