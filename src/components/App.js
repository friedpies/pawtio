import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Launch from "./Launch";
import Results from "./Results";
import Axios from "axios";

import "../styles/App.scss";

const searchForResults = filters => {
  console.log();
  const queryParams = {};
  filters.forEach(filter => {
    queryParams[filter[0]] = filter[1];
  });
  return Axios.get(`${process.env.REACT_APP_API_URL}/places`, {
    params: queryParams
  });
};

class App extends Component {
  constructor(props) {
    super(props);
    // console.log(process.env.REACT_APP_API_URL);
    this.state = {
      didSearch: false,
      filters: [
        ["indoors", false],
        ["outdoors", false],
        ["fenced", false],
        ["off-leash allowed", false],
        ["covered patio", false],
        ["food available", false],
        ["drinks", false]
      ],
      searchResults: []
    };

    this.onSearch = this.onSearch.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  onCheck({ target }) {
    const checkboxId = target.id;
    const index = parseInt(checkboxId.slice(9, checkboxId.length));
    const updatedCheckboxes = this.state.filters.slice();
    updatedCheckboxes[index] = [updatedCheckboxes[index][0], target.checked];
    this.setState({
      filters: updatedCheckboxes
    });
  }

  onSearch() {
    searchForResults(this.state.filters)
      .then(({ data }) => {
        console.log("SEARCH RESULTS ", data);
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({ didSearch: true }); // enables router forwarding
  }

  render() {
    return (
      <BrowserRouter>
        {this.state.didSearch ? <Redirect to={`/results`} /> : null}
        <div className="App">
          <Route
            exact
            path="/"
            render={() => (
              <Launch
                onSearch={this.onSearch}
                onCheck={this.onCheck}
                filters={this.state.filters}
              />
            )}
          />
          <Route
            path="/results"
            render={() => (
              <Results
                onSearch={this.onSearch}
                onCheck={this.onCheck}
                filters={this.state.filters}
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
