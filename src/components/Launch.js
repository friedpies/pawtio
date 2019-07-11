import React from "react";
import { Container } from "react-bootstrap";
import LocationFilter from "./LocationFilter";
import Video from "./Video";
import "../styles/Launch.scss";

const Launch = ({filters, onCheck}) => (
  <>
    <Video />
    <Container id="launch-container">
      <div />
      <div id="title-container">
        <h1 className="display-1" id="main-header">
          pawtio
        </h1>
        <h3 id="sub-heading">search for a dog-friendly place in Austin, TX</h3>
        <LocationFilter
          filters={filters}
          onCheck={onCheck}
        />
      </div>
      <div />
    </Container>
  </>
);

export default Launch;
