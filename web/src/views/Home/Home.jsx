import React, { useState } from "react";
import CreateStatForm from "./CreateStatForm";
import Stats from "./Stats";
import SecondHalf from "./SecondHalf";
import { Container, Row } from "reactstrap";

const Home = () => {
  const [stats, setStats] = useState([]);
  return (
    <Container>
      <CreateStatForm stats={stats} setStats={setStats} />
      <Row className="justify-content-between mt-5">
        <Stats stats={stats} setStats={setStats} />
        <SecondHalf />
      </Row>
    </Container>
  );
};

export default Home;
