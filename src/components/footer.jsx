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
      <Container fluid>
        <div className="socials">
          <ul>
            <li>
              <a href="https://www.facebook.com">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com">
                <i class="fab fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
        {showTopBtn && <div className="go-top" onClick={goTop}></div>}
      </Container>

      <section fluid className="copyright-container">
        <div className="copyright">
          &copy; 2023 LAW-webmedia. All Right Reserved.
        </div>
      </section>
    </>
  );
}

export default AppFooter;
