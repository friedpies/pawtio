import React from "react";
import LocationFilter from "./LocationFilter";
import "../styles/Launch.scss";

const Launch = ({ onSearch, onCheck, filters }) => (
  <div className="jumbotron">
    <div className="container">
      <h1 className="display-1" id="main-header">
        pawtio
      </h1>
      <h3>search for a dog-friendly place in Austin, TX</h3>
      <LocationFilter filters={filters} onSearch={onSearch} onCheck={onCheck} />
    </div>
  </div>
);

export default Launch;
