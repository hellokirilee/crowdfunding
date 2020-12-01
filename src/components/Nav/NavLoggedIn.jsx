import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import getToken from "../../utils/getToken";

function NavLoggedIn() {
  const history = useHistory();
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);

  const username = localStorage.getItem("username");

  useEffect(() => {
    const token = getToken();
    setLoggedIn(token != null);
  }, [location]);

  const logout = () => {
    localStorage.clear();
    alert("We'll keep your secrets");
    history.push(`/`); // hack
    history.push(`/join`);
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/new-project">New Project</Link>
      <Link to="/profile">{username}</Link>
      <button type="submit" onClick={logout}>
        LogOut
      </button>
    </nav>
  );
}

export default NavLoggedIn;
