import ConfigHead from '../capas/head/head';
import ConfigBody from '../capas/body/body';
import ConfigProyectos from '../capas/proyecto/proyecto';
import ConfigFooter from '../capas/footer/footer';
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

