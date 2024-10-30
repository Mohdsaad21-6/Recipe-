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
      console.log(data.meals[0]);

      setData(data.meals[0]);
    };
    fetchData();
  }, [idMeal]);

  return (
    <>
      <Navbar></Navbar>

      {/* <div style={{margin:"auto",
      width:"90%",
      textAlign:"center"
      }}>
        <h1 style={{ color: "white", marginTop: "70px",marginLeft:"20px" }}>{data.strMeal}</h1>
        <div style={{display:"flex"}}>
        <div style={{width:"30rem"}}>
          <img src={data.strMealThumb} className="img" style={{width:"20rem" ,marginTop:"80px"}}></img>
        </div>
        <div className="content" style={{width:"60%"}}>
        <button type="button" className="btn btn-primary" style={{margin:"20px" , marginLeft:"70px"}}>Ingredient</button>
        <button type="button" className="btn btn-primary" style={{margin:"40px"}}>Instruction</button>

        </div>
        </div>
      </div> */}

      <div className="container">
        <div className="grid">
          <div className="image">
            <img src={data.strMealThumb} alt="image" />
          </div>
          <div className="text">
          

            <h2 className="glow" style={{ color: "white" ,marginLeft:"-27%"}} >{data.strMeal}</h2>
            <p style={{ color: "white" ,marginTop:"30%",width:"150%",textAlign:"justify",fontFamily:"cursive"}}>{data.strInstructions}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeId;
