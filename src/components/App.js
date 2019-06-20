import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Launch from "./Launch";
import Results from "./Results";

import "../styles/App.scss";

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
      ]
    };

    this.onSearch = this.onSearch.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  onCheck(event) {
    const checkboxId = event.target.id;
    const index = parseInt(checkboxId.slice(9, checkboxId.length));
    const updatedCheckboxes = this.state.filters.slice();
    updatedCheckboxes[index] = [
      updatedCheckboxes[index][0],
      event.target.checked
    ];
    this.setState({
      filters: updatedCheckboxes
    });
  }

  onSearch(event) {
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
          <Route path="/results" render={() => <Results />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
