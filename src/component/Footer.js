import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
class Footer extends React.Component {
  render() {
    const authorName = "ASEEL DWEEDAR";
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Done by {authorName}</Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}
export default Footer;
