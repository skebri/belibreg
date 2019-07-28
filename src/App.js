import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage/HomePage';
import oprojektu from './Components/Pages/Oprojektu/oprojektu';
import pStanova from './Components/Pages/PonudaStanova/pStanova';
import galerija from './Components/Pages/Galerija/galerija';
import kontakt from './Components/Pages/Kontakt/kontakt';
import lokacija from './Components/Pages/Lokacija/lokacija';
import garaza from './Components/Pages/Garaza/garaza';
import stan1 from './Components/Pages/stan1/stan1';
import stan2 from './Components/Pages/stan2/stan2';
import stan3 from './Components/Pages/stan3/stan3';


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
    path="/lokacija"
    exact component={lokacija}
  />
  <Route
    path="/garaza"
    exact component={garaza}
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
  <Route
    path="/stan1"
    exact component={stan1}
  />
  <Route
    path="/stan2"
    exact component={stan2}
  />
  <Route
    path="/stan3"
    exact component={stan3}
  />
</div>


export default App;
