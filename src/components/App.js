import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Launch from "./Launch";
import Place from "./Place";
import Axios from "axios";

import "../styles/App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    console.log(process.env.REACT_APP_API_URL);
    this.state = {
      city: "Austin",
      isValidLocation: false
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onTextChange(event) {
    this.setState({ city: event.target.value });
  }

  onSearch(endpoint, params) {
    this.setState({ isValidLocation: true }); // enables router forwarding
    this.queryDatabase(endpoint, params);
  }

  queryDatabase(endpoint, params) {
    const queryParams = { params: params };
    Axios.get(
      `${process.env.REACT_APP_API_URL}/${endpoint}`,
      queryParams
    ).then(response => {
      console.log(response.data);
    });
  }

  render() {
    return (
      <BrowserRouter>
        {this.state.isValidLocation ? (
          <Redirect to={`/place/${this.state.city}`} />
        ) : null}
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
