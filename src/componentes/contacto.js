import React from "react";
import ConfigFooter from '../capas/footer/footer';
import Form from "../capas/formulario/formulario";


import NavBarDefault from "../capas/navbarDefault/navbarDefault";


const ConfigHeadContacto = ()  => {
        return(
            
<div className="mainDivHead">
        <head>
            <title> Pagina Oficial </title>
        </head>
        <header className = "flex_header">
            <div>
                <h1 className="gg">GG</h1>
            </div>
            <div className="contenedor">
              <NavBarDefault/>
            </div>
            
        </header>
    </div>
        )
}


const Contacto = () =>  {
    return(
    <div>
        <ConfigHeadContacto/>        

        <Form/>
            
        <ConfigFooter/>
    </div>
    )
};



export default Contacto;

