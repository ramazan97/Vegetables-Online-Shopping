import React, { useContext } from "react";
import Hero from "./Hero";
import About from "./About";
import Shop from "./Shop";
import UrunDetay from "./UrunDetay";
import Vegetables from "./Vegetables";
import Contactus from "./Contactus";
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <Hero />
      <About />
      <Shop products={products} />
      <Vegetables />
      <Contactus />
    </div>
  );
};

export default Home;
