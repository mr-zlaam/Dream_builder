import {} from "react";
import "./Home.scss";
import Home_Section_2 from "./home_section_2/Home_section_2";
import Home_section_3 from "./home_section_3/home_section_3";
const Home = () => {
  return (
    <>
      <div className="home_container">
        <div className="hero_section">
          <div className="text_div">
            <h1>WE CONSTRUCT DREAMS, NOT JUST BUILDINGS</h1>
          </div>
        </div>
        <Home_Section_2 />
        <Home_section_3 />
      </div>
    </>
  );
};

export default Home;
