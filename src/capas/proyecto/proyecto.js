import React from "react";  
import '../proyecto/proyecto.css'
import Projecto from '../proyecto/proyecto1.png'
import Frontend from '../proyecto/frontend1.png'
import Proximamente from '../proyecto/proximamente.png'

const ConfigProyectos = () => {
    
    return(

    <div className="proyectos">
        <div className="proyectito">
            <div className="lineaProyecto">
                <h3 className="proyecto">Proyecto Carpinchos <a className="flecha"href="https://github.com/pdepjm/2021-o-tpi-juego-e35ms">➤</a></h3>
                </div> 
                 <img className="imagenes" src={Projecto} alt="projecto"></img>
                </div> 
        <div className="proyectito">
            <div className="lineaProyecto">
                <h3 className="proyecto">Proyecto Front <a className="flechafront"href="https://github.com/pdepjm/2021-o-tpi-juego-e35ms">➤</a></h3>
                </div> 
                 <img className="imagenes" src={Frontend} alt="projecto"></img>
                </div> 
        <div className="proyectito">
            <div className="lineaProyecto">
                <h3 className="proyecto">Proximamente..</h3>
                </div> 
                <img className="imagenes" src={Proximamente} alt="projecto"></img>
                </div>
        <div className="proyectito">
            <div className="lineaProyecto"><h3 className="proyecto">Proximamente..</h3>
            </div>
            <img className="imagenes" src={Proximamente} alt="projecto"></img> 
            </div>
    </div>


    )
}

export default ConfigProyectos;