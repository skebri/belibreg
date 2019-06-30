import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import yt from '../../assets/yt.png';
import logo from '../../assets/logo.png';
import './Footer.scss';

const Footer = () =>

  <div className="footer">

  <div className="kontakt">
    <div className="line right"></div>
    <h1 className="kontakt-h1">Kontakt</h1>
    <h1 className="kontakt-radno">Radno vreme od 08:00 - 16:00</h1>
    <div className="kontakt-about">
      <p>Email: prodaja@belibreg.com</p>
      <p>Telefon: +38164/2222-333</p>
      <p>Fax: +38164/2222-333</p>
    </div>
    <p className="invest">Investitor: Inovation Team Co d.o.o.</p>
  </div>

  <div className="footer-content">
    <div className="footer-flex">
    <div className="footer-nav">
      <h1 className="footer-h1">Meni</h1>
      <Link className="footer-link" to="/oprojektu">O projektu</Link>
      <Link className="footer-link" to="/pStanova">Ponuda stanova</Link>
      <Link className="footer-link" to="/galerija">Galerija</Link>
      <Link className="footer-link" to="/investitor">Investitor</Link>
      <Link className="footer-link" to="/kontakt">Kontakt</Link>
    </div>
    <div className="footer-social">
      <img className="footer-logo" src={logo} alt="logo"/>
      <div className="social-icons">
        <img src={facebook} alt=""/>
        <img src={twitter} alt=""/>
        <img src={yt} alt=""/>
      </div>
    </div>
   </div>
   <p className="copyright">Copyright@ Inovation Team Co All rights reserved</p>
  </div>

</div>

export default Footer;
