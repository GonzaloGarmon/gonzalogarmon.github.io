import React from "react";
import { useForm,  } from "react-hook-form";
import "../formulario/formulario.css";
import { useState } from "react";
import Swal from 'sweetalert2';
import axios from 'axios';
import uniquid from 'uniqid';
import ListaUsuarios from "../usuarioIndividual/ListaUsuarios";

const Formulario = () => {



  const RespuestaGuardada = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  

const { register, formState:{errors},handleSubmit } = useForm("")
const [nombre, setNombre] = useState('')
const [apellido, setApellido] = useState('')
const [email, setEmail] = useState('')
const [comentario, setComentario] = useState('')

function agregarUsuario(){
  var usuario = {
    nombre: nombre,
    apellido: apellido,
    email: email,
    comentario: comentario,
    idusuario: uniquid()
  }

  console.log(usuario)

  axios.post('https://containers-us-west-186.railway.app:6983/api/usuario/agregarusuario', usuario)
  .then(res => {

    alert("Se agrego usuario")

    // RespuestaGuardada.fire({
    //   icon: 'success',
    //   title: 'Respuesta Guardada'
    // })
    
    // setNombre('')
    // setApellido('')
    // setEmail('')
    // setComentario('')

  })
  .then(err => {console.log(err)})

}

  
// const handleSubmitForm = (event,data) =>{ 
  
//   event.preventDefault()

// }


  return (
<div className="listaDeUsuariosDiv">
  <div className="mainDivForm">
<div className="forms">
<h2> Contactame </h2>
<form id="formulario" >
  <div >
    <label className="label"> Nombre </label>
    <input className="inputs1" type="text" {...register('nombre', {
      required:true,
      maxLength:10
    })} onChange={event => setNombre(event.target.value)} value={nombre} />

    {errors.nombre?.type === 'required' && <p className="campo"> El campo nombre es obligatorio </p>
    }
    

  </div>
  <div>
    <label className="label"> Apellido </label>
    <input className="inputs1" type="text"  {...register('apellido',{ required:true
    
    })} onChange={event => setApellido(event.target.value)} value={apellido} />

    {errors.apellido?.type === 'required' && <p className="campo"> El campo apellido es obligatorio </p>
    }
  </div>
  <div >
    <label className="label"> Email </label>
    <input className="inputs1"  type="text"  {...register('email',  {
      required:true,
      pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    })} onChange={event => setEmail(event.target.value)} value={email} />


{errors.email?.type === 'pattern' &&  <p className="campo"> El formato es incorrecto </p>
    }
{errors.email?.type === 'required' && <p className="campo"> El campo de email es obligatorio </p>
    }
  </div>
  <div>
    
  <div className="mensaje1">
    <label className="label"> Mejora mi pagina dejando algun comentario </label>
    <input  className="mensaje"  {...register('mensaje')} onChange={event => setComentario(event.target.value)} value={comentario} />

  </div>
  </div>
  <button id="enviar" onClick={agregarUsuario} > Enviar </button>
</form>

</div>



</div>

<ListaUsuarios/>

</div>

);
};

export default Formulario;




