import React from "react";
import getToken from "../utils/getToken";
//import LoginForm from "../components/LoginForm/LoginForm";

function Logout() {
  window.localStorage.clear();

  fetch(`${process.env.REACT_APP_API_URL}content`, {
    method: "GET",
    headers: { Authorization: `Token ${getToken()}` },
  });

  //template
  return (
    <button type="submit" onClick={Logout}>
      Logout
    </button>
  );
}

export default Logout;
