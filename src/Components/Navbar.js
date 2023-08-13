import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from './CardWidget';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#inicio">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#prod">Productos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
     
      <CardWidget/>
    
    </Navbar>
  );
}

export default BasicExample;