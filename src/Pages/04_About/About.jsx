import {} from "react";
import "./About.scss";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="main_about_container">
        <div className="about_hero_section">
          <h1>Who We Are?</h1>
        </div>
        <div className="about_info_section">
          <div className="image_about">
            <img
              src="https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="about_image"
            />
          </div>
          <div className="about_info">
            <h1>About Dream Builders</h1>
            <p>
              We started our journey towards excellence in the year 2002, to
              cater for the demand in high-quality yet cost effective self-build
              home construction company in all over the USA. The relationships
              we have forged with industry professionals such as architects,
              engineers, trade and craftspeople means you will always get the
              best service across the build and ultimately saving our clients
              time and budget.
            </p>
            <Link to={"/projects"} className="btn">
              View Our Work
            </Link>
          </div>
        </div>
        <div className="about_cards_section">
          <div className="about_card_piece">
            <h1>What We Do</h1>
            <p>
              Dream Builders offers a full-service package meaning we value our
              client’s input in creating truly breath-taking homes tailor-made
              for you or, if you prefer, can take the helm and deliver the
              project on your behalf. We offer an unrivalled partnership
              starting with consultation across the early stages and offering
              advice on materials, budgets and the build. We are proud of our
              handover process ensuring we deliver you your dream home, worry
              and stress free. Creating your own self build home has many
              benefits which is why we have seen a sharp upturn in such demand
              in recent years. First and foremost, you’re in control of all
              elements of the build so can create your dream home. Letting Dream
              Builders take control of the construction process means you’re
              free to input as much or as little as you require. We only take on
              a few bespoke projects a year which ensure all our builds get the
              time and attention to detail they deserve. Our approved crafts and
              tradespeople deliver genuine value for money across the project
              making sure self-build is a genuine proposition. With Dream
              Builders as your build partner you will be safe in the knowledge
              your self-build experience will be a relaxed and cost-effective
              one without compromising on quality.
            </p>
          </div>
          <div className="about_card_piece">
            <h1>How we Work</h1>
            <p>
              Having Dream Builders as your build partner means any construction
              headaches are avoided through using our trusted craft and
              tradespeople and clear communication across all stakeholders and
              team members. We cover all areas of advice across the initial
              process including planning, best use of land, best build for the
              family, RoI, recommended architects, designers, traditional
              materials and eco-technology. Whether you want to be involved on a
              regular basis or leave it to Dream Builders the decision is yours,
              but rest assured your build is in capable hands and will be
              completed to the very highest standard, on time and on budget. Our
              continued relationship after the build is complete and the home
              delivered means we don’t just walk away once the keys are handed
              over. Our aftercare service is imperative to your home
              construction experience. Much of our business comes through our
              well-deserved reputation in quality and value so if you need
              renovations, extensions or know of others who wish to create their
              dream home, Dream Builders are on hand to help.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
