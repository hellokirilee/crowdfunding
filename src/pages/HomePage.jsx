import React, { useState, useEffect } from "react";
//import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import getToken from "../utils/getToken";

function HomePage() {
  return <p> boo</p>;
  //variables
  //   const [projectList, setProjectList] = useState([]);
  //   //methods
  //   // 'projects' is the end of url - should match API
  //   useEffect(() => {
  //     fetch(`${process.env.REACT_APP_API_URL}content`, {
  //       method: "GET",
  //       headers: { Authorization: `Token ${getToken()}` },
  //     })
  //       .then((results) => {
  //         return results.json();
  //       })
  //       .then((data) => {
  //         setProjectList(data);
  //       });
  //     // setProjectList(allProjects);
  //   }, []);
  //   //template
  //   return (
  //     <div id="project-list">
  //       {projectList.map((projectData, key) => {
  //         return <ProjectCard key={key} projectData={projectData} />;
  //       })}
  //     </div>
  //   );
}

export default HomePage;
