import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Launch from "./Launch";
import Place from "./Place";
import "../styles/App.scss";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Launch} />
          <Route path="/place" component={Place} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
