import {} from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <nav className="navLinks">
        <Link to={"/"}>Home</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/blog"}>Blogs</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
    </>
  );
};

export default NavLinks;
