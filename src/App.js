import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage/HomePage';
import oprojektu from './Components/Pages/Oprojektu/oprojektu';
import pStanova from './Components/Pages/PonudaStanova/pStanova';
import galerija from './Components/Pages/Galerija/galerija';
import kontakt from './Components/Pages/Kontakt/kontakt';


const App = () =>
<div className="ui-container">
  <Route
    path="/"
    exact component={HomePage}
  />
  <Route
    path="/oprojektu"
    exact component={oprojektu}
  />
  <Route
    path="/pStanova/:id"
    exact component={pStanova}
  />
  <Route
    path="/galerija"
    exact component={galerija}
  />
  <Route
    path="/kontakt"
    exact component={kontakt}
  />
</div>


export default App;
