import React from "react";
import { Link } from "react-router-dom";
import "../styles/Launch.scss";

const Launch = ({ onTextChange, onSearch, city }) => (
  <div className="jumbotron">
    <div className="container">
      <h1 id="main-header">My App</h1>
      <div className="form-group">
        <input
          id="location-search"
          type="text"
          className="form-control"
          onChange={onTextChange}
        />
        <button className="btn btn-primary" onClick={onSearch}>Search</button>
      </div>
    </div>
  </div>
);

export default Launch;
