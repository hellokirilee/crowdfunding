import React from "react";
import { Link, useLocation } from "react-router-dom";
// import "./Footer.css";

function Footer() {
  //   const history = useHistory();
  // const location = useLocation();
  //   const [loggedIn, setLoggedIn] = useState(false);

  //   const username = localStorage.getItem("username");

  return (
    <footer>
      <h3>
        <Link to="/about">About OnlyCats</Link>
      </h3>
    </footer>
  );
}

export default Footer;
