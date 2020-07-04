import React, { useEffect } from "react";
import axios from "axios";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Row,
  Col,
  Button,
} from "reactstrap";

const Stats = (props) => {
  const { stats, setStats } = props;

  useEffect(() => {
    axios.get("http://localhost:4000/stats").then((response) => {
      setStats(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios
      .post("http://localhost:4000/stats/delete", {
        id,
      })
      .then((response) => {
        if (response.data.deletedCount === 1) {
          const newStats = stats.filter((stat) => stat._id !== id);
          setStats(newStats);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Col xs="12" md="6" className="container-col">
      <h2>Stats</h2>
      <ListGroup>
        {stats.length > 0 ? (
          stats.map((stat) => (
            <ListGroupItem key={stat._id} className="justify-content-between">
              <ListGroupItemHeading>{stat.name}</ListGroupItemHeading>
              <ListGroupItemText>{stat.description}</ListGroupItemText>
              <Button color="primary" onClick={() => handleDelete(stat._id)}>
                Delete
              </Button>
            </ListGroupItem>
          ))
        ) : (
          <ListGroupItem>
            <ListGroupItemHeading>No Stats to show!</ListGroupItemHeading>
          </ListGroupItem>
        )}
      </ListGroup>
    </Col>
  );
};

export default Stats;
