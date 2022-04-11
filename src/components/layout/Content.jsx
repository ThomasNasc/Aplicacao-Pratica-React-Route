import React from "react";
import "./Content.css";
import { Routes ,Route } from 'react-router-dom';
import About from "../../views/examples/About"
import Home from "../../views/examples/Home"
import Param from "../../views/examples/Param";
import NotFound from "../../views/examples/NotFound";
function Content() {
  return (
    <div className="Content">
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/param/:id" element={<Param/>}/>
        <Route path="*" element={<NotFound/>}/>
         
      
      </Routes>
    </div>
  );
}

export default Content;
