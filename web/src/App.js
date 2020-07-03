import React from "react";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import { Container } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container className="text-center">
        <Stats />
      </Container>
    </div>
  );
}

export default App;
