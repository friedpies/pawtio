import React from "react";
import Navigation from "./Navigation";

const Place = ({ city }) => (
  <>
    <Navigation />
    <div className="container">
      <div className="row">
        <h1 className="display-4">{city}</h1>
      </div>
    </div>
  </>
);

export default Place;
