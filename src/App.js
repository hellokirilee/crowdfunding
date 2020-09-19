import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Nav from "./components/Nav/Nav";
import Home from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <Router>
      <div>
        <nav />
        <Switch>
          <Route path="/projet">
            <ProjectPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App
