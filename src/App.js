import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";

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
          <Route path="/">
            <Home />
          </Route>
          <Route path="/logout">
            <LogoutPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
