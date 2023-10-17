import React from "react";
import { useState, useEffect } from "react";
import { Button, NavLink, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import MainProductCard from "./MainProductCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "../products/productsStyles.css"

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function AppProducts() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("todos");

  useEffect(() => {
    fetch(import.meta.env.VITE_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setCategories(["todos", ...new Set(data.map((item) => item.category))]);
      });
  }, []);

  const searchData = (item, search) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  };

  const filteredData = () => {
    if (filter === "todos") {
      return data.filter((item) => searchData(item, search));
    } else {
      return data
        .filter((item) => item.category === filter)
        .filter((item) => searchData(item, search));
    }
  };

  const filteredProduct = filteredData().map((item) => (
    <MainProductCard key={item.id} item={item} />
  ));

  return (
    <>
      <section id="products" className="block products-block">
        <Container fluid>
          <div className="title-holder">
            <h2 data-aos="fade-right">Nuestros Productos</h2>
            <div data-aos="fade-left" className="subtitle">
              conoce lo mejor de la naturaleza
            </div>
            <input
              type="text"
              className="form-control products-search"
              placeholder="Buscar producto"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <Navbar className="products-buttons-section">
            {categories.map((category) => (
              <NavLink
                data-aos="zoom-in"
                key={category}
                to={`/categories/${category}`}
                onClick={() => setFilter(category)}
              >
                <Button>{category}</Button>
              </NavLink>
            ))}
          </Navbar>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 3 }}
          >
            <Masonry>{filteredProduct}</Masonry>
          </ResponsiveMasonry>
        </Container>
      </section>
    </>
  );
}

export default AppProducts;
