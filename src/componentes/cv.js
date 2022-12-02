import React from "react";
import ConfigFooter from '../capas/footer/footer';
import ConfigHead from '../capas/head/head';
import  Cv from '../componentes/cv.jpg';
import  Cvingles from '../componentes/cvingles.jpg';

const Curriculum = () => {
    return(
    <>
        <ConfigHead/>
        <section className="sos">
            <div className="caja_1" >
                <img src={Cv} alt="gonza" className="yop" />
            </div>
            <div className="caja_2" >
                <img src={Cvingles} alt="gonza" className="yop" />
            </div> 
            </section>
        <ConfigFooter/>
    </>
    )
};

export default Curriculum;