import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/logo/logo-header.svg';
import './style.css';
import { Link } from "react-scroll";

function HeaderHome () {
     return (
     <> 
       <Navbar collapseOnSelect fixed='top' expand='sm' variant='dark' >

<Container>
    <img alt='logo' src={Logo} />
    <Navbar.Toggle className='menu' aria-controls='responsive-navbar-nav' />
    <div className='header-container'>

        <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='menu-link'>
                <Link
                    activeClass="active" 
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={100}
                    to="home"
                >Início
                </Link>
                <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={100}
                    to="about"
                >Sobre
                </Link>
                <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={100}
                    to="work">Como funciona
                </Link>
                <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={100}
                    to='contact'>Contato
                </Link>
            </Nav>

        </Navbar.Collapse>

    </div>
</Container>
</Navbar>
      
      </>
     )
}

export default HeaderHome;