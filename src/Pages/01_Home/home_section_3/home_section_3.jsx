import {} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Home_section_3.scss";
const Home_section_3 = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="reviews">
        <h2 className="review_txt">What Our Client Say About Us?</h2>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          autoPlaySpeed={3000}
          className="courasel"
        >
          <div className="review_card ">
            <div className="name_profile">
              <div className="profile">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image"
                />
              </div>
              <div className="name">Haylee Barnes</div>
            </div>
            <p className="five_star">⭐⭐⭐⭐⭐</p>
            <div className="text_review">
              I wanted to thank you and the project team for finishing the
              construction of our new house.
            </div>
          </div>
          <div className="review_card ">
            <div className="name_profile">
              <div className="profile">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8MXwwfHx8MA%3D%3D"
                  alt="image"
                />
              </div>
              <div className="name">Piper Frye</div>
            </div>
            <p className="five_star">⭐⭐⭐⭐⭐</p>
            <div className="text_review">
              Dream Builders is one of the most dependable construction company
              I’ve come across, they not only helped me build but also assisted
              me in various parts of building my structure.
            </div>
          </div>
          <div className="review_card ">
            <div className="name_profile">
              <div className="profile">
                <img
                  src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8MXwwfHx8MA%3D%3D"
                  alt="image"
                />
              </div>
              <div className="name">Brinley Randolph</div>
            </div>
            <p className="five_star">⭐⭐⭐⭐⭐</p>
            <div className="text_review">
              Dream builders was truly a collaborative partner, they constructed
              our 10 Marla house. that was cost-effective, efficient, and of
              high quality.
            </div>
          </div>
          <div className="review_card ">
            <div className="name_profile">
              <div className="profile">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8MXwwfHx8MA%3D%3D"
                  alt="image"
                />
              </div>
              <div className="name">Denver Estrada</div>
            </div>
            <p className="five_star">⭐⭐⭐⭐⭐</p>
            <div className="text_review">
              They just {"didn't"} build our {"company's"} building but also
              built our trust on them.{" "}
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Home_section_3;
