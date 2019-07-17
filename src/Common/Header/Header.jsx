import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const [checked, setChecked] = useState(false);

  const changeChecked = () => { setChecked(!checked); };

  return (
    <div className="header">
      <div className="logo-area">
        <Link to="/"><img className="logo-header" src={logo} alt="logo"/></Link>
      </div>

      <input className="menu-btn" onChange={() => {}} type="checkbox" id="menu-btn" checked={checked} />
      <label className="menu-icon" htmlFor="menu-btn" onClick={changeChecked}><span className="navicon" /></label>

      <nav>
        <Link to='/'>Početna strana</Link>
        <Link to='/oprojektu'>O projektu</Link>
        <Link to='/pStanova/1'>Ponuda stanova</Link>
        <Link to='/galerija'>Galerija</Link>
        <Link to='/kontakt'>Kontakt</Link>
      </nav>
    </div>
  )
};

export default Header;
