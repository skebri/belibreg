import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <div className="header">
    <div className="logo-area">
      <Link to="/"><img src={logo} alt="logo"/></Link>
    </div>
    <nav>
      <Link to='/'>Pocetna strana</Link>
      <Link to='/oprojektu'>O projektu</Link>
      <Link to='/pStanova/1'>Ponuda stanova</Link>
      <Link to='/galerija'>Galerija</Link>
      <Link to='/kontakt'>Kontakt</Link>
    </nav>
  </div>
)

export default Header;
