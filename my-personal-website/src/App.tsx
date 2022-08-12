import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import { NavRoutes } from "./shared/NavRoutes.constants";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={NavRoutes.HOME} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
