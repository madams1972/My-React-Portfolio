import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import "./Header.css";


const Header = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const common = {
        marginRight:15,
        fontSize:17,
        letterSpacing:".5px"
    }

    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                <div className="hamburgur">
                        <i class="fa fa-bars inner" onClick={handleShow} aria-hidden="true" style={{cursor:"pointer"}}></i>
                        <h2 className='mt-2 h2_right' style={{ color: "#6C63FF" }}>
                            <NavLink to="/" style={{ textDecoration: "none" }}>Malissa Adams</NavLink>
                        </h2>
                    </div>

                    <Nav className="nav">
                        <div className='mt-2'>
                            <NavLink to="/" className="text-decoration-none" style={common}>Home</NavLink>
                            <NavLink to="/about" className="text-decoration-none" style={common}>About</NavLink>
                            <NavLink to="playlist" className="text-decoration-none" style={common}>Projects</NavLink>
                            <NavLink to="/contact" className="text-decoration-none" style={common}>Contact</NavLink>
                        </div>
                        <div>
                            <Button variant="danger">Resume</Button>
                        </div>

                    </Nav>
                </Container>

                        {/* side bar */}
                        <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className='side_nav' onClick={() => setShow(false)}>
                            <NavLink to="/" className="text-decoration-none  mb-2" style={common}>Home</NavLink>
                            <NavLink to="/about" className="text-decoration-none  mb-2" style={common}>About</NavLink>
                            <NavLink to="/playlist" className="text-decoration-none  mb-2" style={common}>Project</NavLink>
                            <NavLink to="/contact" className="text-decoration-none  mb-2" style={common}>Contact</NavLink>
                            <div className="btnDiv">
     <button id="downloadBtn" value="download">Download</button>
</div>
const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('../public.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = '../public/Resum.pdf';
                alink.click();
            })
        })
    }
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </Navbar>
        </>
    )
}

export default Header