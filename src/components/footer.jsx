import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

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
            backgroundImage:
              "url(src/assets/images/shapes/footer-v1-shape3.png)",
          }}
        ></div>
        <div className="shape1 float-bob-y">
          <img src={"src/assets/images/shapes/footer-v1-shape1.png"} alt="#" />
        </div>
        <div className="shape2 float-bob-y">
          <img src={"src/assets/images/shapes/footer-v1-shape2.png"} alt="#" />
        </div>
        {/* <div className="socials">
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
        </div> */}
        {showTopBtn && <div className="go-top" onClick={goTop}></div>}
      </section>

      {/* <section fluid className="copyright-container">
        <div className="copyright">
          &copy; 2023 LAW-webmedia. All Right Reserved.
        </div>
      </section> */}
    </>
  );
}

export default AppFooter;
