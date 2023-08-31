
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    // <Navbar expand="lg" className="bg-body-tertiary">
    //   <Container >
    //     <Navbar.Brand as={Link} to='/'>JKT</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link as={Link} to='/links'>My Links</Nav.Link>
    //         <Nav.Link as={Link} to='/'>Homepage</Nav.Link>
    //         <Nav.Link as={Link} to='/bio'>Bio</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <Nav variant="tabs">
        
      <Nav.Item>
        <Nav.Link as={Link} to='/'>JKT</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to='/links'>My Links</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to='/bio'>Bio</Nav.Link>
      </Nav.Item>
        
        {/* <Nav.Link eventKey="link-1">My Links</Nav.Link> */}
    </Nav>
  );
}

export default NavBar;