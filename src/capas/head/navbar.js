import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router';
import '../head/navbar.css'
import { useState } from 'react'

function NavBarExample (navBar)  {
  const [ fix, setFix] = useState(false)

  function setFixed(){
    if(window.scrollY >= 450){
      setFix(true)
    }else
      setFix(false)
  }

  window.addEventListener("scroll", setFixed)

    return (
<div className='mainDivNav'>
        <Navbar className="nav" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href=""> </Navbar.Brand>
            <Navbar.Toggle className="menu"aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className={fix ? 'navs fixed' : 'navs'} >
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