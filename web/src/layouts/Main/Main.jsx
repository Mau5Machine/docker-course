import React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";
import Navbar from "./Navbar";

const MainLayout = (props) => {
  const { children } = props;

  return (
    <div>
      <Navbar />
      <div className="content-container">{children}</div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
