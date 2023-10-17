import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "transition-style";
import "animate.css";

import AppHeader from "./components/header/header";
import HeaderOne from "./components/header/headerOne";
import AppHero from "./components/hero/hero";
import AppAbout from "./components/about";
import AppStores from "./components/stores/stores";
import AppProducts from "./components/products/products";
import AppTestimonials from "./components/testimonials/testimonials";
import AppBlog from "./components/blog/blog";
import AppContact from "./components/contact/contact";
import AppFooter from "./components/footer/footer";
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
    </div>
  );
}

export default App;
