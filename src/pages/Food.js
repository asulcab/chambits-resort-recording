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
        <Banner title="Servicios Hogar">
          <Link to="/rooms" className="btn-primary">
            Volver a Servicios
          </Link>
        </Banner>
      </Hero>
      <Cards />
      {/* <RoomsContainer /> */}
    </>
  );
};

export default Food;
