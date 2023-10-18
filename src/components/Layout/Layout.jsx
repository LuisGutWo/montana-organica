import { Outlet } from "react-router-dom";
import AppHeader from "../header/header";
import HeaderOne from "../header/headerOne";
import AppFooter from "../footer/footer";
import { useEffect, useState } from "react";

const Layout = () => {
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
      <header id="header" className={`${sticky ? "sticky" : ""}`}>
        <HeaderOne />
        <AppHeader />
      </header>
      <div className="page">
        <Outlet />
      </div>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
};

export default Layout;
