import React from "react";
import './headModificado.css'
import NavBarModificado from "../navbarModificado/navbarModificado.js";


const ConfigHeadModificado = () => {

    return (
        
    <div className="mainSobreMi">
        <head>
            <title> Pagina Oficial </title>
        </head>
        <header className = "navbarSobreMi">
            <div className="contenedorNavBar">
                <NavBarModificado/>
            </div>
            <div className="flexSobreMi">
                <h1 className="ggSobreMi">GG</h1>
            </div>
            
        </header>
    </div>
    )
}

export default ConfigHeadModificado 