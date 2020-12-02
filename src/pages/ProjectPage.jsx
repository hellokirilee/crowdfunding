import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getToken from "../utils/getToken";
import PledgeForm from "../components/PledgeForm/PledgeForm";
import ImageUpload from "../components/ProjectForm/ImageUpload";

// console.log("heheheheh", oneProject)
function ProjectPage() {
  const [projectData, setProjectData] = useState({
    loading: true,
    pledges: [],
    images: [],
    owner: {},
  });
  const { id } = useParams();

  const userId = parseInt(localStorage.getItem("user_id"));

  const goalMet = projectData.pledge_total >= projectData.goal;
  const isOwner = projectData.owner.id === userId;
  console.log({ projectData, userId, goalMet, isOwner });

  function FormatDate(date) {
    var date = new Date(date);
    var options = {
      year: "numeric",
      // month: "numeric",
      month: "long",
      weekday: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    var formattedDate = new Intl.DateTimeFormat("en-AU", options).format(date);
    return formattedDate;
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}content/${id}/`, {
      method: "GET",
      headers: { Authorization: `Token ${getToken()}` },
    })
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        //keeping this code here as weird things have happened
        // console.log(data.owner.username);
        // const userData = data.owner;
        // const pledges = data.pledges;
        // console.log(typeof userData);
        // setProjectData({ data: data, owner: userData, pledges: pledges });

        //set blank list for images, to only be called if there is data available to user
        setProjectData({ images: [], ...data });
      });
  }, [id]);

  if (projectData.loading) {
    return <h2>"Loading ..."</h2>;
  }

  return (
    <div id="project-page">
      <h2>{projectData.title}</h2>
      <div class="project-cover-img">
        <img src={projectData.image} alt="" />
      </div>
      <h3>Posted on: {FormatDate(projectData.date_created)}</h3>
      {/* <h3>{`Status: ${projectData.is_open}`}</h3> */}
      <h3>Category: {projectData.category}</h3>
      <h3>Goal: {projectData.goal} treats</h3>
      <h3>Treats Promised:{projectData.pledge_total}</h3>
      <h3>Creator: {projectData.owner.username}</h3>
      <div style={{ filter: goalMet ? null : "blur(20px)" }}>
        {projectData.images.map((imageData) => {
          return (
            <figure>
              <img src={imageData.content_img} alt="secret" />
              <figcaption>Image Name: {imageData.content_img_name}</figcaption>
            </figure>
          );
        })}
      </div>
      {/*check that they are project Owner before allowing to upload image*/}
      {isOwner ? <ImageUpload projectId={id} /> : null}

      {projectData.pledges.map((pledgeData, key) => {
        return (
          <ul>
            <h4>Pledges:</h4>
            <li key={key}>
              {pledgeData.amount} from {pledgeData.supporter}
              <br />
              {pledgeData.comment}
            </li>
          </ul>
        );
      })}

      {/* Does not return the pledge form if they are owner */}
      <div>{!isOwner ? <PledgeForm projectId={id} /> : null}</div>
    </div>
  );
}
export default ProjectPage;
