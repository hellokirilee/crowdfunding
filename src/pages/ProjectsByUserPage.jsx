import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import getToken from "../utils/getToken";
import { useParams } from "react-router-dom";

function ProjectsByUser() {
  //variables

  const [userData, setUserdata] = useState({ loading: true });
  const { id } = useParams();

  //methods
  useEffect(() => {
    const token = getToken();
    if (token) {
      fetch(`${process.env.REACT_APP_API_URL}users/${id}`, {
        method: "GET",
        headers: { Authorization: `Token ${getToken()}` },
      })
        .then((results) => {
          return results.json();
        })
        .then((data) => {
          setUserdata(data);
        });
    }
  }, [id]);

  if (userData.loading) {
    return "Loading ...";
  }
  //template
  return (
    <div id="show-profile">
      <h2>Projects by {userData.username}</h2>
      <h3>{userData.email}</h3>

      <img
        className="profileImage"
        src={userData.profile.profile_image_url}
        alt="Profile pic"
      />
      <p>{userData.profile.user_bio}</p>

      <div id="project-list">
        {userData.owner_projects.map((projectData, key) => {
          return <ProjectCard key={key} projectData={projectData} />;
        })}
      </div>
    </div>
  );
}

export default ProjectsByUser;
