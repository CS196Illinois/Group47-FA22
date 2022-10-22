import './App.css';
import Home from './Pages/Home';
import { Camera } from './Components/Camera';
import './Components/Ingredients.css';
import IngredientsList from './Components/IngredientsList';

const ingredients = [
  {id: 1, ingredient: "salt"},
  {id: 2, ingredient: "canola oil"},
  {id: 3, ingredient: "raspberry"},
  {id: 4, ingredient: "anatto"},
  {id: 5, ingredient: "milk"}
 ];
 

function App() {
  return (
    <div className="App">
      <Home/> 
      <Camera/>
      <IngredientsList ingredients={ingredients} />
    </div>
  );
}

export default App;
