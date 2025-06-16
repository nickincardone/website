import React from "react";
import "./App.scss";
import Home from "./components/Home/Home";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Home />
    </Router>
  );
};

export default App;
