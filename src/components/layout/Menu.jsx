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
          <li>
          <Link to="/param/123">Param 01</Link>
        
          </li>
          <li>
          <Link to="/param/legal">Param 02</Link>
        
          </li>
          <li>
          <Link to="/naoExiste">Não Existe</Link>
        
          </li>
      </nav>
    </div>
  );
}

export default Menu;
