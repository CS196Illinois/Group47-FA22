import React from "react";
import Title from "../Components/Title";
import FileUploader from "../Components/FileUploader";
import { Camera } from '../Components/Camera';

export default function Home() {
  return (
    <div>
      <Title />
      <FileUploader />
      <Camera/>
    </div>
  );
}
