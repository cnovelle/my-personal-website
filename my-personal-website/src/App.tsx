//Library Imports
import * as React from "react";
import { Container } from "react-bootstrap";

//App Imports
import "./App.css";
import Home from "./views/Home";
import NavigationBar from "./shared/NaviagtionBar";
import PastWork from "./views/PastWork";
import Skills from "./views/Skills";

function App() {
  return (
    <div className="App" id="background-dark">
      <Container>
        <NavigationBar />
        <Home />
        <Skills />
        <PastWork />
      </Container>
    </div>
  );
}

export default App;
