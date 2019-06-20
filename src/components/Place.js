import React, { Component } from "react";
import Navigation from "./Navigation";
import Axios from "axios";

class Place extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: props.city,
      bgUrl: ""
    };
  }

  componentDidMount() {
    // fetchDataFor City
    Axios.get(`${process.env.REACT_APP_API_URL}/city`, {
      params: {
        q: this.state.city
      }
    }).then(({ data }) => {
      this.setState({ bgUrl: data.backgroundImages[0] }, () => {
        const updatedBg = {};
        document.getElementById(
          "location-jumbo"
        ).style.backgroundImage = `url('${this.state.bgUrl}')`;
      });
    });
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

export default Place;
