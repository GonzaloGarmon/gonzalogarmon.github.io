
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
        color: 'rgb(0,0,0)',
        imageUrl:'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2AQIFBNOAZBL7PPEM32SEROJ24.jpg',
        showCloseButton: true,
        showConfirmButton:false,
        backdrop: `
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
    })
}



const mostrarAlerta3=()=>{

    Swal.fire({
        
        titleText: 'Bueno y por ultimo y no menos importante, actualmente me encuentro trabajando en el Hospital Alemán como pasante en la parte de Redes Infraestructura',
        width: 1000,
        padding: '5rem',
        position:'center',
        background: 'rgb(0,0,0)',
        imageUrl: 'https://i.ytimg.com/vi/lAGNEGWJ3Ic/maxresdefault.jpg',     
        html: 
        'Para mas informacion, podes ingresar a este, ' +
        '<a href="https://www.hospitalaleman.org.ar/?gclid=CjwKCAiAs8acBhA1EiwAgRFdw3PmkTKr1Ol1QNsdPElITYCzUwhOnEILNRV7PLL8_TNLjgJckLEm-xoCV8sQAvD_BwE"><b>link</b></a>',   
   
        showCloseButton: true,
        showConfirmButton: false,
        color: 'rgb(255,255,255)',
        backdrop: ``,
      }) 
      
}


return(
    



    <div>
    
        <div className='contenedorHobbies'>
        <h1 className="todoSobreMi"> Todo Sobre Mi</h1>
             <div className="botoness"> 
                <button onClick={()=>mostrarAlerta()} className="trabajoActual"> <h3 className="textoSobreMi1"> Cosas Generales </h3>   </button>  <h1 className="flechitas"> ⇗</h1>
            </div>
           <div className="botoness">
                <button onClick={()=>mostrarAlerta2()} className="hobbie"> <h3 className="textoSobreMi2"> Hobbies </h3>   </button> <h1 className="flechitas"> ⇗</h1>
           </div>
            <div className="botoness">
                <button onClick={()=>mostrarAlerta3()} className="pocoDeMi"> <h3 className="textoSobreMi3"> Trabajo Actual </h3>   </button > <h1 className="flechitas"> ⇗</h1>
            </div>
        </div>
    </div>
 )
}


export default ConfigBodySobreMi;