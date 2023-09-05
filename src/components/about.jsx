import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import img1 from "../assets/images/nosotros-1-1024x682.jpg";

function AppAbout() {
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Acerca de nosotros</h2>
          <div className="subtitle">conócenos mas de cerca</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>
              Montaña orgánica es una empresa dedicada a la producción de súper
              alimentos motivando a las personas a escoger alimentos saludables
              para un mejor estilo y calidad de vida.
            </p>
            <p>
              <b>¿Por qué preferir Montaña Orgánica?</b>
              <br />
              Nos dedicamos a crear super alimentos de consumo diario para toda
              la familia y poder mantener una alimentación saludable para una
              mejor calidad de vida.
            </p>
            <br />
            <img src="src/assets/images/iconos_vegan_gluten_non.png" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;
