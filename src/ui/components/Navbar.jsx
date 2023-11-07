import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import _default from 'react-bootstrap/Nav';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../assets/logo/logo.png';





export const NavbarMenu = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (

        <>
            <Navbar bg='dark' data-bs-theme="dark" fixed='top' expand="lg" className="bg-body-tertiary">
                <Container>
                    {/* <Navbar.Brand href="#home"> <img src={logo} className="logo" alt="Logo" /></Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='navbar-brand' to="/" >INICIO</Link>

                            <div className="navbar-collapse">
                                <div className="navbar-nav">

                                    <NavLink
                                        className={ ({isActive})=> `nav-item nav-link ${isActive ? 'active' : ''}` } 
                                        to="/picture">
                                      PINTURA
                                    </NavLink>

                                    
                                    <NavLink
                                        className={ ({isActive})=> `nav-item nav-link ${isActive ? 'active' : ''}` } 
                                        to="/sculture">
                                      ESCULTURA
                                    </NavLink>
                                    {/* <NavLink
                                        className="nav-item nav-link"
                                        to="/dc"
                                    >
                                        DC
                                    </NavLink> */}
                                </div>
                            </div>

                            {/* Old links */}
                            {/* <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Tienda</Nav.Link>  */}



                            <NavDropdown title="CATALOGO" id="basic-nav-dropdown">
                                <NavDropdown.Item> <Link className='navbar-brand' to="/picture" >PINTURA</Link> </NavDropdown.Item>
                                <NavDropdown.Item> <Link className='navbar-brand' to="/sculture" >ESCULTURA</Link> </NavDropdown.Item>

                                {/* <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                </NavDropdown.Item> */}
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>

                    {/* Shopping car begin*/}
                    <Navbar.Collapse className="justify-content-end">
                        {/* <Navbar.Text>
                            Signed in as: <a href="#login">Johan Marin</a>
                        </Navbar.Text> */}

                        {/* <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                            <ul className="navbar-nav ml-auto">
                                <NavLink
                                    className="nav-item nav-link"
                                    to="/login"
                                >
                                    Logout
                                </NavLink>
                            </ul>
                        </div> */}

                        <Button variant="link" onClick={handleShow}>
                            <FontAwesomeIcon icon={faCartShopping} flip="horizontal" size="lg" style={{ color: "#fafafa", }} />
                        </Button>

                        <Offcanvas placement={"end"} name={"end"} show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Carrito</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                Some text as placeholder. In real life you can have the elements you
                                have chosen. Like, text, images, lists, etc.
                            </Offcanvas.Body>
                        </Offcanvas>
                    </Navbar.Collapse>
                    {/* Shopping car end*/}




                </Container>
            </Navbar>

        </>

    );
}

