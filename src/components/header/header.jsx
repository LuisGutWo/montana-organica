import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarLogo from "../../assets/images/montana-organica-500x500.png";
import "animate.css";
import "../header/headerStyles.css"
import { Container } from "react-bootstrap";

function AppHeader() {
  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" onClick={goTop}>
          <img
            src={NavbarLogo}
            alt=""
            className="navbar-brand-image"
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
      </Container>
    </Navbar>
  );
}

export default AppHeader;
