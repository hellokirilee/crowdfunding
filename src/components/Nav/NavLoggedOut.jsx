import React from "react";
import { Link } from "react-router-dom";

function NavLoggedOut() {
  return (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/join">Join</Link>
    </nav>
  );
}

export default NavLoggedOut;
