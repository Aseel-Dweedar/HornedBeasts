import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export class FilteringForm extends Component {
  render() {
    return (
      <div>
        <Form.Control
          onChange={(e) => this.props.filterResult(e.target.value)}
          as="select"
        >
          <option value="All">All</option>
          <option value="1">One</option>
          <option value="2">Tow</option>
          <option value="3">Three</option>
          <option value="100">More</option>
        </Form.Control>
      </div>
    );
  }
}

export default FilteringForm;
