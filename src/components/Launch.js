import React from "react";
import LocationSearch from "./LocationSearch";
import "../styles/Launch.scss";

const Launch = ({ onTextChange, onSearch, city }) => (
  <div className="jumbotron">
    <div className="container">
      <h1 id="main-header">My App</h1>
      <LocationSearch onTextChange={onTextChange} onSearch={onSearch} />
    </div>
  </div>
);

export default Launch;
