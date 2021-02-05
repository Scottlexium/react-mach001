import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
    </>
  );
}
