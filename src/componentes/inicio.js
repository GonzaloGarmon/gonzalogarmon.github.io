import ConfigHead from '../capas/head/head';
import ConfigFooter from '../capas/footer/footer';
import ConfigBody from '../capas/body/body';
import ConfigProyectos from '../capas/proyecto/proyecto';

import React from 'react';

const Inicio = () =>{
    return(
    <>
        <ConfigHead/>
        <ConfigBody/>
        <ConfigProyectos/>
        <ConfigFooter/>   
    </>
    )
};

export default Inicio;

