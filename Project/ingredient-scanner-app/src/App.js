import './App.css';
import Home from './Pages/Home';
import Ingredients from './Pages/Ingredients';
import { Route, HashRouter as Router, Routes } from "react-router-dom";


function App() {
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


