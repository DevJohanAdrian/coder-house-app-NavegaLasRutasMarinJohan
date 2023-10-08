import Container from 'react-bootstrap/Container';
import _default from 'react-bootstrap/Nav';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'


import logo from './logo.png'





 export const NavbarMenu = () => { 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    
    return (

        <>
        <Navbar bg='dark' data-bs-theme="dark" fixed='top' expand="lg" className="bg-body-tertiary">
            <Container>
            <Navbar.Brand href="#home"> <img src={logo} className="logo" alt="Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Tienda</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                    Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="#action/3.4">
                    Separated link
                    </NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="#login">Johan Marin</a>
                </Navbar.Text>

                <Button variant="link" onClick={handleShow}>
                    <FontAwesomeIcon icon={faCartShopping} flip="horizontal" size="lg" style={{color: "#fafafa",}} />
                </Button>

                <Offcanvas  placement={"end"} name={"end"}  show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Carrito</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
            </Offcanvas>
            </Navbar.Collapse>

            


            </Container>
        </Navbar>
        
        </>
   
    );
  }
  
  