import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import NewProjectPage from "./pages/NewProjectPage";
import PledgeForm from "./components/PledgeForm/PledgeForm";
import UpdateProfilePage from "./pages/UpdateUserProfilePage";
import ProjectsByUser from "./pages/ProjectsByUserPage";

// import Nav from "./components/Nav";
// import "././components/Navbar/Navbar.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <body>
          <Switch>
            <Route path="/project/:id">
              <ProjectPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/join">
              <JoinPage />
            </Route>
            <Route path="/new-project">
              <NewProjectPage />
            </Route>
            <Route path="/pledge">
              <PledgeForm />
            </Route>
            <Route path="/profile">
              <UpdateProfilePage />
            </Route>
            <Route path="/users/:id">
              <ProjectsByUser />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </body>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
