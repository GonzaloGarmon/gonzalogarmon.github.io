
import React, { useEffect,useState } from "react"
import {useParams} from 'react-router'
import axios from "axios"
import "./EditarUsuario.css"
import ConfigHead from '../head/head'
import ConfigFooter from '../footer/footer';
import { Link } from "react-router-dom"

function EditarUsuario(){

    const params = useParams()

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [comentario, setComentario] = useState('')

    useEffect(()=>{
        axios.post("http://containers-us-west-186.railway.app:6983/api/usuario/obtenerdatausuario", {idusuario: params.idusuario}).then(res =>{

            console.log(res.data[0])
            const datausuario = res.data[0]
            setNombre(datausuario.nombre)
            setApellido(datausuario.apellido)
            setEmail(datausuario.email)
            setComentario(datausuario.comentario)

        })
    }, [])

    function editarUsuario(){
        //Nuevo objeto para actualizar el usuario
        const actualizausuario = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            comentario: comentario,
            idusuario: params.idusuario
        }

        //Aca volvemos a hacer la peticion con axios
        axios.post("http://containers-us-west-186.railway.app:6983/api/usuario/actualizausuario", actualizausuario)
        .then(res => {

            alert(JSON.stringify(actualizausuario));
        })
        .then(err => {console.log(err)})
    }


    return(
        <div>
            <ConfigHead/>
      <div  id="cont">
        
        <div >
            <h2 > Editar Usuario</h2>
            </div>
            <div id="contenedorprincipal">
            <div id="columnass">
            <div>
                <label id="label"htmlFor="nombre" > Nombre </label>
                <input id="input" type="text" className="form-control" value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>

            </div>
            <div className="mb-3">
                <label id="label" htmlFor="apellido" > Apellido </label>
                <input id="input" type="text" className="form-control" value={apellido} onChange={(e) => {setApellido(e.target.value)}}></input>

            </div>
            <div className="mb-3">
                <label id="label" htmlFor="email" > Email </label>
                <input id="input" type="text" className="form-control" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>

            </div>
            <div className="mb-3">
                <label id="label" htmlFor="comentario" > Comentario </label>
                <input id="input" type="text" className="form-control" value={comentario} onChange={(e) => {setComentario(e.target.value)}}></input>

            </div>

            <Link to={`../contacto`}><button onClick={editarUsuario} id="boton"className="btn btn-success"> Actualizar Usuario</button></Link>
        </div>
      </div>
      </div>
      <ConfigFooter/>
      </div>
    )
  }

export default EditarUsuario