import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "animate.css";
import NavbarLogo from "../assets/images/montana-organica-500x500.png";

function AppHeader() {
  return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Nav.Link href="#home">
              <img
                src={NavbarLogo}
                alt=""
                className="navbar-brand-image animate__animated animate__pulse animate__delay-2s animate__infinite	animate__slower"
              />
            </Nav.Link>
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
        </Container>
      </Navbar>
  );
}

export default AppHeader;
