import React from "react";
import '../headSobreMi/headSobreMi.css'
import NavbarSobreMi from "../navbarSobreMi/navbarDefault.js";


const ConfigHeadSobreMi = () => {

    return (
        
    <div className="mainSobreMi">
        <head>
            <title> Pagina Oficial </title>
        </head>
        <header className = "navbarSobreMi">
            <div className="contenedorNavBar">
                <NavbarSobreMi/>
            </div>
            <div className="flexSobreMi">
                <h1 className="ggSobreMi">GG</h1>
            </div>
            
        </header>
    </div>
    )
}

export default ConfigHeadSobreMi 