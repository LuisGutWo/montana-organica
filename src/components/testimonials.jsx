import Container from "react-bootstrap/Container";
import VideoPlayer from "./VideoPlayer";

function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Conócenos un poco mas</h2>
          <div className="subtitle">aquí una mirada de nuestro concepto</div>
          <VideoPlayer />
        </div>
      </Container>
    </section>
  );
}

export default AppTestimonials;
