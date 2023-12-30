import {} from "react";
import { Link } from "react-router-dom";
import "./NavLinks.scss";
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
        <span onClick={menuCloser}>
          <Link to={"/services"}>Services</Link>
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
