import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import offstrapLogo from "../Components/logo.png";

function NavBarComp() {
  return (
    <Navbar bg="black" expand="lg" data-bs-theme="dark" className="navbar-custom">
      <Container>
        {/* Logo on the left */}
        <Navbar.Brand href="#home">
          <img src={offstrapLogo} height="35px" alt="OffStrap Logo" />
        </Navbar.Brand>

        {/* Toggle button for mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar links */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home">Product</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComp;