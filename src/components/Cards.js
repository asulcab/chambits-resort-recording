import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { FaPoundSign, FaWhatsapp, FaRulerCombined } from "react-icons/fa";

import Armario_01 from "../images/armario_1.png";
import Centro_01 from "../images/centro_1.png";
import Cocina_01 from "../images/cocina_1.png";
import ropero_lyon from "../images/ropero_lyon.png";
import ropero_cali from "../images/ropero_cali.png";
import comoda_cali from "../images/comoda_cali.png";

import Logo from "../images/logo.png";

import "../css/styles-card.css";
import { green } from "@material-ui/core/colors";

const styles = muiBaseTheme => ({
  card: {
    width: 300,
    margin: "auto",
    transition: "all .5s ease",/*0.3s */
    boxShadow: "0 1px 4px 0 rgba(0,0,0,0.16)",/*0 8px 40px -12px rgba(0,0,0,1)*/
    "&:hover": {
      boxShadow: "0 0 40px -6px rgba(0,0,0,.5)"
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
    title_0: 'Armado',
    title: 'Ropero',
    info: [
      {
        medida: '182 cm x 154 cm x 45 cm',
        detalles: [
          '6 Puertas',
          '2 Cajones',
        ]
      },      
    ],
    price: 'S/ 50.00',
    price_old: '56.90',
    message: '*Precio válido en el distrito de Huancayo.',
    button: 
      <a
        className="btn-primary-slider"
        // href="https://wa.me/51980895124?text=¡Buen%20día!%20Vengo%20de%20la%20de%20web.%20Quiero%20que%20arme%20mi%20ropero."
        href="https://bit.ly/3v36C5D"
        target="_blank"
        style={{ textAlign: "center" }}
      >
        <FaWhatsapp className="styleWhatsapp" />
        Quiero el servicio
      </a>
  },
  {
    image: Centro_01,
    title_0: 'Armado',
    title: 'Centro de Entretenimento',
    info: [
      {
        medida: '169 cm x 143.9 cm x 36.50 cm',
        detalles: [
          '2 Puertas',
          '1 Repisa'
        ]
      },      
    ],
    price: 'S/ 50.00',
    price_old: '56.90',
    message: '*Precio válido en el distrito de Huancayo.',
    button:
      <a
        className="btn-primary-slider"
        // href="https://wa.me/51980895124?text=¡Buen%20día!%20Vengo%20de%20la%20de%20web.%20Quiero%20que%20arme%20mi%20centro%20de%20entretenimiento."
        href="https://bit.ly/3YBQ1ne"
        target="_blank"
        style={{ textAlign: "center" }}
      >
        <FaWhatsapp className="styleWhatsapp" />
        Quiero el servicio
      </a>
  },
  {
    image: Cocina_01,
    title_0: "Armado",
    title: 'Mueble de Cocina',
    info: [
      {
        medida: '198 cm x 180 cm x 38.8 cm',
        detalles: [
          '3 Cajones',
          '5 Puertas'
        ]
      },
    ],
    price: 'S/ 80.00',
    price_old: '89.90',
    message: '*Precio válido en el distrito de Huancayo.',
    button:
      <a
        className="btn-primary-slider"
        // href="https://wa.me/51980895124?text=¡Buen%20día!%20Vengo%20de%20la%20de%20web.%20Quiero%20que%20arme%20mi%20mueble%20de%20cocina."
        href="https://bit.ly/3Vboaat"
        target="_blank"
        style={{ textAlign: "center" }}
      >
        <FaWhatsapp className="styleWhatsapp" />
        Quiero el servicio
      </a>
  },
  {
    image: ropero_lyon,
    title_0: "Armado",
    title: 'Ropero Lyon',
    info: [
      {
        medida: '166 cm x 182 cm x 45 cm',
        detalles: [
          '2 Cajones',
          '6 Puertas'
        ]
      },      
    ],
    price: 'S/ 80.00',
    price_old: '89.90',
    message: '*Precio válido en el distrito de Huancayo.',
    button:
      <a
        className="btn-primary-slider"
        // href="https://wa.me/51980895124?text=¡Buen%20día!%20Vengo%20de%20la%20de%20web.%20Quiero%20que%20arme%20mi%20ropero."
        href="https://bit.ly/3BMR0af"
        target="_blank"
        style={{ textAlign: "center" }}
      >
        <FaWhatsapp className="styleWhatsapp" />
        Quiero el servicio
      </a>
  },
  {
    image: ropero_cali,
    title_0: "Armado",
    title: 'Ropero Cali',
    info: [
      {
        medida: '103 cm x 182 cm x 45 cm',
        detalles: [
          '2 Cajones',
          '4 Puertas',
        ]
      }
    ],
    price: 'S/ 50.00',
    price_old: '56.90',
    message: '*Precio válido en el distrito de Huancayo.',
    button:
      <a
        className="btn-primary-slider"
        // href="https://wa.me/51980895124?text=¡Buen%20día!%20Vengo%20de%20la%20de%20web.%20Quiero%20que%20arme%20mi%20ropero."
        href="https://bit.ly/3HISA0G"
        target="_blank"
        style={{ textAlign: "center" }}
      >
        <FaWhatsapp className="styleWhatsapp" />
        Quiero el servicio
      </a>
  },
  {
    image: comoda_cali,
    title_0: "Armado",
    title: 'Cómoda Cali',
    info: [
      {
        medida: '62 cm x 91 cm x 40 cm',     
        detalles: [
        '4 Cajones',
        '0 Puertas'
        ]
      }      
    ],
    price: 'S/ 50.00',
    price_old: '56.90',
    message: '*Precio válido en el distrito de Huancayo.',
    button:
      <a
        className="btn-primary-slider"
        // href="https://wa.me/51980895124?text=Pedido%20de%20Servicio%20de%20armado%20de%20mueble:%20Hola.%20Quiero%20que%20arme%20mi%20cómoda."
        // href="https://wa.me/51980895124?text=¡Buen%20día!%20Vengo%20de%20la%20de%20web.%20Quiero%20que%20arme%20mi%20cómoda."
        href="https://bit.ly/3Vb0fru"
        target="_blank"
        style={{ textAlign: "center" }}
      >
        <FaWhatsapp className="styleWhatsapp" />
        Quiero el servicio
      </a>
  }
];

function App({ classes }) {
  return (
    <section className="cards">
      <div className="cards-overlay"></div>
      <div className="title">
        <h4>Armado de Muebles</h4>
        {/* <div className="logCom"><img src={Logo} className="log" /></div> */}
        <div></div>
        <span className="content-atention">
          <a className="atention">🔥Atención: Lun-Sab de 08:00-17:00 horas </a>
        </span>
      </div>
      <div className="App">
        {card.map(item => {
          return (
            <article key={`item-${item.title}`}>
              <Card className={classes.card}>
                <CardMedia className={classes.media} image={item.image} style={{margin: "10px auto"}} />
                <CardContent className={classes.content} style={{borderTop: "1px solid #eae6e6"}}>
                  <div style={{width:"fit-content", backgroundColor: "green", borderRadius: ".3rem"}}>
                  <Typography style={{color: "#fff", marginBottom: "0", fontWeight: 400, padding: ".1rem .3rem"}} className={"MuiTypography--heading"} variant={"subtitle2"} gutterBottom>
                    { item.title_0 }
                  </Typography>  
                  </div>
                  <Typography className={'MuiTypography--heading'} variant={'h6'} gutterBottom>
                    {item.title}
                  </Typography>
                  {(item.info).map(( item ) => (
                    <Typography className={'MuiTypography--heading'} variant={'subtitle2'} gutterBottom>
                      <FaRulerCombined className="styleRuler" />{item.medida}                   
                      {(item.detalles).map(item =>(
                        <ul className="ListCard">
                          <li>{item}</li>
                        </ul>
                      ))}
                    </Typography>
                  ))}                  
                  <Typography className={"MuiTypography--subheading"} variant={"subtitle2"} gutterBottom>
                    <h3 style={{ marginTop: "0.5em", marginBottom: "0" }}>
                      Desde: {item.price}                      
                    </h3>
                    {(item.price_old != '')
                       ?
                      <span>
                        <em style={{fontSize: "17px", color: "red", fontWeight: "400", fontStyle: "normal"}}>Precio Regular: S/ </em>
                        <span className="price_old">
                          {item.price_old}
                        </span>
                      </span>
                      :
                      ''
                    }
                  </Typography>
                  <span style={{fontSize:"11px", color: "#999999"}}>{item.message}</span>
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