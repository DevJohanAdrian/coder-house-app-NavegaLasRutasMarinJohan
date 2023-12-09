import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import _default from 'react-bootstrap/Nav';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import logo from '../../../assets/logo/logo.png';
import '../css/navbar.css';
import { CartContext } from '../../art/contexts/CartContext';


export const NavbarMenu = () => {
    const [cart] = useContext(CartContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>

            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <NavLink exact className="navbar-brand" to="/">
                                    Sitio Artista
                                </NavLink>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div
                                    className="collapse navbar-collapse"
                                    id="navbarSupportedContent"
                                >
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" exact
                                                className="nav-link active"
                                                aria-current="page"
                                                to="/"
                                            >
                                                Home
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                                to="/picture">
                                                Pintura
                                            </NavLink>

                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                                to="/sculture">
                                                Escultura
                                            </NavLink>
                                        </li>
                                        {/* <li className="nav-item">
                                            <NavLink
                                                className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                                to="/search">
                                                Search
                                            </NavLink>
                                        </li> */}

                                        <NavDropdown title="Catalogo" id="basic-nav-dropdown">
                                            <NavDropdown.Item> <Link className='navbar-brand' to="/picture" >Pintura</Link> </NavDropdown.Item>
                                            <NavDropdown.Item> <Link className='navbar-brand' to="/sculture" >Escultura</Link> </NavDropdown.Item>

                                            {/* <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">
                                                    Separated link
                                            </NavDropdown.Item> */}
                                        </NavDropdown>


                                    </ul>
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
                                        <Link to="/cart" >
                                            <div class="cart">
                                               {cart.length > 0 ? <span class="count">{cart.length}</span> : ''} 

                                                <Button variant="link" onClick={handleShow}>
                                                    <FontAwesomeIcon icon={faCartShopping} size="xl" style={{ color: "#00000'" }} />
                                                </Button>

                                            </div>
                                        </Link>



                                        {/* <Offcanvas placement={"end"} name={"end"} show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Carrito</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                               Agregar componente de miniatura del producto
                            </Offcanvas.Body>
                        </Offcanvas> */}
                                    </Navbar.Collapse>
                                    {/* Shopping car end*/}
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </>

    );
}
