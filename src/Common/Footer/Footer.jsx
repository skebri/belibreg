import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import logo from '../../assets/logo-white.png';
import './Footer.scss';

const Footer = () =>

  <div className="footer">

  <div className="kontakt">
    <div className="line right"></div>
    <h1 className="kontakt-h1">Kontakt</h1>
    <h1 className="kontakt-radno">Radno vreme od 08:00 - 16:00</h1>
    <div className="kontakt-about">
      <p>Email: prodaja@belibreg.com</p>
      <p>Telefon: +38163/515-154</p>
    </div>
    <p className="invest">Investitor: Inovation Team Co d.o.o.</p>
  </div>

  <div className="footer-content">
    <div className="footer-flex">
    <div className="footer-nav">
      <h1 className="footer-h1">Meni</h1>
      <Link className="footer-link" to="/oprojektu">O projektu</Link>
      <Link className="footer-link" to="/pStanova/1">Ponuda stanova</Link>
      <Link className="footer-link" to="/galerija">Galerija</Link>
      <Link className="footer-link" to="/lokacija">Lokacija</Link>
      <Link className="footer-link" to="/kontakt">Kontakt</Link>
    </div>
    <div className="footer-social">
      <img className="footer-logo" src={logo} alt="logo"/>
      <div className="social-icons">
        <a href="https://mobile.facebook.com/BeliBregRuma/about/?ref=page_internal&_rdc=1&_rdr"><img src={facebook} alt=""/></a>
        <a href="https://instagram.com/beli_breg_ruma?igshid=c3o5rjbexjkl"><img src={instagram} alt=""/></a>
      </div>
    </div>
   </div>
   <p className="copyright">Copyright@ Inovation Team Co All rights reserved</p>
  </div>

</div>

export default Footer;
