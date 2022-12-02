import React from "react";  
import '../footer/footer.css';


const ConfigFooter = () => {
    
    return(
    
<div >
    <div>
        <div className="gridFooter">
            <div className="footer"> 
                <h1> Tengo tu atencion? Hablame! ↓ </h1>
                <h3 className="footers"> ✉  gonzagarmon@hotmail.com  <a className="li1"href= "mailto:gonzagarmon@hotmail.com">↗</a></h3>
                <h3 className="footers"> ✆  +54 9 11 5408 9739  <a className="li1" href="https://wa.me/5491154089739">↗</a></h3>
                <h3 className="footers4"><button className= "linked"> in </button> /gonzalo-garmón-03b42617a  <a className="li1" href="https://www.linkedin.com/in/gonzalo-garmón-03b42617a/LinkedIn">↗</a></h3>
                
            
            </div>
            
            
        </div>
        <div className="botonTop">
        <a className="li"href="/"><button className="botonVuelta">  <h6 className="up">Volver arriba</h6> <h6 className="up">↑</h6> <h6 className="up"> Volver arriba</h6>  </button></a>
        </div>
    </div>
        <div className="comentario">
            <h5> Hecho con mucho 🤍, 💭, 🙇🏻‍♀️ y por Gonzalo Garmon</h5>
        </div>

</div>
    )
}

export default ConfigFooter