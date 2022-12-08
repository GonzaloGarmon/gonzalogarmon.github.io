import React from "react";  
import '../footer/footer.css';




function ConfigFooter () {

    function handleScrollToTop ()  {
    document.documentElement.scrollTop = 0;
}

    return(
    
<div>

        <div className="footer"> 
            <div className="todasAtenciones">
                <h1 className="atencion"> Tengo tu atencion? Hablame! ↓ </h1>
                <h3 className="atenciones"> ✉  gonzagarmon@hotmail.com  <a className="li1"href= "mailto:gonzagarmon@hotmail.com">↗</a></h3>
                <h3 className="atenciones"> ✆  +54 9 11 5408 9739  <a className="li1" href="https://wa.me/5491154089739">↗</a></h3>
                <h3 className="atenciones1"> <h3 className="linked">in</h3> /gonzalo-garmón-03b42617a  <a className="li1" href="https://www.linkedin.com/in/gonzalo-garmón-03b42617a/LinkedIn">↗</a></h3>
                
            </div>
            <div className="botonTop">
                    <button className="botonVuelta" onClick={handleScrollToTop} >  <h6 className="up">Volver arriba</h6> <h6 className="up">↑</h6> <h6 className="up"> Volver arriba</h6>  </button>
            </div>
            
            
        </div>
        
   
        <div className="comentario">
            <h5> Hecho con mucho 🤍, 💭, 🙇🏻‍♀️ y por Gonzalo Garmon</h5>
        </div>

</div>
    )
}

export default ConfigFooter