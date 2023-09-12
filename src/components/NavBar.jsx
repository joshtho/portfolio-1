import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg='dark' data-bs-theme="dark">
        <Container>
          <Nav>
            <Nav.Link as={Link} to='/'>JKT</Nav.Link>
            <Nav.Link as={Link} to='/links'>My Links</Nav.Link>
            <Nav.Link as={Link} to='/resume'>Resume</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  );
}

export default NavBar;