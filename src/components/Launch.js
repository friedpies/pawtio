import React from "react";
import { Container } from "react-bootstrap";
import LocationFilter from "./LocationFilter";
import "../styles/Launch.scss";

const Launch = ({ onCheck, filters }) => (
  <div className="jumbotron">
    <Container>
      <h1 className="display-1 mb-5" id="main-header">
        pawtio
      </h1>
      <h3 className="mb-5">search for a dog-friendly place in Austin, TX</h3>
      <LocationFilter filters={filters} onCheck={onCheck} />
    </Container>
  </div>
);

export default Launch;
