import React from "react";
import "./FileUploader.css";

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
        console.log(event.target.files[0].name)
        // props.handleFile(fileUploaded);
    };

    // file saved in fileUploaded
    // add a handle file function to other component

    return (
        <div className = "UploadDiv">
            <button onClick={handleClick} className="UploadButton">
                Upload Ingredients Image Here!
            </button>
            <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: "none" }}
            />
        </div>
    );
};
export default FileUploader;
