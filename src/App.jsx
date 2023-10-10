import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import WOW from "wowjs";

import AppHeader from "./components/header";
import AppHero from "./components/hero";
import AppAbout from "./components/about";
import AppStores from "./components/stores";
import AppProducts from "./components/products";
import AppTestimonials from "./components/testimonials";
import AppBlog from "./components/blog";
import AppContact from "./components/contact";
import AppFooter from "./components/footer";
import "transition-style";
import Loader from "react-loaders";
import HeaderOne from "./components/headerOne";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   new WOW.WOW ({
  //     live: false,
  //   }).init();
  // }, []);

  return (
    <div className="App">
      <HeaderOne />
      <header id="header" className={`${sticky ? "sticky" : ""}`}>
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppAbout />
        <AppProducts />
        <AppStores />
        <AppTestimonials />
        <AppBlog />
        <AppContact />
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
      <Loader type="ball-triangle" active={true} color="#00BFFF" />
    </div>
  );
}

export default App;
