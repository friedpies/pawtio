import React from "react";
import { Consumer } from "./context";
import "../styles/Launch.scss";

const Launch = () => (
  <div className="jumbotron">
    <div className="container">
      <h1 id="main-header">My App</h1>
      <Consumer>
        {({ onTextChange }) => (
          <div className="form-group">
            <input
              id="location-search"
              type="text"
              className="form-control"
              onChange={onTextChange}
            />
            <button className="btn btn-primary">Search</button>
          </div>
        )}
      </Consumer>
    </div>
  </div>
);

export default Launch;
