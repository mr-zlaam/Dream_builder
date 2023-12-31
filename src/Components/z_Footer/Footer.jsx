import {} from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <div className="footer_controller">
          <div className="footer_about">
            <div className="logos">
              <h1>
                <a href="#">Dreams Builders</a>
              </h1>
            </div>
            <p>
              Dream Builders, with a two-decade track record of success, is one
              of USA’s remarkably fast developing infrastructure and
              construction enterprises. It has been working on high-end projects
              in your neighbourhood and delivering them the homes of their
              dreams.
            </p>
          </div>
          <div className="address">
            <h1>Areas</h1>
            <p>Centreville</p>
            <p>Mississippi</p>
            <p>Dundas: 2981 Cemetery Street</p>
            <p>Wakefield</p>
            <p>4229 Holt Street</p>
            <p>California: 1124 Roosevelt Street </p>
            <p>2120 Broadway Street </p>
          </div>
          <div className="contact">
            <h1>Contact</h1>
            <p>emmet.considine@erdman.info</p>
            <p> +1 843-835-9352</p>
            <p>office: pollich.fleta@example.com</p>
            <p>office no: +1 912-678-1821</p>
            <p>personal no: +1 508-538-6459</p>
            <p>853 Kovar Road </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
