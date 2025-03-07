import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import offstrapLogo from '../Components/logo.png';

function NavBarComp() {
    return (
        <Navbar bg="black" data-bs-theme="dark" t>
            <Container className="d-flex justify-content-between align-items-center">
                {/* Logo on the left */}
                <Navbar.Brand href="#home">
                    <img src={offstrapLogo} height="30px" alt="OffStrap Logo" />
                </Navbar.Brand>

                {/* Navigation links on the right */}
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Product</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBarComp;