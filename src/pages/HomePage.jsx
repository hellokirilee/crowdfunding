import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
// import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import getToken from "../utils/getToken";

function HomePage() {
  //variables
  const [projectList, setProjectList] = useState([]);
  // const history = useHistory();
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);

  const username = localStorage.getItem("username");
  //methods
  // will return content if logged in, otherwise place holder?

  useEffect(() => {
    const token = getToken();
    setLoggedIn(token != null);
  }, [location]);

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
    <>
      <div id="home">
        {loggedIn ? (
          <div id="project-list">
            {projectList.map((projectData, key) => {
              return <ProjectCard key={key} projectData={projectData} />;
            })}
          </div>
        ) : (
          <div id="front-page">
            <img
              id="onlycats-logo"
              src={window.location.origin + "/logo.svg"}
              alt="Only Cats"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default HomePage;
