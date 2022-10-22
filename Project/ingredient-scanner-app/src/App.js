import './App.css';
import Home from './Pages/Home';
import Ingredients from './Components/Ingredients'
import IngredientsList from './Components/IngredientsList'
import Title from './Components/Title';

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
      <IngredientsList ingredients={ingredients} />
    </div>
  );
}
export default App;