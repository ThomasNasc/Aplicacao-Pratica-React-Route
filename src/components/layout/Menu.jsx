import React from "react";
import "./Menu.css";
import {Link} from 'react-router-dom'
function Menu() {
  return (
    <div className="Menu">
      
      <nav>
        <ul>
          <li>
          <Link to="/">Inicio</Link>
     
          </li>
          <li>
          <Link to="/about">Sobre</Link>
        
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
