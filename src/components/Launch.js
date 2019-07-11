import React, { Component } from "react";
import { Container } from "react-bootstrap";
import LocationFilter from "./LocationFilter";
import "../styles/Launch.scss";

class Launch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container id="launch-container">
        <div></div>
        <div id="title-container">
          
          <h1 className="display-1" id="main-header">
            pawtio
          </h1>
          <h3 id="sub-heading">
            search for a dog-friendly place in Austin, TX
          </h3>
          <LocationFilter
            filters={this.props.filters}
            onCheck={this.props.onCheck}
          />
        </div>
        <div></div>
      </Container>
    );
  }
}

export default Launch;
