import {} from "react";
import "./Home.scss";
import Home_Section_2 from "./home_section_2/Home_section_2";
import Home_section_3 from "./home_section_3/home_section_3";
import Home_Section_4 from "./home_section_4/Home_section_4";
import Home_section_5 from "./home_section_5/home_section_6";
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
        <Home_Section_4 />
        <Home_section_3 />
        <Home_section_5 />
      </div>
    </>
  );
};

export default Home;
