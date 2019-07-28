import React from 'react';
import './stan3.scss';
import Header from '../../../Common/Header/Header';
import Footer from '../../../Common/Footer/Footer';
import { Link } from 'react-router-dom';
import osnovaStn from '../../../assets/lam1Diz.jpg';
import prikaz from '../../../assets/lam1Diz.jpg';
import prostorije from '../../../assets/lam1Dvo.jpg';
import orijent from '../../../assets/lam1Diz.jpg';
import gal1 from '../../../assets/lam1Diz.jpg';
import gal2 from '../../../assets/lam1Poz.jpg';
import gal3 from '../../../assets/lam1Dvo.jpg';

class stan3 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mainPic: gal1
    }

  }


handleClick = e =>
  this.setState({
    mainPic: e.target.src
  })

  render () {
    const { mainPic } = this.state;
    return (
      <div className="stan3">
        <Header />
        <div className="page-content">

          <div className="page-title">
            <h1 className="page-h1">STAN 3</h1>
            <p className="page-title-about">Lamele:A <br /> I, II, III Sprat - 4stana</p>
          </div>

          <div className="prikazi">
            <div className="osnova">
              <h1>Osnova stana</h1>
              <img src={osnovaStn} alt="osnovaStn"/>
            </div>
            <div className="3d">
              <h1>3D Prikaz</h1>
              <img src={prikaz} alt="3d"/>
            </div>
          </div>

          <div className="ostanu">
            <div className="prost">
              <h1>Prostorije</h1>
            <img className="prost-img" src={prostorije} alt="prostorije"/>
            </div>
            <div className="orijent">
              <h1>Orijentacija stana</h1>
            <img className="orijent-img" src={orijent} alt="orijent"/>
            </div>

            <div className="galer">
              <h1>Galerija slika</h1>
              <div className="main-pic">
                <img className="mainPic" src={mainPic} alt="mainpics"/>
              </div>
              <div className="side-pics">
                <img className="side-pic" onClick={this.handleClick} src={gal2} alt="gal2"/>
                <img className="side-pic" onClick={this.handleClick} src={gal3} alt="gal3"/>
              </div>
            </div>

          </div>
          <div className="page-btn">
            <Link className="kontakt" to='/kontakt'>KONTAKTIRAJTE NAS</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default stan3;
