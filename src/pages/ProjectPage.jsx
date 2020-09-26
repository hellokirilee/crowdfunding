import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getToken from "../utils/getToken";

// console.log("heheheheh", oneProject)
function ProjectPage() {
  const [projectData, setProjectData] = useState({ pledges: [] });
  const { id } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}content/[id]`, {
      method: "GET",
      headers: { Authorization: `Token ${getToken()}` },
    })
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        console.log("woooo 2", data);
        setProjectData(data);
      });
  }, [id]);

  return (
    <div>
      <h2>{projectData.title}</h2>
      <h3>Created at: {projectData.date_created}</h3>
      <h3>{`Status: ${projectData.is_open}`}</h3>
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
    </div>
  );
}
export default ProjectPage;
