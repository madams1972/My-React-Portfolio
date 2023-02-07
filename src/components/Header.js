import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Header.css";

const Header = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const common = {
    marginRight: 15,
    fontSize: 17,
    letterSpacing: ".5px"
  }

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <div className="hamburgur">
            <i class="fa fa-bars inner" onClick={handleShow} aria-hidden="true" style={{ cursor: "pointer" }}></i>
            <h2 className='mt-2 h2_right' style={{ color: "#6C63FF" }}>
              <a href="/" style={{ textDecoration: "none" }}>Malissa Adams</a>
            </h2>
          </div>

          <Nav className="nav">
            <div className='mt-2'>
              <a href="/" className="text-decoration-none" style={common}>Home</a>
              <a href="/about" className="text-decoration-none" style={common}>About</a>
              <a href="playlist" className="text-decoration-none" style={common}>Projects</a>
              <a href="/contact" className="text-decoration-none" style={common}>Contact</a>
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
                        <a href="/" className="text-decoration-none" style={common}>Home</a>
              <a href="/about" className="text-decoration-none" style={common}>About</a>
              <a href="playlist" className="text-decoration-none" style={common}>Projects</a>
              <a href="/contact" className="text-decoration-none" style={common}>Contact</a>
                            <div className="btnDiv">
     <button id="downloadBtn" value="download">Download</button>
</div>

                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </Navbar>
        </>
    )
}

export default Header