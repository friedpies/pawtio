import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Launch from "./Launch";
import Place from "./Place";

import "../styles/App.scss";

class App extends Component {
  constructor(props) {
    super(props);

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

  onSearch(event) {
    this.setState({ isValidLocation: true });
  }

  render() {
    return (
      <BrowserRouter>
        {this.state.isValidLocation ? <Redirect to="/place" /> : null}
        <div className="App">
          <Route
            exact
            path="/"
            render={() => (
              <Launch
                location={this.state.location}
                onTextChange={this.onTextChange}
                onSearch={this.onSearch}
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
