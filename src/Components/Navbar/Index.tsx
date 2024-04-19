import './Index.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function NavBar(){
    return <div id="app">
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home valami</Nav.Link>
              <Nav.Link href="/"></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  </div>
}