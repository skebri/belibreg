import React from 'react';
import './kontakt.scss';
import mail from '../../../assets/email_icon.png';
import lok from '../../../assets/map_pin_icon.png';
import tel from '../../../assets/phone_icon.png';
import Header from '../../../Common/Header/Header';
import Footer from '../../../Common/Footer/Footer';
import Title from '../../../Common/Title/Title';
import Map from '../../../Common/Map/Map';

const kontakt = () => (
  <div className="kontakt">
    <Header />

    <div className="kontakt-wrapper">
      <Map />

      <div className="kontakt-content">
        <h1>Kontakt</h1>
        <p>
          Za sve informacije u vezi projekta, kupovine stanova, parking mesta i lokala, kao i mogućnosti kreditiranja, kontaktirajte naš prodajni tim.
           Rado ćemo Vam odgovoriti u najkraćem mogućem roku.
        </p>

        <div className="kontakt-info">
          <div className="info-item">
            <img src={lok} />
            <p>Podravska 34</p>
            <p>11000 Vozdovac</p>
            <a href="https://belibreg.rs/">belibreg.rs</a>
          </div>
          <div className="info-item pad">
            <img src={tel} />
            <p>Podravska 34</p>
            <p>11000 Vozdovac</p>
          </div>
          <div className="info-item pad">
            <img src={mail} />
            <p>Podravska 34</p>
            <p>11000 Vozdovac</p>
          </div>
        </div>

        <div className="kont-title">
          <h1 className="descrip">INOVATION TEAM CO D.O.O.</h1>
        </div>

        <div className="kontakt-items">
          <div className="kontakt-item"><span className="">ADRESA:</span><span className="grey">INOVATION TEAM CO D.O.O.</span></div>
          <div className="kontakt-item"><span className="">MATICNI BROJ:</span><span className="grey">2113321456</span></div>
          <div className="kontakt-item"><span className="">PIB:</span><span className="grey">2113321456</span></div>
        </div>
      </div>
    </div>


  </div>
);

export default kontakt;
