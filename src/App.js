import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import JoinPage from "./pages/JoinPage";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/project/:id">
            <ProjectPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/logout">
            <LogoutPage />
            <Route path="/join">
              <JoinPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
