import '../css/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faEnvelope, faPhone, faFax } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
    return (
        <footer className='bg-ligth text-dark pt-5 pb-4'>
            <div className='container text-center text-md-start'>
                <div className=' row text-center text-md-start'>
                    {/* <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                        <h5 className='text-uppercase mb-4 font-weight-bold text-primary'>Nosotros</h5>
                        <hr className='mb-4' />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta aperiam vitae doloremque explicabo magnam repellendus corporis labore, culpa ut facilis dolorum quibusdam laborum, voluptatum, voluptate neque enim inventore quae hic?</p>
                    </div> */}

                    <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                        <h5 className='text-uppercase mb-4 font-weight-bold text-primary'>About</h5>
                        <hr className='mb-4' />
                        <p><a href="#" className='text-dark'>About us</a></p>
                        <p><a href="#" className='text-dark'>Advertising Opportunities</a></p>
                        <p><a href="#" className='text-dark'>Contact Us</a></p>
                        <p><a href="#" className='text-dark'>Work With Us</a></p>


                    </div>

                    <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                        <h5 className='text-uppercase mb-4 font-weight-bold text-primary'>Need help</h5>
                        <hr className='mb-4' />
                        <p><a href="#" className='text-dark'>Getting Started</a></p>
                        <p><a href="#" className='text-dark'>Contact Us</a></p>
                        <p><a href="#" className='text-dark'>FAQ's</a></p>
                        <p><a href="#" className='text-dark'>Press</a></p>


                    </div>

                    <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                        <h5 className='text-uppercase mb-4 font-weight-bold text-primary'>Contact us</h5>
                        <hr className='mb-4' />
                        <p><a href="#" className='text-dark'>Sales</a></p>
                        <p><a href="#" className='text-dark'>Support</a></p>
                        <p><a href="#" className='text-dark'>Forums</a></p>
                        <p><a href="#" className='text-dark'>Status</a></p>


                    </div>

                    <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                        <h5 className='text-uppercase mb-4 font-weight-bold text-primary'>Contacto</h5>
                        <hr className='mb-4' />
                        <p className='me-3'>
                            <FontAwesomeIcon icon={faCartShopping} flip="horizontal" size="xs" style={{ color: "#000000", }} /> Mexico, ciudad 255
                        </p>
                        <p className='me-3'>
                            <FontAwesomeIcon icon={faEnvelope} flip="horizontal" size="xs" style={{ color: "#000000", }} /> testing@gmail.com
                        </p>
                        <p className='me-3'>
                            <FontAwesomeIcon icon={faPhone} flip="horizontal" size="xs" style={{ color: "#000000", }} /> +44444444
                        </p>
                        <p className='me-3'>
                            <FontAwesomeIcon icon={faFax} flip="horizontal" size="xs" style={{ color: "#000000", }} /> +44444444
                        </p>



                    </div>

                    <hr className='mb-4' />
                    <div className='text-center mb-2'>
                    <p>
                    Copyright todo los derechos reservados
                        <a href="#">
                            <strong className='text-primary'> 2023</strong>
                        </a>
                    </p>
                    </div>

                    {/* <div className='text-center'>
                        <ul className='list-unstyled list-inline'>
                            <li className='list-inline-item'>
                                <a href='#' className='text-dark'><FontAwesomeIcon icon={faFax} flip="horizontal" size="xs" style={{ color: "#000000", }} /></a>
                            </li>
                            <li className='list-inline-item'>
                                <a href='#' className='text-dark'><FontAwesomeIcon icon={faFax} flip="horizontal" size="xs" style={{ color: "#000000", }} /></a>
                            </li>
                            <li className='list-inline-item'>
                                <a href='#' className='text-dark'><FontAwesomeIcon icon={faFax} flip="horizontal" size="xs" style={{ color: "#000000", }} /></a>
                            </li>
                            <li className='list-inline-item'>
                                <a href='#' className='text-dark'><FontAwesomeIcon icon={faFax} flip="horizontal" size="xs" style={{ color: "#000000", }} /></a>
                            </li>
                        </ul>

                    </div> */}


                </div>
            </div>
        </footer>
    )
}
