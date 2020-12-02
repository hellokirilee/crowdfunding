import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import getToken from "../../utils/getToken";
import "./UserProfile.css";

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
    return <h2>"Loading ..."</h2>;
  }

  //template
  return (
    <div class="web-form">
      <div class="static-fields">
        <div class="username">
          <h1>{userData.username}</h1>
        </div>
        <div class="email-section">Your email:</div>
        <h3 class="email-address">{userData.email}</h3>
      </div>
      <form>
        <div>
          <div className="form-box large">
            <label htmlFor="user_bio">Some things about you:</label>
            <input
              type="text"
              id="user_bio"
              onChange={handleChange}
              value={userProfile.user_bio}
            />
          </div>
          <div class="profile-pic">
            <img
              className="profileImage"
              src={userProfile.profile_image_url}
              alt="Profile pic"
            />
          </div>
          <div className="form-box">
            <label htmlFor="profile_image_url">
              Upload an new profile image URL:
            </label>
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
        </div>
      </form>{" "}
    </div>
  );
}

export default UserProfile;
