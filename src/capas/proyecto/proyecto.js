import React from "react";  
import '../proyecto/proyecto.css'
import Projecto from '../proyecto/proyecto1.png'
import Frontend from '../proyecto/frontend1.png'

const ConfigProyectos = () => {
    
    return(

    <div className="proyectos">
        <div className="proyecto">
            <div className="lineaProyecto">
                <h3 className="proyecto1">Proyecto Carpinchos <a className="flecha"href="https://github.com/pdepjm/2021-o-tpi-juego-e35ms">➤</a></h3>
                </div> 
                 <img className="carpinchos" src={Projecto} alt="projecto1"></img>
                </div> 
            <div className="proyecto"><div className="lineaProyecto">
                <h3 className="proyecto1">Proyecto front end<a className="flecha"href="https://github.com/pdepjm/2021-o-tpi-juego-e35ms">➤</a> </h3>
                </div> <img className="frontend" src={Frontend} alt="projecto1"></img>
            </div>
        <div className="proyecto"><div className="lineaProyecto"><h3 className="proyecto2">Proximamente..</h3></div> </div>
        <div className="proyecto"><div className="lineaProyecto"><h3 className="proyecto2">Proximamente..</h3></div> </div>
    </div>


    )
}

export default ConfigProyectos;