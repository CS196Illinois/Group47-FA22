import './App.css';
import Home from './Pages/Home';
import Ingredients from './Pages/Ingredients';
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import React, {useState, useEffect} from 'react';


function App() {

  // const nutritionix = require("nutritionix-api");

  const YOUR_APP_ID = '3bb2b372'; // Your APP ID
  const YOUR_API_KEY = 'd34bbe9a3c973b24d7be0cc44ed6367f'; // Your KEY

  // nutritionix.init(YOUR_APP_ID, YOUR_API_KEY);

  // nutritionix.natural.search('Apple').then(result => {
  //   console.log(result);
  // });

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch('http://trackapi.nutritionix.com/v2/natural/nutrients', {
      method: 'GET',
      headers: {
      'x-app-id': YOUR_APP_ID,
      'x-app-key': YOUR_API_KEY,
      'x-remote-user-id': 0,
      },
      body: {
        query: 'Apple'
      }
    }).then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, []) // <-- empty array means run once

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/ingredients" element={<Ingredients />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


