import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavbarMenu() {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#home">Proreforma</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Início</Nav.Link>
                        <Nav.Link href="#servicos">Serviços</Nav.Link>
                        <Nav.Link href="#contato">Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
