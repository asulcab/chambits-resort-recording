import React from 'react';
import { FaHeart } from 'react-icons/fa';
import Pay from "../images/yape-plin.png";

const style = {
  textAlign: 'center'
}
function Footer() {
  return(
    <footer>
      <section>
        <a>
          De Huancayo con 
          <span> <FaHeart /> </span>
          para el mundo
        </a>
        {/* <div>
          <img src={Pay}/>
        </div> */}
      </section>
    </footer>
  )
}

export default Footer;