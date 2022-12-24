import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";
import Cards from "../components/Cards";
import LogoStores from "../components/LogoStores";
import AccordionInfo from "../components/AccordionInfo";

const Food = () => {

  // Scroll top window
  window.scrollTo(0, 0);
  
  return (
    <>
      <Hero hero="food">
        <Banner title="Servicios Hogar">
          <Link to="/rooms/carpinteria" className="btn-primary">
            Volver a Servicios
          </Link>
        </Banner>
      </Hero>
      <Cards />
      {/* <RoomsContainer /> */}
      <section>
        <LogoStores />
      </section>

      {/* Condiciones */}
      <section style={{backgroundColor: '#ededed', padding: '2em 0'}}>
        <AccordionInfo />
      </section>
    </>
  );
};

export default Food;
