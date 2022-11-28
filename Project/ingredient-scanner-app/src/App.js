import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Ingredients from './Pages/Ingredients';
import React from 'react';
import axios from 'axios';  

function App() {
  const [file, setFile] = useState()
  const [description, setDescription] = useState("")
  const [image, setImage] = useState()

  const submit = async event => {
    event.preventDefault()

    const formData = new FormData()
    formData.append("image", file)
    formData.append("description", description)

    const result = await axios.post('/api/images', formData, { headers: {'Content-Type': 'multipart/form-data'}})
    setImage(result.data.imagePath)

  return (
    <div className="App">
      <Home/> 
      <Ingredients/>
    </div>
  );
}

export default App;


