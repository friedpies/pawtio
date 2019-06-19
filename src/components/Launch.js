import React from "react";
import LocationSearch from "./LocationSearch";
import "../styles/Launch.scss";

const Launch = ({ onTextChange, onSearch, city }) => (
  <div className="jumbotron">
    <div className="container">
      <h1 className="display-1" id="main-header">pawtio</h1>
      <h3>Enter a City</h3>
      <LocationSearch onTextChange={onTextChange} onSearch={onSearch} />
    </div>
  </div>
);

export default Launch;
