import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import getToken from "../../utils/getToken";
import NavLoggedIn from "./NavLoggedIn";
import NavLoggedOut from "./NavLoggedOut";

function Nav() {
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

  return <>{loggedIn ? <NavLoggedIn /> : <NavLoggedOut />}</>;
}

export default Nav;
