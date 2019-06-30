import React from 'react';
import './kontakt.scss';
import logo from '../../../assets/logo1.png';
import Header from '../../../Common/Header/Header';
import Footer from '../../../Common/Footer/Footer';
import Title from '../../../Common/Title/Title';

const kontakt = () =>
     <div className="kontakt">
      <Header />
      <div className="page-container">
        <Title text="KONTAKT"/>
        <div className="logo">
          <img className="kont-img" src={logo} alt="logo"/>
        </div>
        <div className="kont-title">
          <div className="line right"></div>
          <h1 className="descrip">INOVATION TEAM CO D.O.O.</h1>
        </div>
        <div className="kontakt-items">
          <div className="kontakt-item"><span className="bold bold-no-margin">ADRESA:</span><span className="grey">INOVATION TEAM CO D.O.O.</span></div>
          <div className="kontakt-item"><span className="bold bold-no-margin">MATICNI BROJ:</span><span className="grey">2113321456</span></div>
          <div className="kontakt-item"><span className="bold bold-no-margin">PIB:</span><span className="grey">2113321456</span></div>
        </div>
      </div>
      <Footer />
     </div>

export default kontakt;
