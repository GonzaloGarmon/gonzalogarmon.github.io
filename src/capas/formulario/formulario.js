import React from "react";
import { useForm } from "react-hook-form";
import "../formulario/formulario.css";







const Form = () => {


const { register, formState:{errors}, watch ,handleSubmit } = useForm("");
const onSubmit = (data) =>{ 
  console.log(data);
}

  return (
<div className="mainDivForm">
<div className="forms">
<h2> Contactame </h2>
<div className="nombre"> Nombre: {watch ('nombre')}</div>
<div className="apellido"> Apellido: {watch ('apellido')}</div>
<form id="formulario"onSubmit={handleSubmit(onSubmit)} >
  <div>
    <label> Nombre </label>
    <input type="text" {...register('nombre', {
      required:true,
      maxLength:10
    })} />

    {errors.nombre?.type === 'required' && <p> El campo nombre es obligatorio </p>
    }
    {errors.nombre?.type ==='maxlength' && <p> El campo nombre debe tener menos de 10 caracteres</p>
    }
    

  </div>
  <div>
    <label> Apellido </label>
    <input type="text" {...register('apellido',{ required:true
    
    })} />

    {errors.apellido?.type === 'required' && <p> El campo nombre es obligatorio </p>
    }
  </div>
  <div>
    <label> Email </label>
    <input type="text" {...register('email',  {
      required:true,
      pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    })} />


{errors.email?.type === 'pattern' &&  <p> El formato es incorrecto </p>
    }
{errors.email?.type === 'required' && <p> El campo de email es obligatorio </p>
    }
  </div>
  <div>
    
  <div className="mensaje">
    <label> Mejora mi pagina o deja algun comentario </label>
    <input className="mensaje" type="text"  {...register('mensaje')} />




  </div>
  </div>
  <input type="submit" value="Enviar" className="enviar" />
</form>



</div>
</div>


);
};

export default Form;