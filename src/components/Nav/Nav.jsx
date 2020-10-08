import React from "react";
import { Link, useHistory } from "react-router-dom";

function Nav() {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/project">Project</Link>
      <Link to="/login">Login</Link>
      <Link to="/new-project">New Project</Link>
      <button type="submit" onClick={logout}>
        LogOut
      </button>
    </nav>
  );
}

export default Nav;
