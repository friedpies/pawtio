import React, { Component } from "react";
import Navigation from "./Navigation";
import LocationFilter from "./LocationFilter";

const Results = ({onSearch, onCheck, filters}) => (
  <>
    <Navigation />
    <div className="jumbotron jumbotron-fluid" id="location-jumbo">
      <div className="container">
        <div className="row">
          <h1 className="display-4">Austin, TX</h1>
        </div>
      </div>
    </div>
    <LocationFilter
      onSearch={onSearch}
      onCheck={onCheck}
      filters={filters}
    />
  </>
);

export default Results;
