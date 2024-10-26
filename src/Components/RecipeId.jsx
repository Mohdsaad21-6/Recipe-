import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const RecipeId = () => {
  const { idMeal } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const data = await api.json();
      console.log(data.meals[0]);

      setData(data.meals[0]);
    };
    fetchData();
  }, [idMeal]);

  return (
    <>
      <Navbar></Navbar>

      <div style={{margin:"auto",
      width:"90%",
      textAlign:"center"
      }}>
        <h1 style={{ color: "white", marginTop: "70px" }}>{data.strMeal}</h1>
        <div style={{display:"flex"}}>
        <div style={{width:"30%"}}>
          <img src={data.strMealThumb} className="img" style={{width:"20rem"}}></img>
        </div>
        <div className="content" style={{width:"60%"}}>
        <button type="button" className="btn btn-primary">Ingredient</button>
        <button type="button" className="btn btn-primary">Instruction</button>

        </div>
        </div>
      </div>
    </>
  );
};

export default RecipeId;
