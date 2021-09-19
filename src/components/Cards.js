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

import Broaster01 from "../images/broaster01.jpeg";
import Broaster02 from "../images/broaster02.jpeg";
import Broaster03 from "../images/broaster03.jpeg";
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
    paddingTop: "56.25%"
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
    image: Broaster01,
    title: 'Combo Personal',
    info: [
      '1/4 de Pollo Broaster',
      '+ Papas',
      '+ Ensalada',
      '+ 450ml Gaseosa (Inca/Coca)',
    ],
    price: 'S/ 19.00',
    button: 
      <a
        className="btn-primary-slider"
        href="https://wa.me/51980895124?text=Pedido%20broaster:%20Hola.%20Quiero%20el%20combo%20personal."
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
        Pedir ahora
      </a>
  },
  {
    image: Broaster02,
    title: 'Combo Familiar',
    info: [
      '3/4 de Pollo Broaster',
      '+ Porción de Papas Familiar',
      '+ Ensalada Familiar',
      '+ 1L Gaseosa (Inca/Coca)',
    ],
    price: 'S/ 49.00',
    button:
      <a
        className="btn-primary-slider"
        href="https://wa.me/51980895124?text=Pedido%20broaster:%20Hola,%20quiero%20el%20combo%20familiar."
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
        Pedir ahora
      </a>
  },
  {
    image: Broaster03,
    title: 'Combo Súper Familar',
    info: [
      '4/4 de Pollo Broaster',
      '+ Porción de Papas Súper Familiar',
      '+ Ensalada Familiar',
      '+ 1.5L Gaseosa (Inca/Coca)'
    ],
    price: 'S/ 64.00',
    button:
      <a
        className="btn-primary-slider"
        href="https://wa.me/51980895124?text=Pedido%20broaster:%20Hola.%20Quiero%20el%20combo%20súper%20familiar."
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
        Pedir ahora
      </a>
  }
];


function App({ classes }) {
  return (
    <section className="cards">
      <div className="cards-overlay"></div>
      <div className="title">
        <span>- Pollo Broaster -</span>
        {/* <div className="logCom"><img src={Logo} className="log" /></div> */}
        <div className="content-atention">
          <span className="atention">🔥Delivery: Lun-Dom de 16:00-22:00 horas </span>
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