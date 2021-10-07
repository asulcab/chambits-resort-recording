import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { FaPoundSign, FaWhatsapp } from "react-icons/fa";

import Armario_01 from "../images/armario_01.png";
import Centro_01 from "../images/centro_01.jpeg";
import Cocina_01 from "../images/cocina_01.jpeg";
import Logo from "../images/logo.png";

import "../css/styles-card.css";

const styles = muiBaseTheme => ({
  card: {
    width: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,1)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,1)"
    }
  },
  media: {
    paddingTop: "86.25%" //"56.25%"
  },
  title: {
    fontFamily: "'Dancing Script', sans-serif, cursive",
    color: "#FFFFFF",
    fontSize: "40px",
    fontWeight: 300,
    lineHeight: 1.5,
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`,
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -muiBaseTheme.spacing.unit
    }
  }
});

const card = [
  {
    image: Armario_01,
    title: 'Ropero',
    info: [
      '≈ 182 cm x 154 cm x 45 cm',
      '6 Puertas',
      '2 Cajones',
    ],
    price: 'S/ 50.00',
    button: 
      <a
        className="btn-primary-slider"
        href="https://wa.me/51980895124?text=Pedido%20de%20Servicio%20de%20armado%20de%20mueble:%20Hola.%20Quiero%20que%20arme%20mi%20ropero."
        target="_blank"
        style={{ textAlign: "center" }}
      >
        <FaWhatsapp
          style={{
            fontSize: "1.4rem",
            verticalAlign: "text-bottom",
            marginRight: "5px"
          }}
        />
        Quiero el servicio
      </a>
  },
  {
    image: Centro_01,
    title: 'Centro de Entretenimento',
    info: [
      '≈ 169 cm x 143.9 cm x 36.50 cm',
      '2 Puertas',
      '1 Repisa'
    ],
    price: 'S/ 50.00',
    button:
      <a
        className="btn-primary-slider"
        href="https://wa.me/51980895124?text=Pedido%20de%20Servicio%20de%20armado%20de%20mueble:%20Hola.%20Quiero%20que%20arme%20mi%20centro%20de%20entretenimiento."
        target="_blank"
        style={{ textAlign: "center" }}
      >
        <FaWhatsapp
          style={{
            fontSize: "1.4rem",
            verticalAlign: "text-bottom",
            marginRight: "5px"
          }}
        />
        Quiero el servicio
      </a>
  },
  {
    image: Cocina_01,
    title: 'Mueble de Cocina',
    info: [
      '≈ 198 cm x 180 cm x 38.8 cm',
      '3 Cajones',
      '5 Puertas'
    ],
    price: 'S/ 65.00',
    button:
      <a
        className="btn-primary-slider"
        href="https://wa.me/51980895124?text=Pedido%20de%20Servicio%20de%20armado%20de%20mueble:%20Hola.%20Quiero%20que%20arme%20mi%20mueble%20de%20cocina."
        target="_blank"
        style={{ textAlign: "center" }}
      >
        <FaWhatsapp
          style={{
            fontSize: "1.4rem",
            verticalAlign: "text-bottom",
            marginRight: "5px"
          }}
        />
        Quiero el servicio
      </a>
  }
];


function App({ classes }) {
  return (
    <section className="cards">
      <div className="cards-overlay"></div>
      <div className="title">
        <span>- Armado de Muebles -</span>
        {/* <div className="logCom"><img src={Logo} className="log" /></div> */}
        <div className="content-atention">
          <span className="atention">🔥Atención: Lun-Dom de 08:00-17:00 horas </span>
        </div>
      </div>
      <div className="App">
        {card.map(item => {
          return (
            <article key={`item-${item.title}`}>
              <Card className={classes.card}>
                <CardMedia className={classes.media} image={item.image} />
                <CardContent className={classes.content}>
                  <Typography className={'MuiTypography--heading'} variant={'h6'} gutterBottom>
                    {item.title}
                  </Typography>
                  {(item.info).map(( item ) => (
                    <Typography className={'MuiTypography--heading'} variant={'subtitle2'} gutterBottom>
                      {item}
                    </Typography>
                  ))}
                  <Typography className={"MuiTypography--subheading"} variant={"subtitle2"} gutterBottom>
                    <h3 style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>
                      Precio: {item.price}
                    </h3>
                  </Typography>
                  <Divider className={classes.divider} light />
                  <div style={{textAlign: "center"}}>
                    {item.button}
                  </div>
                </CardContent>
              </Card>
            </article>
          );
        })}
      </div>
    </section>
    
  );
}

const Cards = withStyles(styles)(App);

const rootElement = document.getElementById("root");
ReactDOM.render(<Cards />, rootElement);

export default Cards;