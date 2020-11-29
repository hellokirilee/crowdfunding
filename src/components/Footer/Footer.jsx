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
      <Link to="/">Placeholder 1 </Link>
      <Link to="/">Placeholder 2 </Link>
      <Link to="/">Placeholder 3 </Link>
    </footer>
  );
}

export default Footer;
