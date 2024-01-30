import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarLogo from "../../assets/images/montana-organica-500x500.png";
import "animate.css";
import "../header/headerStyles.css";

function AppHeader() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#topheader">
          <img src={NavbarLogo} alt="" className="navbar-brand-image" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "20rem" }}
            navbarScroll
          >
            <Nav.Link href="#topheader">Home</Nav.Link>
            <Nav.Link href="#about">Quienes somos</Nav.Link>
            <Nav.Link href="#products">Productos</Nav.Link>
            <Nav.Link href="#stores">Tiendas</Nav.Link>
            <Nav.Link href="#testimonials">Video</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
