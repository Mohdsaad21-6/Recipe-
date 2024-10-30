import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import RecipeId from "./Components/RecipeId";
import Category from "./Components/Category";
import SearchElement from "./Components/SearchElement";


function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:idMeal" element={<RecipeId/>}/>
        <Route path="/category/:name" element={<Category/>}/>
        <Route path="/search/:searchTerm" element={<SearchElement/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
