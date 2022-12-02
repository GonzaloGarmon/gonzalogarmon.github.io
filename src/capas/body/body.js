import React from "react";
import '../body/body.css';
import  gonza from '../body/gonza.jpg';
import { Link } from 'react-router-dom';


const ConfigBody = () => {
    
    return(
    <section className="mainDivgrid">


    <div className="caja_foto" >
        <img src={gonza} alt="gonza" />
    </div>
    <div className="caja_nombre">
      <h1 className="yo">Gonzalo Garmon</h1>
      <h3>Estudiante en ingenieria en sistemas</h3>
    <Link className="link1"to={'/contacto'} >Codea conmigo</Link>
  
    </div>
    <div className="projecto">
    <h3>Projectos</h3>
    </div>
    
    
  </section>
       

    )
}

export default ConfigBody
