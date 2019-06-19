import React from "react";
import { Form, Button } from "react-bootstrap";

const LocationSearch = ({ onTextChange, onSearch }) => (
  <>
    <Form>
      <Form.Group>
        {/* <Form.Text /> */}
        <Form.Control
          size="lg"
          type="text"
          placeholder="Large text"
          onChange={onTextChange}
        />
      </Form.Group>
    </Form>
    <Button onClick={onSearch}>Search</Button>
  </>
);

export default LocationSearch;
