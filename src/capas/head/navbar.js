import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router';
import '../head/navbar.css'

const NavBarExample = () => {
    return (
<div className='mainDivNav'>
        <Navbar className="nav" variant="dark" expand="rg">
          <Container>
            <Navbar.Brand href=""> </Navbar.Brand>
            <Navbar.Toggle className="menu"aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navs">
                <Nav.Link className='inicio' href="/">Inicio</Nav.Link>
                <Nav.Link className='contacto'href="/contacto">Contacto</Nav.Link>
                <Nav.Link className='curriculum'href="/cv">Curriculum</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <section className="outlet">
          <Outlet> </Outlet>
        </section>
</div>

 ); 
};

export default NavBarExample;