import React from "react";
import ConfigFooter from '../capas/footer/footer';
import NavBarDefault from "../capas/navbarDefault/navbarDefault";
import ConfigBodyCv from "../capas/bodyCv/configBodyCv";



const ConfigHeadCv = ()  => {
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




const Curriculum = () => {
    return(
    <>
        <ConfigHeadCv/>
        <ConfigBodyCv/>
        <ConfigFooter/>
    </>  
    )
};

export default Curriculum;