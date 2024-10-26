import Mine from "./Mine"
import Navbar from "./Navbar"
import PopularSlidar from "./PopularSlidar"
import TrendingSlider from "./TrendingSlider"

const Home = () => {
  return (
    <>
        <Navbar></Navbar>
        <PopularSlidar></PopularSlidar>
        <TrendingSlider></TrendingSlider>
        {/* <Mine></Mine> */}
    </>
  )
}

export default Home
