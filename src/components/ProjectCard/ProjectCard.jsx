import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard(props) {
  const { projectData } = props;
  return (
    <div className="project-card">
      <Link to={`/project/${projectData.id}`}>
        <img src={projectData.image} alt="Project Main Pic" />

        <h3>{projectData.title}</h3>
        <p>{projectData.description}</p>
        <h3>{projectData.category_id}</h3>
      </Link>
    </div>
  );
}

export default ProjectCard;
