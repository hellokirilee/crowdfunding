import React, { useState, useEffect } from "react";
import getToken from "../../utils/getToken";

import { useParams } from "react-router-dom";
import ProfileCard from "../ProfileCard/ProfileCard";

function ListOfUsers() {
  //variables
  const [profileList, setProfileList] = useState([]);
  const [userData, setUserdata] = useState({ loading: true });
  const { id } = useParams();

  //methods
  useEffect(() => {
    const token = getToken();
    if (token) {
      fetch(`${process.env.REACT_APP_API_URL}users`, {
        method: "GET",
        headers: { Authorization: `Token ${getToken()}` },
      })
        .then((results) => {
          return results.json();
        })
        .then((data) => {
          setProfileList(data);
        });
    }
  }, [id]);

  if (userData.loading) {
    return <h2>"Loading ..."</h2>;
  }
  //template
  return (
    <div id="profile-list">
      {profileList.map((profileData, key) => {
        return <ProfileCard key={key} profileData={profileData} />;
      })}
    </div>
  );
}

export default ListOfUsers;
