import React from "react";
import AppHero from "../components/hero/hero";
import AppAbout from "../components/about";
import AppProducts from "../components/products/products";
import AppStores from "../components/stores/stores";
import AppTestimonials from "../components/testimonials/testimonials";
import AppBlog from "../components/blog/blog";
import AppContact from "../components/contact/contact";

const AppHome = () => {
  return (
    <>
      <AppHero />
      <AppAbout />
      <AppProducts />
      <AppStores />
      <AppTestimonials />
      <AppBlog />
      <AppContact />
    </>
  );
};

export default AppHome;
