
import './Index.css'

import 'bootstrap/dist/css/bootstrap.css';
import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function NavBar(){
    return <div id="app">
    <Navbar expand="lg" className="bg-body-tertiary">
        <span className="navbar-brand" id='text'>Kúltúra és Népcsoportok</span>
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/kultura">Kultúrális különlegességek</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  </div>
}