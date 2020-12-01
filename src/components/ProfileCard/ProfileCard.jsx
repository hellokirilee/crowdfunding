import React from "react";
import { Link } from "react-router-dom";
import "./ProfileCard.css";

function ProfileCard(props) {
  const { profileData } = props;
  return (
    <div className="profile-card">
      <Link to={`/users/${profileData.id}`}>
        {/* <img src={profileData.image} alt="Creator Profile Pic" /> */}

        <h3>{profileData.username}</h3>
        {/* <p>{profileData.description}</p> */}
      </Link>
    </div>
  );
}

export default ProfileCard;
