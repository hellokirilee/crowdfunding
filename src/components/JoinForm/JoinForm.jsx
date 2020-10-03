import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function JoinForm() {
  // //variables
  // const [credentials, setCredentials] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });

  // const history = useHistory();

  // const handleChange = (e) => {
  //   const { id, value } = e.target;
  //   setCredentials((prevCredentials) => ({
  //     ...prevCredentials,
  //     [id]: value,
  //   }));
  // };

  // const postData = async () => {
  //   const response = await fetch(
  //     `${process.env.REACT_APP_API_URL}join/`,
  //     {
  //       method: "post",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(credentials),
  //     }
  //   );
  //   return response.json();
  // };
  // //checks that there is value before submitting
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (credentials.username && credentials.password) {
  //     postData().then((response) => {
  //       window.localStorage.setItem("token", response.token);
  //       window.localStorage.setItem("username", credentials.username);
  //       window.localStorage.setItem("user_id"), response.id);
  //       history.push("/");
  //     });
  //   }
  // };

  //template
  return (
    <form>
      <div className="form-box">
        <label htmlFor="username">Username:</label>
        {/* <input type="text" id="username" onChange={handleChange} /> */}
      </div>
      <div className="form-box">
        <label htmlFor="email">Email:</label>
        {/* <input type="email" id="email" onChange={handleChange} /> */}
      </div>
      <div className="form-box">
        <label htmlFor="password">Password:</label>
        {/* <input type="password" id="password" onChange={handleChange} /> */}
      </div>
      <button className="form-submit" type="submit">
        {/* onClick={handleSubmit}> */}
        Join
      </button>
    </form>
  );
}

export default JoinForm;
