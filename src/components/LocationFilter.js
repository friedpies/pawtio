import React from "react";
import { Form, Button } from "react-bootstrap";

const LocationFilter = ({ onSearch, filters, onCheck }) => {
  // const filterNames = Object.keys(filters);
  return (
    <Form>
      <Form.Group id="place-filters">
        {filters.map((tuple, index) => (
          <Form.Check
            key={index}
            type="checkbox"
            id={`checkbox-${index}`}
            label={tuple[0]}
            onChange={onCheck}
            checked={tuple[1]}
          />
        ))}
      </Form.Group>

      <Button variant="primary" onClick={onSearch}>
        Submit
      </Button>
    </Form>
  );
};

export default LocationFilter;
