import {} from "react";
import "./Home.scss";
import CarouselCard from "./Carousel/Carousel";
const Home = () => {
  return (
    <>
      <div className="main_home_container">
        <div className="moto">
          <h3>We construct dreams, not just structures</h3>
        </div>
        <div className="carousel">
          <CarouselCard />
        </div>
      </div>
    </>
  );
};

export default Home;
