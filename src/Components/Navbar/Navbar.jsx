import {} from "react";
import "./Navbar.scss";
import NavLinks from "./navLinks/NavLinks";
import { Link } from "react-router-dom";
import { MdMenu, MdClear } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <header className="main_header nav_shadow">
        <div className="logo">
          <h1>
            <Link to={"/"}>DreamBuilders</Link>
          </h1>
        </div>
        <div className="navLinks">
          <NavLinks />
        </div>
        <div className="contactBtn_container">
          <Link to="mailto:dreambuilders@email.com" className="btn">
            Contact Now
          </Link>
        </div>
        <MdMenu className="invisible" />
        <MdClear className="invisible" />
      </header>
    </>
  );
};

export default Navbar;
