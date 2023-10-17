import Container from "react-bootstrap/Container";
import StoresSwipeCarousel from "./storesSwiperCarousel";
import "../stores/storesStyles.css"

function AppStores() {
  return (
    <section id="stores" className="block stores-block">
      <Container fluid>
        <div className="title-holder">
          <h2 data-aos="fade-right">encuentranos en</h2>
          <div data-aos="fade-left" className="subtitle">
            nuestros distribuidores
          </div>
        </div>
        <StoresSwipeCarousel/>

      </Container>
    </section>
  );
}

export default AppStores;
