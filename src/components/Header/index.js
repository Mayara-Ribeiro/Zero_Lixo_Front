import React from "react";
import { Navbar, Nav, Container} from 'react-bootstrap';
import Logo from '../../assets/logo/logo-header.svg';



const Header = () => {
return(
    <>
    <Navbar collapseOnSelect fixed='top' expand='sm' variant='dark' >

        <Container>
            <img alt='logo' src={Logo} />
            <Navbar.Toggle className='menu' aria-controls='responsive-navbar-nav' />
            <div className='header-container'>


                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav >
                        <p
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={100}
                            to="banner"
                        >Início
                        </p>
                        <p
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={100}
                            to="about"
                        >Sobre
                        </p>
                        <p
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={100}
                            to="projects">Projetos
                        </p>
                        <p
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={100}
                            to="ourTeam">Nosso time
                        </p>
                        <p
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={100}
                            to='contact'>Contato
                        </p>
                    </Nav>
                </Navbar.Collapse>

            </div>
        </Container>
    </Navbar>
</>)
}

export default Header;