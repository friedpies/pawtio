import React from "react";
import "../styles/Launch.scss";

const Launch = () => (
  <div className="jumbotron">
    <div className="container">
      <h1>My App</h1>
      <div className="form-group">
        <input id="location-search" type="text" className="form-control" />
        <button className="btn btn-primary">Search</button>
      </div>
    </div>
  </div>
);

export default Launch;
