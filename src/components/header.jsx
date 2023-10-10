import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarLogo from "../assets/images/montana-organica-500x500.png";
import "animate.css";

function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={NavbarLogo}
          alt=""
          className="navbar-brand-image d-inline-block align-top animate__animated animate__tada"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">Quienes somos</Nav.Link>
          <Nav.Link href="#products">Productos</Nav.Link>
          <Nav.Link href="#stores">Tiendas</Nav.Link>
          <Nav.Link href="#testimonials">Testimonios</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
          <Nav.Link href="#contact">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppHeader;
