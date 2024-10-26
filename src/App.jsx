import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import RecipeId from "./Components/RecipeId";


function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:idMeal" element={<RecipeId/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
