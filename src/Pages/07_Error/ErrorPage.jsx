import {} from "react";
import "./Error.scss";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      <div className="error_container">
        <h1>Error 404: page not found</h1>
        <p>
          <Link to={"/"}>Home</Link>
        </p>
      </div>
    </>
  );
};

export default Error;
