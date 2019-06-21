import React from "react";
import Navigation from "./Navigation";
import LocationFilter from "./LocationFilter";
import ListEntry from "./ListEntry";

const Results = ({ onCheck, filters, results }) => {
  const returnResultsCount = resultsArr => {
    if (resultsArr.length === 1) {
      return "1 result";
    } else if (resultsArr.length > 1) {
      return `${resultsArr.length} results`;
    } else {
      return "";
    }
  };

  return (
    <>
      <Navigation />
      <div className="jumbotron jumbotron-fluid" id="location-jumbo">
        <LocationFilter onCheck={onCheck} filters={filters} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-1" />
          <div className="col-10">
            {<h5>{returnResultsCount(results)}</h5>}
            {results.map((place, index) => (
              <ListEntry key={index} placeData={place} />
            ))}
          </div>
          <div className="col-1" />
        </div>
      </div>
    </>
  );
};

export default Results;
