import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.scss";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleNavbar = () => {
    window.scrollY > 50 ? setShow(true) : setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbar);
    return () => {
      window.removeEventListener("scroll", handleNavbar);
    };
  }, []);

  return (
    <Navbar className={`nav ${show && "nav-white"} fixed-top`} expand="lg">
      <Container>
        <Navbar.Brand href="#top">
          <FontAwesomeIcon className="laptopIcon" icon={faLaptopCode} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsize navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <Nav.Link href="#Tools">Tools</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
