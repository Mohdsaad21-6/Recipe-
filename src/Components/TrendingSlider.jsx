import { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


const TrendingSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s"
      );
      const data = await api.json();
      console.log(data.meals.slice(0,20));

      setData(data.meals);
    };
    fetchData();
  }, []);

  var settings = {
//    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    rtl: true

  };

  return (
    <>
    {/* <h2 className="famous" style={{marginTop:"60px"}}>Famous Dish</h2> */}
      <center>
        <div style={{ width: "94%", height: "50vh",backgroundColor:"" }}>
          <Slider style={{margin:"1rem"}} {...settings}>
            {data.map((eachItem) => {
              return (
                <Link to={`/${eachItem.idMeal}`} key={eachItem.idMeal}>
                <div className="slider">
                  <img 
                    src={eachItem.strMealThumb}
                    style={{ width: "18rem",height:"17rem" }}
                  />
                   <div className="overlay-text" >
                  {eachItem.strMeal} 
                </div>
                </div>
                </Link>
              );
            })}
          </Slider>
        </div>
      </center>
    </>
  );
};

export default TrendingSlider;
