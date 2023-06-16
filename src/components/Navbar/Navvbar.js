import React from 'react';
import  Navbar  from 'react-bootstrap/Navbar';
import  Container  from 'react-bootstrap/Container';
import  Nav  from 'react-bootstrap/Nav';
import  Form  from 'react-bootstrap/Form';
import pic from '../../ResourceFiles/logo.png'
import { Link } from "react-router-dom";
const Navvbar = () => {
  const NavStyle = {
    marginLeft: '25px', textDecoration: 'none', color: 'black', padding: '5px 25px'
  };
  const fontStyle = {
    fontWeight: '500', fontSize: '20px'
  };
  const linkWithBackgroundStyle = { backgroundColor: 'yellow', borderRadius: '5px', padding: '5px 25px', marginLeft: '25px', textDecoration: 'none', color: 'black' };

  return (
    <>
      <Navbar style={{marginBottom:'30px',marginTop:'15px'}} expand="lg">
        <Container style={fontStyle}>
            <Navbar.Brand href='/home' style={{marginLeft:'30px'}}  ><img src={pic} alt="" height='40px' /></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                  <Form style={{marginLeft:'30px'}} className="d-flex">
                    <Form.Control style={fontStyle} type="search" placeholder="Search" className="me-2" aria-label="Search" />
                  </Form>
                  <Link style={NavStyle} to="/news">News</Link>
                  <Link style={NavStyle} to="/destination">Destination</Link>
                  <Link style={NavStyle} to="/blog">Blog</Link>
                  <Link style={NavStyle} to="/contact">Contact</Link>
                  <Link style={linkWithBackgroundStyle} to="login" >Login</Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navvbar;