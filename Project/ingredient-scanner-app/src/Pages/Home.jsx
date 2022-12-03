import React from "react";
import Title from "../Components/Title";
import FileUploader from "../Components/FileUploader";
import { Camera } from "../Components/Camera";
import "./Home.css";
import Translate from "../Components/Translate";
import ImageUploader from "../Components/ImageUploader";
import IngredientsList from "../Components/IngredientsList.js";


export default function Home() {
  return (
    <div>
      <Title />
      <div className="ImageComponents">
        <FileUploader className="FileUploader" />
        <Camera className="Camera" />
      </div>
      <Translate />
      <ImageUploader />
      {/* <IngredientsList /> */}
    </div>
  );
}