import React from 'react';
import { motion } from 'framer-motion'
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { BrowserRouter, Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'

const MotionNavbar = motion.custom(Navbar)

const Header = () => {
    return (

       
        <MotionNavbar bg="dark" variant="dark" initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}>
            <Navbar.Brand>Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <LinkContainer to="/"><Nav.Link >Home</Nav.Link></LinkContainer>
                <LinkContainer to="/About"><Nav.Link >About</Nav.Link></LinkContainer>
                <LinkContainer to="/Contact"><Nav.Link >Contact</Nav.Link></LinkContainer>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </MotionNavbar>
        
    );
}

Header.propTypes = {};

export default Header;