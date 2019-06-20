import React from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/LocationFilter.scss";

const LocationFilter = ({ filters, onCheck }) => {
  return (
    <Form>
      <Form.Group id="place-filters">
        {filters.map((tuple, index) => (
          <Form.Check
            inline
            className="filter p-2"
            key={index}
            type="checkbox"
            id={`checkbox-${index}`}
            label={tuple[0]}
            onChange={onCheck}
            checked={tuple[1]}
          />
        ))}
      </Form.Group>
    </Form>
  );
};

export default LocationFilter;
