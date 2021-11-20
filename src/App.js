import React from "react";
import './css/App.css';

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import AboutUs from "./pages/AboutUs";
import Food from "./pages/Food";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/nosotros" component={AboutUs} />
        <Route exact path="/proyectos" component={Food} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
