import React, { Component } from "react";
// Component Card
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import { FaWhatsapp } from "react-icons/fa";

// Component Card
import { withStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import StyledHero from "../components/StyledHero";

// Style Card
import "../css/styles-card.css";

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
      active,
      name,
      district,
      type,
      speciality,
      image_header,
      experience,
      home,
      workshop,
      contact,
      proyects,
      titleDescription,
      description,
      titleDescription02,
      description02,
      capacity,
      size,
      extras,
      images,
      imagesS,

      // Card define
      card,
      logo,
      atention,
      price_delivery
    } = room;
    const [main, ...defaultImages ] = images;
    const [...imagesSponsor] = imagesS;
    // console.log(defaultImages);

    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${speciality}`}>
            <Link to="/rooms" className="btn-primary">
              Volver a Servicios
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
              <div style={{textAlign: "left", marginTop: "1em"}}>
              {(proyects != '')
                ?
                  <div>
                    {proyects}
                  </div>
                :
                  ''
              }
              </div>
              <div style={{textAlign: "left", marginTop: "1em"}}>
              {(contact != '')
                ?
                  <div>
                    {contact}
                  </div>  
                :
                 ''
              }
              </div>
            </article>
          </div>          
        </section>
        {/* End Section Card */}
        
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
        <section>
          {(imagesS != '')
            ?
            <div className="single-room-images" style={{padding:"2rem 0", borderTop: "1px solid", borderColor: "rgb(0, 0, 0, 0.08)", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", columnGap: "2rem"}}>
            {imagesSponsor.map((item, index) => (
                <img key={index} src={item} alt={name} />
              ))}
            </div>
            :
            ''
          }
        </section>
      </>
    );
  }
}
