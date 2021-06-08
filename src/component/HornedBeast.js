import React from "react";
import Card from "react-bootstrap/Card";

class HornedBeast extends React.Component {
  addValueAndModel = () => {
    this.props.addValueAndModel(this.props.title);
  };

  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={this.props.images}
          alt={this.props.title}
          onClick={this.addValueAndModel}
        />
        <Card.Body>
          <Card.Title> {this.props.title} </Card.Title>
          <Card.Text> ❤️ = {this.props.value} </Card.Text>
          <Card.Text> {this.props.description} </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
