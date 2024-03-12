import React from "react";
import Hero from "./Hero";
import About from "./About";
import Shop from "./Shop";
import Vegetables from "./Vegetables";
import Contactus from "./Contactus";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Shop />
      <Vegetables />
      <Contactus />
    </div>
  );
};

export default Home;
