import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../navbarDefault/navbarDefault.css'

const NavBarDefault = () => {
    return(

        <div className='mainDivNav'>
    <Navbar className="nav" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href=""> </Navbar.Brand>
        <Navbar.Toggle className="menu"aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navigating" >
            <Nav.Link className='inicio' href="/">Inicio</Nav.Link>
            <Nav.Link className='contacto'href="/contacto">Contacto</Nav.Link>
            <Nav.Link className='curriculum'href="/cv">Curriculum</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>


    )
}

export default NavBarDefault;