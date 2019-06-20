import React from "react";
import Navigation from "./Navigation";
import LocationFilter from "./LocationFilter";
import ListEntry from "./ListEntry";

const Results = ({ onCheck, filters, results }) => (
  <>
    <Navigation />
    <div className="jumbotron jumbotron-fluid" id="location-jumbo">
      <LocationFilter onCheck={onCheck} filters={filters} />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-1" />
        <div className="col-10">
          {results.map((place, index) => (
            <ListEntry key={index} placeData={place} />
          ))}
        </div>
        <div className="col-1" />
      </div>
    </div>
  </>
);

export default Results;
