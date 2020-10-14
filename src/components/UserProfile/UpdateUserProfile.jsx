import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import getToken from "../../utils/getToken";

function UserProfile() {
  //variables

  const id = localStorage.getItem("user_id");

  const [userProfile, setUserProfile] = useState({
    profile_image_url: "",
    user_bio: "",
  });
  const [userData, setUserData] = useState({ loading: true });

  //const history = useHistory(); - not needed as page being reloaded

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserProfile((prevUserProfile) => ({
      ...prevUserProfile,
      [id]: value,
    }));
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users/${id}/`, {
      method: "GET",
      headers: { Authorization: `Token ${getToken()}` },
    })
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setUserProfile(data.profile);
        setUserData(data);
      });
  }, [id]);

  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}users/${id}/`,
      {
        method: "put",
        headers: {
          Authorization: `Token ${getToken()}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ profile: userProfile }),
      }
    );
    return response.json();
  };

  //checks that there is value before submitting
  const handleSubmit = (e) => {
    e.preventDefault();
    postData().then((response) => {
      console.log(response);
      window.location.reload();
    });
  };

  if (userData.loading) {
    return "Loading";
  }

  //template
  return (
    <div>
      <h1>{userData.username}</h1>
      <h3>{userData.email}</h3>
      <form>
        <div className="big-form-box">
          <label htmlFor="user_bio">About You</label>
          <input
            type="text"
            id="user_bio"
            onChange={handleChange}
            value={userProfile.user_bio}
          />
        </div>
        <div className="form-box">
          <img
            className="profileImage"
            src={userProfile.profile_image_url}
            alt="Profile pic"
          />
          <label htmlFor="profile_image_url">Upload Image URL:</label>
          <input
            type="URL"
            id="profile_image_url"
            onChange={handleChange}
            value={userProfile.profile_image_url}
          />
        </div>

        <button className="form-submit" type="submit" onClick={handleSubmit}>
          Create!
        </button>
      </form>{" "}
    </div>
  );
}

export default UserProfile;
