import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";
import Cards from "../components/Cards";
const Food = () => {
  return (
    <>
      <Hero hero="food">
        <Banner title="Armado de Muebles">
          <Link to="/" className="btn-primary">
            volver al inicio
          </Link>
        </Banner>
      </Hero>
      <Cards />
      {/* <RoomsContainer /> */}
    </>
  );
};

export default Food;
