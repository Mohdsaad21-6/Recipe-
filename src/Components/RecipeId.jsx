import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./RecipeId.css";

const RecipeId = () => {
  const { idMeal } = useParams();
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const data = await api.json();
      setData(data.meals[0]);
    };
    fetchData();
  }, [idMeal]);

  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: "10%" }}>
        <div className="grid">
          <div className="image">
            <img src={data.strMealThumb} alt="image" />
          </div>
          <div className="text">
            <h2 className="glow">{data.strMeal}</h2>
            <p style={{ marginTop: "20px" }}>{data.strInstructions}</p>
          </div>
        </div>
      </div>
      <center>
        <div>
          <h2 style={{ color: "wheat",marginBottom:"20px" }}>Ingredients</h2>
          <h5 style={{ color: "white" }}>{data.strIngredient1} - {data.strMeasure1}</h5>
          <h5 style={{ color: "white" }}>{data.strIngredient2} - {data.strMeasure2}</h5>
          <h5 style={{ color: "white" }}>{data.strIngredient3} - {data.strMeasure3}</h5>
          <h5 style={{ color: "white" }}>{data.strIngredient4} - {data.strMeasure4}</h5>
          <h5 style={{ color: "white" }}>{data.strIngredient5}  - {data.strMeasure5}</h5>
          <h5 style={{ color: "white" }}>{data.strIngredient6} - {data.strMeasure6}</h5>
        </div>
      </center>
    </>
  );
};

export default RecipeId;
