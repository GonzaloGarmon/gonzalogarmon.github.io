import React from "react";
import '../head/head.css';
import NavBarExample from "../navbarHead/navbar.js";


const ConfigHead = () => {

    return (
        
    <div className="mainDivHead">
        <head>
            <title> Pagina Oficial </title>
        </head>
        <header className = "flex_header">
            <div>
                <h1 className="gg">GG</h1>
            </div>
            <div className="contenedor">
              <NavBarExample/>
            </div>
            
        </header>
    </div>
    )
}

export default ConfigHead;


