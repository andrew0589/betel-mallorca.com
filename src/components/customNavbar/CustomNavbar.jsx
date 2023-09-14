import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './customnavbar.css';

import logo from '../../assets/New Project.png';

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className="custom-navbar-bg fixed-top"
    >
      <Container>
        <Navbar.Brand href="#acasa">
          <img
            alt="logo"
            src={logo}
            width="50"
            height="40"
            className="d-inline-block align-center ml-5"
            onClick={() => {
              closeNavbar();
              window.location.hash = "#acasa";
            }}
          />
          <span
            className="navbar-brand-text"
            onClick={() => {
              closeNavbar();
              window.location.hash = "#acasa";
            }}
          >
            Betel Mallorca
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end info"
        >
          <Nav className="ms-auto custom-nav-links">
            <Nav.Link href="#acasa" className="mr-3" onClick={closeNavbar}>
              Acasă
            </Nav.Link>
            <Nav.Link href="#despre_noi" className="mr-3" onClick={closeNavbar}>
              Despre noi
            </Nav.Link>
            <Nav.Link
              href="#servicii_inchinare"
              className="mr-5"
              onClick={closeNavbar}
            >
              Servicii închinare
            </Nav.Link>
            <Nav.Link href="#conducere" onClick={closeNavbar}>
              Conducere
            </Nav.Link>
            <NavDropdown title="Galerie" id="basic-nav-dropdown" className="mr-2">
              <NavDropdown.Item href="#conferinta" onClick={closeNavbar}>
                Conferinta 2023
              </NavDropdown.Item>
              <NavDropdown.Item href="#sarbatoarea" onClick={closeNavbar}>
                Sărbătoarea mulțumirii 2022
              </NavDropdown.Item>
              <NavDropdown.Item href="#botez" onClick={closeNavbar}>
                Botez 2022
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#mapa" onClick={closeNavbar}>
              Mapa
            </Nav.Link>
            <Nav.Link href="#contact" onClick={closeNavbar}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
