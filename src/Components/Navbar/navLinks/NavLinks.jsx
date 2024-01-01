import {} from "react";
import { Link } from "react-router-dom";
import "./NavLinks.scss";
import { IoMdArrowDropdown } from "react-icons/io";

const NavLinks = (props) => {
  const { isMenuOpen, setIsMenuOpen } = props;
  const menuCloser = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      {isMenuOpen && <div className="closer_div" onClick={menuCloser} />}
      <nav
        className={`navLinks ${
          isMenuOpen ? "navLinks_mobile" : "navLinks_hidden"
        }`}
      >
        <span onClick={menuCloser}>
          <Link to={"/"}>Home</Link>
        </span>
        <span className="services_route">
          <Link className="servicesText">
            Services <IoMdArrowDropdown className="drop_icon" />
          </Link>
          <span className="dropdown_controller">
            <Link onClick={menuCloser} to={"/services"} className="dropdown">
              Architectural
            </Link>
            <Link to={"/services"} onClick={menuCloser} className="dropdown">
              Grey Structure
            </Link>
            <Link to={"/services"} onClick={menuCloser} className="dropdown">
              Building Drawing
            </Link>
            <Link to={"/services"} onClick={menuCloser} className="dropdown">
              Interior Design
            </Link>
          </span>
        </span>
        <span onClick={menuCloser}>
          <Link to={"/projects"}>Projects</Link>
        </span>
        <span onClick={menuCloser}>
          <Link to={"/blog"}>Blogs</Link>
        </span>
        <span onClick={menuCloser}>
          <Link to={"/about"}>About</Link>
        </span>
        <span onClick={menuCloser}>
          <Link to={"/contact"}>Contact</Link>
        </span>
      </nav>
    </>
  );
};

export default NavLinks;
