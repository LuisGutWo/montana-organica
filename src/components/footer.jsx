import React, { useState, useEffect } from "react";
import ReactWhatsappButton from "react-whatsapp-button";
import Container from "react-bootstrap/Container";
import shape1 from "../assets/images/footer-v1-shape1.png";
import shape2 from "../assets/images/footer-v1-shape2.png";
import shape3 from "../assets/images/footer-v1-shape3.png";
import LogoWhite from "../assets/images/montaña organica-125x125.png";
import 'animate.css';

function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <section className="footer-one">
        <div
          className="footer-one__bg"
          style={{
            backgroundImage: { shape3 },
          }}
        ></div>
        <div className="shape1 float-bob-y">
          <img src={shape1} alt="#" />
        </div>
        <div className="shape2 float-bob-y">
          <img src={shape2} alt="#" />
        </div>
        <Container fluid className="d-flex flex-row m-2 p-3">
          <section className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-8 text-start">
              <img src={LogoWhite} className="img-thumbnail animate__animated animate__pulse animate__infinite animate__slow" alt="" />
              <h5>Somos Montaña Organica</h5>
              <p className="footer-par">
                Nos dedicamos a crear super alimentos de consumo diario para
                toda la familia y poder mantener una alimentación saludable para
                una mejor calidad de vida.
              </p>
            </div>
          </section>

          <section className="socials">
            <ul>
              <li>
                <a href="https://www.facebook.com">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </section>
        </Container>
        <ReactWhatsappButton
          countryCode="51"
          phoneNumber="960147597"
          animated
        />
        {showTopBtn && <div className="go-top" onClick={goTop}></div>}
      </section>

      <section fluid className="copyright-container">
        <div className="copyright">
          &copy; 2023 LAW-webmedia. All Right Reserved.
        </div>
      </section>
    </>
  );
}

export default AppFooter;
