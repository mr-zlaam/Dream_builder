import { useState } from "react";
import "./Navbar.scss";
import NavLinks from "./navLinks/NavLinks";
import { Link } from "react-router-dom";
import { MdMenu, MdClear } from "react-icons/md";
import "./navLinks/NavLinks.scss";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const MenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <>
      <header className="main_header nav_shadow">
        <div className="logo">
          <h1>
            <Link to={"/"}>DreamBuilders</Link>
          </h1>
        </div>
        <div className="navLinks">
          <NavLinks
            MenuToggle={MenuToggle}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
        <div className="contactBtn_container">
          <Link to="mailto:dreambuilders@email.com" className="btn">
            Contact Now
          </Link>
        </div>
        {isMenuOpen ? (
          <MdClear className=" bars" onClick={MenuToggle} />
        ) : (
          <MdMenu className=" bars" onClick={MenuToggle} />
        )}
      </header>
    </>
  );
};

export default Navbar;
