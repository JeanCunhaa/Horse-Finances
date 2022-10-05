import React from "react";
import { Route,Routes, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import Cadastro from "./pages/Cadastro/index.js";
import Entrar from "./pages/Entrar/index.js";
import LandingPage from "./pages/LandingPage/index";

const Routess = () => {
   return(
       <BrowserRouter>
       <Routes>
           <Route path="/" element={ <Home/> } />
           <Route path="/cadastro" element={ <Cadastro/> } />
              <Route path="/entrar" element={ <Entrar/> } />
                <Route path="/LandingPage" element={ <LandingPage/> } />
       </Routes>
       </BrowserRouter>
   )
}
//pra usa aas rota  <Link to="/cadastro">Cadastrar</Link> ex..
export default Routess;