import React from "react";
import Title from "../Components/Title";
import FileUploader from "../Components/FileUploader";
import { Camera } from "../Components/Camera";
import "./Home.css";


export default function Home() {
  return (
    <div>
      <Title />
      <div className="ImageComponents">
        <div className = "FileUpload"> <FileUploader /> </div>
        <div> <h1> Bruh text </h1> </div>
        <div className = "Cam"> <Camera /> </div>
      </div>
    </div>
  );
}