import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListGroup, ListGroupItem, Row, Col, Button } from "reactstrap";

const Stats = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/stats").then((response) => {
      setStats(response.data);
    });
  }, []);

  return (
    <Row className="justify-content-center">
      <Col xs="6">
        <ListGroup>
          <h1>Stats</h1>
          {stats.map((stat) => (
            <ListGroupItem key={stat._id} className="justify-content-between">
              {stat.name} <Button color="primary">Delete</Button>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default Stats;
