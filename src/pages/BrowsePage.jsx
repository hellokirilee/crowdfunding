import React, { useState, useEffect } from "react";
// import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import getToken from "../utils/getToken";

function BrowsePage() {
  //variables
  const [projectList, setProjectList] = useState([]);
  //methods
  // will return content if logged in, otherwise place holder?
  useEffect(() => {
    const token = getToken();
    if (token) {
      fetch(`${process.env.REACT_APP_API_URL}content`, {
        method: "GET",
        headers: { Authorization: `Token ${getToken()}` },
      })
        .then((results) => {
          return results.json();
        })
        .then((data) => {
          setProjectList(data);
        });
    }
  }, []);

  //template
  return (
    <div id="project-list">
      {projectList.map((projectData, key) => {
        return <ProjectCard key={key} projectData={projectData} />;
      })}
    </div>
  );
}

export default BrowsePage;
