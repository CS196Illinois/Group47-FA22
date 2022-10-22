import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { Camera } from './Components/Camera';

function App() {
  return (
    <div className="App">
      <Home/> 
      <Camera/>
    </div>
  );
}

export default App;
