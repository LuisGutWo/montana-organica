import React from "react";
import { useState, useEffect } from "react";
import { NavLink, Navbar, Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Loader from "react-loaders";
import MainProductCard from "./MainProductCard";

function AppProducts() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    <Loader type="pacman" />;
    fetch(import.meta.env.VITE_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setCategories(["all", ...new Set(data.map((item) => item.category))]);
        setTypes([...new Set(data.map((item) => item.type))]);
      });
  }, []);

  const searchData = (item, search) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  };

  const filteredData = () => {
    if (filter === "all") {
      return data.filter((item) => searchData(item, search));
    } else {
      return data
        .filter((item) => item.category === filter || item.type === filter)
        .filter((item) => searchData(item, search));
    }
  };

  const filteredProduct = filteredData().map((item) => (
    <MainProductCard key={item.id} item={item} />
  ));

  return (
    <>
      <section id="products" className="block teams-block">
        <Container fluid>
          <div className="title-holder">
            <h2>Nuestros Productos</h2>
            <div className="subtitle">conoce lo mejor de la naturaleza</div>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar producto"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <Navbar>
            {categories.map((category) => (
              <NavLink
                key={category}
                to={`/categories/${category}`}
                onClick={() => setFilter(category)}
                className="btn btn-primary"
                style={{ alignItems: "center" }}
              >
                {category}
              </NavLink>
            ))}
            {types.map((type) => (
              <NavLink
                key={type}
                to={`/types/${type}`}
                onClick={() => setFilter(type)}
                className="btn btn-primary"
                style={{ alignItems: "center" }}
              >
                {type}
              </NavLink>
            ))}
          </Navbar>
          {filteredProduct}
        </Container>
      </section>
    </>
  );
}

export default AppProducts;
