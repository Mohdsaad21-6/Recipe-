import { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Mine = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s"
      );
      const data = await api.json();
      console.log(data.meals.slice(0, 20));

      setData(data.meals.slice(0, 20));
    };
    fetchData();
  }, []);

  return (
    <>
      {/* <h2 style={{ color: "wheat" }}>Must Try</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {data.map((eachItem)=>{
        return(
            <div className="">
        <div class="col">
          <div class="card">
            <img src={eachItem.strMealThumb} class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">{eachItem.strMeal}</h5>
              <p class="card-text">
                {eachItem.strInstructions
                }
              </p>
            </div>
          </div>
        </div>
        </div>
        )

        
      })}

    </>
  );
};

export default Mine;
 