import React from "react"
import '../bodyCv/configBodyCv.css'
import  Cv from '../bodyCv/cv.png';
import  Cvingles from '../bodyCv/cvingles.png';

const ConfigBodyCv = () =>{

return(

<div className="curriculums">
        <div >
            <div>
               
                </div> 
                 <img className="cvs1" src={Cv} alt="projecto"></img>
                </div> 
                <div >
            <div >
              
                </div> 
                 <img className="cvs2" src={Cvingles} alt="projecto"></img>
                </div> 

            </div>
 )
}

export default ConfigBodyCv