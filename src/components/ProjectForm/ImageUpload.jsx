import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import getToken from "../../utils/getToken";

function ImageUpload({ projectId }) {
  //variables
  const [img, setImg] = useState({
    content_img_name: "",
    content_img: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setImg((prevImg) => ({
      ...prevImg,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}content/${projectId}/upload`,
      {
        method: "post",
        headers: {
          Authorization: `Token ${getToken()}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(img),
      }
    );
    return response.json();
  };
  //checks that there is value before submitting
  const handleSubmit = (e) => {
    e.preventDefault();
    postData().then((response) => {
      console.log(response);
      alert("Image uploaded!");
      history.push(`/`); // hack
      history.push(`/project/${projectId}#upload`);

      //hack has the page refresh so it's easier to see image has uploaded
    });
  };

  //template
  return (
    <form id="upload">
      <div className="form-box">
        <label htmlFor="content_img_name">File Name:</label>
        <input type="text" id="content_img_name" onChange={handleChange} />

        <label htmlFor="content_img">Image URL:</label>
        <input type="url" id="content_img" onChange={handleChange} />
      </div>
      <button className="form-submit" type="submit" onClick={handleSubmit}>
        Upload!
      </button>
    </form>
  );
}

export default ImageUpload;
