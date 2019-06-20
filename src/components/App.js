import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Launch from "./Launch";
import Place from "./Place";
import Axios from "axios";

import "../styles/App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    // console.log(process.env.REACT_APP_API_URL);
    this.state = {
      city: "",
      isValidLocation: false
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onTextChange(event) {
    this.setState({ city: event.target.value.toLowerCase() });
  }

  onSearch(endpoint, params) {
    this.setState({ isValidLocation: true }); // enables router forwarding
  }

  render() {
    return (
      <BrowserRouter>
        {this.state.isValidLocation ? <Redirect to={`/place`} /> : null}
        <div className="App">
          <Route
            exact
            path="/"
            render={() => (
              <Launch
                onTextChange={this.onTextChange}
                onSearch={this.onSearch}
                city={this.state.city}
              />
            )}
          />
          <Route
            path="/place"
            render={() => <Place city={this.state.city} />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
