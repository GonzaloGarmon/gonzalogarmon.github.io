import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from "react-router-dom";
import { Route, Routes} from "react-router-dom";
import Inicio from './componentes/inicio';
import Contacto from './componentes/contacto';
import Curriculum from './componentes/cv';
import SobreMi from './componentes/sobreMi';


function App() {

  return (
    <div className='mainDiv'>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Inicio/>}> </Route>
              <Route path="/gonzalogarmon.github.io" element={<Inicio/>}> </Route>
              <Route path="/contacto" element={<Contacto/>}> </Route>
              <Route path="/cv" element={<Curriculum/>} > </Route>
              <Route path="/sobreMi" element={<SobreMi/>} > </Route>
        <Route path="/" element={<Inicio/>}> </Route>
        </Routes>
    </BrowserRouter>
    </div>
  )
};

export default App;