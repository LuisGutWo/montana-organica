import Container from "react-bootstrap/Container";
import VideoPlayer from "./VideoPlayer";
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
          <VideoPlayer />
        </section>
      </Container>
    </section>
  );
}

export default AppTestimonials;
