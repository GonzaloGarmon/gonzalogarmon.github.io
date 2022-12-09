import React from "react";
import ConfigFooter from '../capas/footer/footer';
import ConfigHeadModificado from '../capas/headModificado/headModificado';
import ConfigBodyCv from "../capas/bodyCv/configBodyCv";



const Curriculum = () => {
    return(
    <>
        <ConfigHeadModificado/>
        <ConfigBodyCv/>
        <ConfigFooter/>
    </>  
    )
};

export default Curriculum;