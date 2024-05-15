import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomNavbar from "./Navibar";
import Home from "./Home";
import Weather from "./Weather";
import Recipe from "./Recipe";
import About from "./About";
const App = () => {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Weather" element={<Weather />} />
        <Route exact path="/Recipe" element={<Recipe />} />
        <Route exact path="/About" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
