import React from 'react';
import './lokacija.scss';
import Header from '../../../Common/Header/Header';
import Map from '../../../Common/Map/Map';

const lokacija = () => (
  <div className="lokacija">
    <Header />

    <div className="location-wrapper">
      <Map />

      <div className="location-content">
        <h1>Lokacija</h1>
        <p>
          Beli Breg rezidencijalni kompleks je smešten u novom centru Rume na izmedju
          ulica Matije Gupca 17 i Iriške. Lokacija je izuzetno dobro povezana sa centrom grada
          i glavnim ulicama grada koje vode ka izlazu.
        </p>

        <ul className="location-tekst">
            <li>
              - Ulaz:<br />
              1. Iriška<br />
              2. Matije Gupca<br />
            </li>
          </ul>
          <ul className="location-tekst">
            <li>
              - Pogled:<br />
              Grad<br />
              Centar<br />
            </li>
          </ul>
          <ul className="location-tekst">
            <li>- Univerexport 30m</li>
            <li>- Osnovna škola “Ivo Lola Ribar” 50m</li>
            <li>- Osnovna škola “Zmaj Jova Jovanović” 100m</li>
            <li>- Dečiji park Rodić parkić” 70m</li>
            <li>- Policijska stanica 100m</li>
            <li>- Pogled na crkvu Svetog duha i crkvu Vaznesenja gospodnjeg 120m</li>
            <li>- Dom zdravlja Ruma 400m</li>
            <li>- Predškolska ustanova Poletarac 400m</li>
            <li>- Vrtić-Jaslice 500m</li>
            <li>- Direktan prikljucak na novi auto put za Beograd-Ruma-Novi Sad, i Ruma-Šabac-Loznicu</li>
          </ul>
      </div>
    </div>

  </div>
);

export default lokacija;
