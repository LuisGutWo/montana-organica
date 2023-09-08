import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

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

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
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

  return (
    <div className="App" transition-style="in:circle:bottom-right">
      <header id="header" className={`${sticky ? "sticky" : ""}`}>
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppAbout data-aos="zoom-in" />
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
