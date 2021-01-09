import React from "react";
import Navbar from 'react-bootstrap/Navbar';

const MyNAvbar = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Marvin Kabugi</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive--nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutme">About Me</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>

    )
}

export default MyNAvbar;