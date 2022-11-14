import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar";
import RouteLinks from "./Routes";

function App() {
  return (
    <Router>
      <Navbar />
      <RouteLinks />
    </Router>
  );
}

export default App;
