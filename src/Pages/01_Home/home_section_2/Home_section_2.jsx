import {} from "react";
import "./Home_Section_2.scss";
const Home_Section_2 = () => {
  return (
    <>
      <div className="home_section_2">
        <h1 className="our_services">What We Do ?</h1>
        <div className="cards">
          <div className="card ">
            <div>
              <h2 className="card_head">ARCHITECTURAL DESIGN</h2>
              <p className="card_body">
                Buildings and constructions are an essential part of the human
                experience. We spend our lives, work there
              </p>
            </div>
          </div>
          <div className="card ">
            <div>
              <h2 className="card_head">GREY STRUCTURE</h2>
              <p className="card_body">
                Grey structure includes all the constructional processes
                excluding all the ornamental and architectural work there
              </p>
            </div>
          </div>
          <div className="card ">
            <div>
              <h2 className="card_head">BUILDING DRAWINGS</h2>
              <p className="card_body">
                After architects finalize the concept drawings, we meticulously
                craft structural, electrical, plumbing, and public health
                drawings for your project
              </p>
            </div>
          </div>
          <div className="card ">
            <div>
              <h2 className="card_head">INTERIOR DESIGN</h2>
              <p className="card_body">
                The goal of interior designers is to improve the user experience
                by better managing the space available in the intervened
                environment
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_Section_2;
