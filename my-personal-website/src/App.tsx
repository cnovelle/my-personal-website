import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import { NavRoutes } from "./shared/NavRoutes.constants";
import NavigationBar from "./shared/NaviagtionBar";
import "./App.css";
import About from "./views/About";
import MyImage from "./views/code-img.png";
import Skills from "./views/Skills";
import PastWork from "./views/PastWork";

function App() {
  return (
    <div className="App vh-100" id="background-dark">
      <NavigationBar />
      <Home />
      <About />
      <Skills />
      <PastWork />
    </div>
  );
}

export default App;
