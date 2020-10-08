import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import getToken from "../../utils/getToken";

function ProjectForm() {
  //variables

  const date = new Date();

  const [Project, setProject] = useState({
    title: "",
    description: "",
    image: "",
    goal: "",
    date_created: date.toISOString(),
    is_open: true,
    category: "toe beans",
    owner: {},
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProject((prevProject) => ({
      ...prevProject,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}content/`, {
      method: "post",
      headers: {
        Authorization: `Token ${getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Project),
    });
    return response.json();
  };
  //checks that there is value before submitting
  const handleSubmit = (e) => {
    e.preventDefault();
    postData();

    //Redirect to Posted Project
    history.push("/");
  };

  // set user to creator
  // update image library

  //template
  return (
    <form>
      <div className="form-box">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" onChange={handleChange} />
      </div>
      <div className="form-box-large">
        <label htmlFor="description">Description:</label>
        <input type="description" id="description" onChange={handleChange} />
      </div>
      <div className="form-box">
        <label htmlFor="image">Image URL:</label>
        <input type="url" id="image" onChange={handleChange} />
      </div>
      <div className="form-box">
        <label htmlFor="goal">Goal:</label>
        <input type="text" id="goal" onChange={handleChange} />
      </div>
      <div className="form-select">
        <select id="category" onChange={handleChange}>
          <option value="toe beans">toe beans</option>
          <option value="long boi">long boi</option>
          <option value="big chonk">big chonk</option>
        </select>
      </div>
      <button className="form-submit" type="submit" onClick={handleSubmit}>
        Post
      </button>
    </form>
  );
}

export default ProjectForm;
