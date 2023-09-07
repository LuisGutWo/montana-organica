import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import StoreImg1 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-2.png";
import StoreImg2 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-3.png";
import StoreImg3 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-4.png";
import StoreImg4 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-5.png";
import StoreImg5 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-6.png";
import StoreImg6 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-7.png";
import StoreImg7 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-8.png";
import StoreImg8 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-9.png";
import StoreImg9 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-10.png";
import StoreImg10 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-11.png";
import StoreImg11 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-12.png";
import StoreImg12 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-13.png";
import StoreImg13 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-14.png";
import StoreImg14 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-15.png";
import StoreImg15 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia.png";

const storesData = [
  {
    id: 1,
    link: "https://www.google.com",
    image: StoreImg1,
    title: "Lonely Path",
  },
  {
    id: 2,
    link: "https://www.google.com",
    image: StoreImg2,
    title: "Photographer Girl",
    subtitle: "Branding",
  },
  {
    id: 3,
    link: "https://www.google.com",
    image: StoreImg3,
    title: "The Difference",
  },
  {
    id: 4,
    link: "https://www.google.com",
    image: StoreImg4,
    title: "Nature Patterns",
  },
  {
    id: 5,
    link: "https://www.google.com",
    image: StoreImg5,
    title: "The Difference",
  },
  {
    id: 6,
    link: "https://www.google.com",
    image: StoreImg6,
    title: "Winter Sonata",
  },
  {
    id: 7,
    link: "https://www.google.com",
    image: StoreImg7,
    title: "Lonely Path",
  },
  {
    id: 8,
    link: "https://www.google.com",
    image: StoreImg8,
    title: "Appreciation",
  },
  {
    id: 9,
    link: "https://www.google.com",
    image: StoreImg9,
    title: "Happy Days",
  },
  {
    id: 10,
    link: "https://www.google.com",
    image: StoreImg10,
    title: "Happy Days",
  },
  {
    id: 11,
    link: "https://www.google.com",
    image: StoreImg11,
    title: "Happy Days",
  },
  {
    id: 12,
    link: "https://www.google.com",
    image: StoreImg12,
    title: "Happy Days",
  },
  {
    id: 13,
    link: "https://www.google.com",
    image: StoreImg13,
    title: "Happy Days",
  },
  {
    id: 14,
    link: "https://www.google.com",
    image: StoreImg14,
    title: "Happy Days",
  },
  {
    id: 15,
    link: "https://www.google.com",
    image: StoreImg15,
    title: "Happy Days",
  },
];

function AppStores() {
  return (
    <section id="stores" className="block stores-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Nos puedes encontrar en</h2>
          <div className="subtitle">nuestros distribuidores</div>
        </div>
        <Row className="storeslist">
          {storesData.map((stores) => {
            return (
              <Col sm={4} key={stores.id}>
                <div className="stores-wrapper">
                  <a href={stores.link}>
                    <Image src={stores.image} />
                    <div className="label text-center">
                      <h3>{stores.title}</h3>
                    </div>
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default AppStores;
