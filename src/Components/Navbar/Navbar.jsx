import {} from "react";
import "./Navbar.scss";
import NavLinks from "./navLinks/NavLinks";
const Navbar = () => {
  return (
    <>
      <header className="main_header">
        <div className="logo">
          <h1>DreamBuilders</h1>
        </div>
        <div className="navLinks">
          <NavLinks />
        </div>
        <div className="contactBtn_container">
          <button>Contact Now</button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
