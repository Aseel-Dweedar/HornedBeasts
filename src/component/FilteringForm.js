import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export class FilteringForm extends Component {
  render() {
    return (
      <div>
        <Form
          style={{
            marginTop: "10px",
            position: "fixed",
            border: "1px dashed gray",
            width: " 200px",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Number Of Horns</Form.Label>
            <br></br>
            <br></br>
            <Form.Control onChange={(e) => this.props.filterResult(e.target.value)} as="select">
              <option value="All">All</option>
              <option value="1">One</option>
              <option value="2">Tow</option>
              <option value="3">Three</option>
              <option value="100">More</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default FilteringForm;
