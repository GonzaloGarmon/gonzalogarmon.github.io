
import React from 'react';
import '../bodySobreMi/bodySobreMi.css'
import Swal from 'sweetalert2'


const ConfigBodySobreMi = () =>{


const mostrarAlerta=()=>{

    Swal.fire({
        titleText: 'Como te habre comentado por otro lado, me llamo Gonzalo, estudio Ingenieria en sistemas en la UTN, actualmente me encuentro con 20 materias aprobadas. Me gusta trabajar en equipo e individualmente y por sobre todas las cosas aprender.',
        width: 1000,
        padding: '5rem',
        position:'center',
        color: 'rgb(255,255,255)',
        background: 'url(../bodySobreMi/byv.png',
        imageUrl:'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2AQIFBNOAZBL7PPEM32SEROJ24.jpg',
        showCloseButton: true,
        theme:'dark',
        showConfirmButton:false,
        backdrop: `
          
          url (../bodySobreMi/basquet.png)
          left top
          no-repeat
        `
      }) 
      
}


const mostrarAlerta2=()=>{

    Swal.fire({
        imageUrl:'https://www.radiodeportesescobar.com/wp-content/uploads/2017/06/Sin-t%C3%ADtulo.jpg',
        titleText: 'Ademas de ser persona dedicada, proactiva y con ganas de aprender, tambien hago deporte :)',
        text: 'DATO: juego de central en voley, en una parroquia de barrio y deje de jugar basquet hace un tiempo :( pero jugaba de Base o Alero',
        width: 1000,
        padding: '5rem',
        

        grow:'row',
        position:'center',
        color: 'rgb(255,255,255)',
        background: 'rgb(54,54,54)',
        
        showCloseButton: true,
    })
}



const mostrarAlerta3=()=>{

    Swal.fire({
        
        titleText: 'Bueno y por ultimo y no menos importante, actualmente me encuentro trabajando en el Hospital Alemán como pasante en la parte de Redes Infraestructura',
        width: 1000,
        padding: '5rem',
        position:'center',
        background: 'rgb(54,54,54)',
        showCloseButton: true,
        color: 'rgb(255,255,255)',
        backdrop: ``,
      }) 
      
}


return(
    



    <div>
    
        <div className='contenedorHobbies'>
        <h1 className="todoSobreMi"> Todo Sobre Mi</h1>
             <div className="botones"> 
                <button onClick={()=>mostrarAlerta()} className="trabajoActual"> <h4 className="textoSobreMi"> Cosas Generales </h4>   </button>  <h1 className="flecha"> ⇗</h1>
            </div>
           <div className="botones">
                <button onClick={()=>mostrarAlerta2()} className="hobbie"> <h4 className="textoSobreMi"> Hobbies </h4>   </button> <h1 className="flecha"> ⇗</h1>
           </div>
            <div className="botones">
                <button onClick={()=>mostrarAlerta3()} className="pocoDeMi"> <h4 className="textoSobreMi"> Trabajo Actual </h4>   </button > <h1 className="flecha"> ⇗</h1>
            </div>
        </div>
    </div>
 )
}


export default ConfigBodySobreMi;