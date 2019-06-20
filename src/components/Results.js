import React, { Component } from "react";
import Navigation from "./Navigation";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgUrl: ""
    };
  }
  componentDidMount() {

  }

  render() {
    return (
      <>
        <Navigation />
        <div className="jumbotron jumbotron-fluid" id="location-jumbo">
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

export default Results;
