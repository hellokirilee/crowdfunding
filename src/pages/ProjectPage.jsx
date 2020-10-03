import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getToken from "../utils/getToken";

// console.log("heheheheh", oneProject)
function ProjectPage() {
  const [projectData, setProjectData] = useState({
    pledges: [],
    images: [],
    owner: {},
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}content/${id}/`, {
      method: "GET",
      headers: { Authorization: `Token ${getToken()}` },
    })
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        // console.log(data.owner.username);
        // const userData = data.owner;
        // const pledges = data.pledges;
        // console.log(typeof userData);
        // setProjectData({ data: data, owner: userData, pledges: pledges });
        setProjectData(data);
      });
  }, [id]);

  return (
    <div>
      <h2>{projectData.title}</h2>
      <h3>Created at: {projectData.date_created}</h3>
      <h3>{`Status: ${projectData.is_open}`}</h3>
      <h3>Category: {projectData.category}</h3>
      <h3>Creator: {projectData.owner.username}</h3>
      <h3>Pledges:</h3>
      <ul>
        {projectData.pledges.map((pledgeData, key) => {
          return (
            <li key={key}>
              {pledgeData.amount} from {pledgeData.supporter}
            </li>
          );
        })}
      </ul>
      <p>
        {projectData.images.map((imageData) => {
          return <img src={imageData.content_img} alt="secret" />;
        })}
      </p>
    </div>
  );
}
export default ProjectPage;
