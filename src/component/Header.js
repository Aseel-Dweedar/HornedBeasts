import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">HORNED BEASTS</Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}
export default Header;
