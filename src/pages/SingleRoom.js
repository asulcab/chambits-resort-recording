import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import { FaWhatsapp } from "react-icons/fa";

import StyledHero from "../components/StyledHero";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = RoomContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3> no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      district,
      type,
      speciality,
      experience,
      home,
      workshop,
      contact,
      titleDescription,
      description,
      titleDescription02,
      description02,
      capacity,
      size,
      extras,
      images
    } = room;
    const [main, ...defaultImages] = images;
    console.log(defaultImages);

    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${speciality}`}>
            <Link to="/rooms" className="btn-primary">
              volver atrás
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              {(titleDescription != '') ? <h3>{titleDescription}</h3> : <h3>Detalles</h3>}
              <p>{description}</p>
              {(titleDescription02 != '') ? <h6 style={{marginTop: "1em"}}>{titleDescription02}</h6> : ""}
              <p>{description02}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              {(name != '')?<h6>Nombres: {name}</h6>:''}
              <h6>Área: {type}</h6>
              {(experience > 0) ? <h6>Experiencia: {experience} años</h6> : ''}
              <h6>Especialdad: {speciality}</h6>
              {/* <h6>Tamaño : {size} SQFT</h6> */}
              {/*
              <h6>
                capacidad max :
                {capacity > 1 ? `${capacity} personas` : `${capacity} persona`}
              </h6>
              */}
              <h6>Distrito: {district}</h6>
              <h6 style={{fontWeight: "600"}}>{home ? "Atención a domicilio (previa coordinación)" : ""}</h6>
              <h6>{workshop && "Atención en taller"}</h6>
              {(contact != '')
                ?
                  <div style={{textAlign: "left", marginTop: "1em"}}>
                    {contact}
                  </div>
                :
                  ''
              }
            </article>
          </div>
        </section>
        
        <section className="room-extras">
          <div>
            <h6>Extras </h6>
            <ul className="extras">
              {extras.map((item, index) => (
                <li key={index}>- {item}</li>
              ))}
            </ul>
          </div>
        </section>
      </>
    );
  }
}
