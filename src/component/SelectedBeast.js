import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export class SelectedBeast extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.all.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img src={this.props.all.image_url} alt={this.props.all.title} />
          </div>
          <div>{this.props.all.description}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
