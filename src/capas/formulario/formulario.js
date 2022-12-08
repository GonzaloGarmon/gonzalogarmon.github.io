import React from "react";
import { useForm } from "react-hook-form";
import "../formulario/formulario.css";
import { useState } from "react";



const Formulario = () => {

  

const { register,watch, formState:{errors},handleSubmit } = useForm("");
const [username, setUsername] = useState('');
const [surname, setSurname] = useState('');
const [email, setEmail] = useState('');
const [comment, setComment] = useState('');


  
const handleSubmitForm = (data,event) =>{ 
  
  console.log(data);
  
  event.preventDefault(); 
  alert('Respuesta Guardada');

  setUsername('');
  setSurname('');
  setEmail('')
  setComment('')

  };



  return (
<div className="mainDivForm">
<div className="forms">
<h2> Contactame </h2>
<div className="nombre1" > Nombre: {watch ('nombre')}</div>
<div className="apellido1" > Apellido: {watch ('apellido')} </div>
<form id="formulario" onSubmit={handleSubmit(handleSubmitForm)} >
  <div>
    <label> Nombre </label>
    <input type="text" {...register('nombre', {
      required:true,
      maxLength:10
    })} onChange={event => setUsername(event.target.value)} value={username} />

    {errors.nombre?.type === 'required' && <p className="campo"> El campo nombre es obligatorio </p>
    }
    

  </div>
  <div>
    <label> Apellido </label>
    <input type="text"  {...register('apellido',{ required:true
    
    })} onChange={event => setSurname(event.target.value)} value={surname} />

    {errors.apellido?.type === 'required' && <p className="campo"> El campo apellido es obligatorio </p>
    }
  </div>
  <div>
    <label> Email </label>
    <input  type="text"  {...register('email',  {
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
    <label> Mejora mi pagina o deja algun comentario </label>
    <input  className="mensaje"  {...register('mensaje')} onChange={event => setComment(event.target.value)} value={comment} />




  </div>
  </div>
  <input type="submit"   value="Enviar" id="enviar"  />
</form>



</div>
</div>


);
};

export default Formulario;