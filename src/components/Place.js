import React, { Component } from "react";
import Navigation from "./Navigation";
import Axios from "axios";

class Place extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: props.city
    };
  }

  render() {
    return (
      <>
        <Navigation />
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <h1 className="display-4">{this.state.city}</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Place;
