import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export class SelectedBeast extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <img src={this.props.images} alt={this.props.title} />
            </div>
            <div>{this.props.description}</div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.close}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
