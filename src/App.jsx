import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "transition-style";
import "animate.css";

import AppHeader from "./components/header/header";
import HeaderOne from "./components/header/headerOne";
import AppFooter from "./components/footer/footer";
import ReactWhatsappButton from "react-whatsapp-button";
import AOS from "aos";
import "aos/dist/aos.css";
import AppHome from "./Home/AppHome";
AOS.init();

function App() {
  return (
    <div className="App">
      <div id="topheader">
        <HeaderOne />
      </div>
      <header id="header">
        <AppHeader />
      </header>
      <section id="home">
        <AppHome />
      </section>

      <footer id="footer">
        <AppFooter />
      </footer>
      <ReactWhatsappButton
        countryCode="51"
        phoneNumber="960147597"
        animated
        style={{ margin: "auto", bottom: "5%", right: "5%" }}
      />
    </div>
  );
}

export default App;
