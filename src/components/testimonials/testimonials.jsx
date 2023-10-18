import Container from "react-bootstrap/Container";
import YouTube from "react-youtube";
import "../../components/testimonials/testimonialsStyles.css";

function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <section className="title-holder">
          <h2>Conócenos un poco mas</h2>
          <div className="subtitle">aquí una mirada de nuestro concepto</div>
        </section>
        <section className="testimonials-videoPlayer">
          <YouTube videoId="AhvNSJ7eGro" autoplay={true} />
        </section>
      </Container>
    </section>
  );
}

export default AppTestimonials;
