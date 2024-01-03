import {} from "react";
import "./Projects.scss";
import data from "./Projects.json";
const Projects = () => {
  return (
    <>
      <div className="project_container">
        <h1>Our Latest Work</h1>
        <div className="projects_controller">
          {data &&
            data.map((imageData) => {
              return (
                <div className="project_card" key={imageData.id}>
                  <img src={imageData.url} alt="image" />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Projects;
