import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginForm() {
  //variables
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();
  //methods
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}login/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    return response.json();
  };
  //checks that there is value before submitting
  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postData().then((response) => {
        window.localStorage.setItem("token", response.token);
        window.localStorage.setItem("username", credentials.username);
        window.localStorage.setItem("user_id", response.user_id);
        window.localStorage.setItem("is_staff", response.is_staff);
        history.push("/");
        console.log(response);
      });
    }
  };

  //template
  return (
    <form>
      <div class="web-form">
        <div className="form-box">
          <label htmlFor="Username:">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            onChange={handleChange}
          />
        </div>
        <div className="form-box">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

        <button className="form-submit" type="submit" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
