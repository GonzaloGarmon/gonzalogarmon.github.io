import React from "react";
import { useState, useEffect } from "react";
import UsuarioIndividual from "../usuarioIndividual/UsuarioIndividual";
import axios from 'axios'
import "./UsuarioIndividual.css"

function ListaUsuarios(){

const[datausuarios, setdatausuario] = useState([])

    useEffect(() => {
        axios.get("http://containers-us-west-186.railway.app:6983/api/usuario/obtenerusuarios").then(res => {
            console.log(res.data)
            setdatausuario(res.data)
        }).catch (err => {
        console.log(err)
        })
    }, [])

const listausuarios = datausuarios.map( usuario =>{
    return(
        <div> 
        <UsuarioIndividual usuario={usuario}/>
        </div>
        )
        })

    return(

    <div id="divdeusuarios">
        <h4 className="listitaUsuarios"> Lista de Usuarios </h4>
        <h3 id="espacio">espacio en bla</h3>
        {listausuarios}
    </div>
  )
}

export default ListaUsuarios 