import React from "react";
import "./Content.css";
import { Routes ,Route } from 'react-router-dom';
import About from "../../views/examples/About"
import Home from "../../views/examples/Home"
function Content() {
  return (
    <div className="Content">
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<Home/>}/>
         
      
      </Routes>
    </div>
  );
}

export default Content;
