import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function NavBar() {
    return (
        <Navbar bg="white" expand="lg" className="shadow-sm py-3" fixed="top">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="fw-bold fs-3 text-primary">
                    🛍️ FakeStore
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/" className="px-3 py-2 mx-1 fw-medium">
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/products" className="px-3 py-2 mx-1 fw-medium">
                            Products
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/add-product" className="px-3 py-2 mx-1 fw-medium">
                            Sell
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
