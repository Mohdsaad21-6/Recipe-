import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import "./Category.css";

const Category = () => {
  const { name } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`
      );
      const data = await api.json();
      //   console.log(data);

      setData(data.meals);
    };
    fetchData();
  }, [name]);

  return (
    <>
      <Navbar></Navbar>

      <div
        style={{
          width: "90%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(15rem,1fr))",
          gridGap: "2rem",
          marginTop: "6rem",
        }}
      >
        {data.map((eachItem) => {
          return (
            <Link
              to={`/${eachItem.idMeal}`}
              key={eachItem.idMeal}
              style={{ textDecoration: "none" }}
            >
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div
                    className="card h-100 glass"
                    style={{ width: "13rem" }}
                    
                  >
                    <img src={eachItem.strMealThumb} className="card-img-top" />
                    <div className="card-body">
                      <h5 style={{color:"whitesmoke"}} className="card-title">{eachItem.strMeal.slice(0,16)}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Category;
