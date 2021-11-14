import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

import { FaMagic, FaHardHat, FaTruckLoading, FaWaveSquare, FaShippingFast } from "react-icons/fa";
import Title from "../components/Title";
import Values from "../components/Values";
import logo from '../images/logotipo.svg';
export default class AboutUs extends Component {
    // FaHandshake

    state = {
        services: [
            {
                info: 
                    "Chambits “LO QUIERES LO TIENES”, somos huancaínos, brindamos servicios de armado y mantenimiento de muebles, instalación de cámaras de videovigilancia, transporte y traslado de artículos o productos (posible de ser transportado en bicicleta o moto lineal). Cumplimos los requerimientos de nuestros clientes de manera rápida, segura y confiable. Tenemos en cuenta que cada servicio es una posibilidad de progreso mutuo, es por ello que nos esforzamos día a día por entregar servicios de calidad con una gestión profesional y adecuada a las necesidades de cada cliente. Somos un equipo innovador, dinámico, con una constante búsqueda y ejecución de nuevas formas de soluciones, con el fin de mejorar la satisfacción de nuestros clientes. Somos el socio ideal en brindar soluciones integrales a tus necesidades, con responsabilidad, calidad y seguridad.",
                district: "Huancayo",
                name: "Chambits",
                type: "Trabajo",
                speciality: "Trabajo",
                experience: "3",
                home: true,
                workshop: true,
                logo: logo,
                values: [
                    {
                        title: "Responsabilidad",
                        info: "Hola"
                    },
                    {
                        title: "Compromiso",
                        info: "Hola"
                    },
                    {
                        title: "Pasión",
                        info: "Hola"
                    }
                ],
                extras: [
                    {
                        position: "1",
                        info: "Brindar productos y servicios que logren satisfacer las necesidades de nuestros clientes."
                    },
                    {
                        position: "2",
                        info: "Mejora continua de nuestros procesos y desempeño, alineados a nuestros objetivos."
                    },
                    {
                        position: "3",
                        info: "Asegurar un ambiente de trato cordial, seguro y saludable con nuestros clientes."
                    },
                    {
                        position: "4",
                        info: "Capacitación, desarrollo personal y profesional para brindar un mejor servicio."
                    },
                    {
                        position: "5",
                        info: "Asegurar la atención activa, dedicada e inmediata a nuestros clientes."
                    }  
                ]
            }
        ]
    };
    
    render() {
        return (
            <>
                <Hero hero="aboutUs">
                    <Banner title="¿Quiénes Somos?">
                        <Link to="/rooms" className="btn-primary">
                            servicios
                        </Link>
                    </Banner>
                </Hero>
                
                {this.state.services.map(item => {
                    return (
                        <>        
                            <section className="us">
                                <div className="about-us">
                                    <article className="about-us-logo">
                                        <img src={item.logo} />
                                    </article>
                                    <article className="about-us-desc">
                                        {/* <h3>Detalles</h3> */}
                                        <p>{item.info}</p>
                                        {/* <div className="service" style={{ marginTop: "1em", textAlign:"center"}}>
                                            <span style={{ color: "white", margin: "0 1rem" }}><FaMagic /></span>
                                            <span style={{ color: "white", margin: "0 1rem" }}><FaHardHat /></span>
                                            <span style={{ color: "white", margin: "0 1rem" }}><FaShippingFast /></span>
                                            <span style={{ color: "white", margin: "0 1rem" }}><FaWaveSquare /></span>
                                        </div> */}
                                    </article>
                                    {/* <article className="about-us-info">
                                        <h3>Info</h3>
                                        <h6>Distrito : {item.district}</h6>
                                        <h6>Nombres: {item.name}</h6>
                                        <h6>Área: {item.type}</h6>
                                        <h6>Especialista en: {item.speciality}</h6>
                                        <h6>Experiencia : {item.experience} años</h6>
                                        <h6>{item.home ? "Atención a domicilio" : ""}</h6>
                                        <h6>{item.workshop && "Atención en taller"}</h6>
                                    </article> */}
                                </div>
                            </section>
                            <Values />
                            <section className="room-extras">
                                <h6>Nuestra Política</h6>
                                <ul className="extras">
                                    {this.state.services[0].extras.map(item => {
                                        return (
                                            <li key={`item-${item.position}`}><h6 style={{display: "inline-flex", margin: "0"}}>{item.position}.</h6><span style={{marginLeft: "5px"}}>{item.info}</span></li>
                                        );
                                    })}
                                </ul>
                            </section>
                        </>
                    );
                })}
                
            </>
        );
    }
}


{/*
import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import SigleRoom from "./SingleRoom";

import RoomsContainer from "../components/RoomsContainer";
const AboutUs = () => {
    return (
        <>
            <Hero hero="aboutUs">
                <Banner title="¿Quienes Somos?">
                    <Link to="/" className="btn-primary">
                        volver al inicio
                    </Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </>
    );
};

export default AboutUs;
*/}