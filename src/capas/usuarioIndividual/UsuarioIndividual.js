
import React from "react";
import "../usuarioIndividual/UsuarioIndividual.css"
import { Link } from "react-router-dom";
import axios from "axios";


function UsuarioIndividual({usuario}){




  function borrarusuario(idusuario){
    axios.post("http://localhost:5000/api/usuario/borrarusuario", {idusuario: idusuario}).then(res =>{

    console.log(res.data)
    alert("Usuario Borrado")
    window.location.reload();
    

  }).catch(err =>{
    console.log(err)
  }) 

}
    return(
      <div className="divprincial">
      <div className="containerListado">
        <div classname="row">
            <div className="col-sm-6 offset-3" id="columnas">
          <ul className="list-group">
            <li classname="list-group-item">{usuario.idusuario}</li>
            <li classname="list-group-item">{usuario.nombre}</li>
            <li classname="list-group-item">{usuario.apellido}</li>
            <li classname="list-group-item">{usuario.email}</li>
            <li classname="list-group-item">{usuario.comentario}</li>
          </ul>
          
          <Link to={`/contacto/editarusuario/${usuario.idusuario}`}><button >Editar</button></Link>
          <Link to={`/contacto`}><button onClick={() => {borrarusuario(usuario.idusuario)} }>Borrar</button></Link>
          <hr className="mt-4"></hr>
        </div>
      </div>
      </div>
      </div>
    )
  }

export default UsuarioIndividual