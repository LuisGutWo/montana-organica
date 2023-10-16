import React from "react";
import "../header/headerStyles.css"
import { Container } from "react-bootstrap";

const HeaderOne = () => {
  return (
    <section className="main-header-one__top">
      <Container className="auto-container">
        <div className="main-header-one__top-inner">
          <div className="main-header-one__top-left">
            <ul className="main-header__contact-info">
              <li>
                <div className="inner">
                  <div className="icon-box">
                    <i className="fa-regular fa-clock text-light"></i>
                  </div>
                  <div className="text-box">
                    <p>Lun a Sab: 24 horas</p>
                  </div>
                </div>
              </li>

              <li>
                <div className="inner">
                  <div className="icon-box">
                    <i className="fa-regular fa-envelope text-light"></i>
                  </div>
                  <div className="text-box">
                    <p>
                      <a href="mailto:yourmail@email.com">
                        info@montanaorganica.pe
                      </a>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="main-header-one__top-right">
            <ul className="main-header-one__top-social-links">
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeaderOne;
