import React from "react";
import Card from "react-bootstrap/Card";

class HornedBeast extends React.Component {
  renderModel = () => {
    this.props.renderModel(this.props.title);
  };

  render() {
    return (
      <div
        style={{
          maxWidth: "300px",
          width: "300px",
          flex: 1,
          flexBasis: "20%",
          margin: "10px",
        }}
      >
        <Card
          text="white"
          className="text-center p-3"
          style={{ width: "100%", height: "500px", backgroundColor: "#D83A56" }}
        >
          <Card.Img
            style={{ height: "250px" }}
            variant="top"
            src={this.props.images}
            alt={this.props.title}
            onClick={this.renderModel}
          />
          <Card.Body>
            <Card.Title> {this.props.title} </Card.Title>
            <Card.Text> ❤️ = {this.props.value} </Card.Text>
            <Card.Text> {this.props.description} </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeast;
