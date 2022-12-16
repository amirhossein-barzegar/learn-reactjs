import React,{Component} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    Link
} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                        <Navbar.Brand href="#home">React Second Project</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" class="nav-link">Home</Link>
                            <Link to="/blogs" class="nav-link">Blogs</Link>
                            <Link to="/contact" class="nav-link">Contact Us</Link>
                            <Link to="/about" class="nav-link">About Us</Link>
                            <Link to="/profile" class="nav-link">Profile</Link>
                        </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header