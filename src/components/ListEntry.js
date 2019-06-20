import React from "react";
import "../styles/ListEntry.scss";

const ListEntry = ({ placeData }) => (
  <div className="my-5 list-entry-container">
    <img src={placeData.images[0]} className="place-img" alt={placeData.name}/>
    <div className="place-details">
      <h5>{placeData.name}</h5>
      <div>{placeData.address.lineOne}</div>
      {placeData.address.lineTwo.length > 0 ? (
        <div>{placeData.address.lineTwo}</div>
      ) : null}
      <div>{placeData.phone}</div>
      <a href={placeData.website} target="_blank" rel="noopener noreferrer">
        {placeData.website}
      </a>
    </div>
  </div>
);

export default ListEntry;
