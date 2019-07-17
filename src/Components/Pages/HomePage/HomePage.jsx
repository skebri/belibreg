import React, { Component } from 'react';
import './HomePage.scss';
import Header from '../../../Common/Header/Header';
import Footer from '../../../Common/Footer/Footer';
import { Link } from 'react-router-dom';
import arrow from '../../../assets/arrow.png';
import prodaja1 from '../../../assets/prodaja1.png';
import prodaja2 from '../../../assets/prodaja2.png';
import prodaja3 from '../../../assets/prodaja3.png';
import Map from '../../../Common/Map/Map';



class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
      slides: 1,
      selectedSlide: 2,
      timeout: null,
    };

    this.goToNextSlide = this.goToNextSlide.bind(this);
  }

  componentDidMount() {
    this.goToNextSlide();
  }

  goToNextSlide() {
    clearTimeout(this.state.timeout);
    let newIndex = this.state.selectedIndex + 1;

    if (newIndex === this.state.slides.length) {
      newIndex = 0;
    }
    const timeout = setTimeout(() => {
      this.goToNextSlide();
    }, 3000);
    this.setState({
      selectedIndex: newIndex,
      selectedSlide: this.state.slides[newIndex],
      timeout,
    });
  }

  render() {
    return (
      <div className="home-page">
        <Header />
        <div className="hero-section">
          <div className="bg-content">
            <h1 className="bg-title">Beli Breg <br /> Arhitekte sa drugačijim pristupom</h1>
            <Link to="/oprojektu" className="bg-button">O projektu</Link>
          </div>
        </div>
        <div className="page-container">
        <div className="content-2">
          <div className="content-2-text">
            <div className="line right"></div>
            <h1 className="content-2-descrip descrip">O NAMA</h1>
            <h1 className="content-2-title title">Arhitekte koje<br /> pomeraju granice</h1>
            <p className="content-2-par about">
            Naša posvećenost kvalitetu počinje od pažljivo odabranih,
            renomiranih arhitekata koji su dizajnirali stanove za svakodnevni,
            moderan život.<br />
            </p>
          </div>
          <div className="content-2-img">
          </div>
        </div>
        </div>

        <div className="lamele">
          <div className="div lamele-title">
            <div className="line right"></div>
            <h1 className="lamele-h1 descrip">LAMELE</h1>
          </div>
          <div className="lamele-content">
            <div className="lamele-item-1">
              <h1 className="lamela-title">Lamela 1</h1>
              <Link className="lamela-link" to="/pStanova/1">Pogledaj još <img className="lamela-arrow" src={arrow} alt="arrow"/></Link>
            </div>
            <div className="lamele-item-2">
              <h1 className="lamela-title">Lamela 2</h1>
              <Link className="lamela-link" to="/pStanova/2">Pogledaj još <img className="lamela-arrow" src={arrow} alt="arrow"/></Link>
            </div>
            <div className="lamele-item-3">
              <h1 className="lamela-title">Lamela 3</h1>
              <Link className="lamela-link" to="/pStanova/3">Pogledaj još <img className="lamela-arrow" src={arrow} alt="arrow"/></Link>
            </div>
            <div className="lamele-item-4">
              <h1 className="lamela-title">Lamela 4</h1>
              <Link className="lamela-link" to="/pStanova/4">Pogledaj još <img className="lamela-arrow" src={arrow} alt="arrow"/></Link>
            </div>
          </div>
        </div>

        <div className="info-section">
          <div className="projekat">
            <div className="projekat-img"></div>
            <div className="projekat-text">
              <div className="line right"></div>
              <div className="projekat-descrip descrip">PROJEKAT</div>
              <h1 className="projekat-title title">Morderni kompleks u centru Rume</h1>
              <p className="projekat-about about">
                Novi rezidencijalni kompleks Beli Breg oslikava viziju investitora da spoji prirodno okruženje i modernu arhitekturu čistih linija.
              </p>
            </div>
          </div>

          <div className="lokacija">
            <div className="lokacija-text">
              <div className="line right"></div>
              <div className="lokacija-descrip descrip">LOKACIJA</div>
                <h1 className="lokacija-title title">Pristupačna lokacija u centru Rume</h1>
                  <ul className="lokacija-about about">
                    <li>
                      - Ulaz:<br />
                      1. Iriška<br />
                      2. Matije Gupca<br />
                    </li>
                  </ul>
            </div>
            <Map className="map" />
          </div>
          </div>
        <div className="prodaja">
          <div className="overlay">
          <div className="prodaja-title page-container">
            <div className="f line right"></div>
            <h1 className="prodaja-h1 descrip">PRODAJA</h1>
            <h1 className="prodaja-name title">Naša kvalitetna usluga</h1>
          </div>
          <div className="prodaja-content page-container">
            <div className="prodaja-item">
              <img className="prodaja-img" src={prodaja1} alt="prodaja1"/>
              <p className="prodaja-text">Dizajn eksterijera</p>
              <Link className="prodaja-link" to="">Pogledaj više</Link>
            </div>
            <div className="prodaja-item">
              <img className="prodaja-img" src={prodaja2} alt="prodaja2"/>
              <p className="prodaja-text">Dizajn enterijera</p>
              <Link className="prodaja-link" to="">Pogledaj više</Link>
            </div>
            <div className="prodaja-item">
              <img className="prodaja-img" src={prodaja3} alt="prodaja3"/>
              <p className="prodaja-text">Dizajn kompleksa </p>
              <Link className="prodaja-link" to="">Pogledaj više</Link>
            </div>
          </div>
        </div>
        <div className="prodaja-stanovi">
          <div clasName="page-container">
          <div className="prodaja-stanovi-title page-container">
            <div className="line right"></div>
            <div className="stan-tip-h1 descrip">PRODAJA - Lamela 2</div>
            <div className="title">Tipovi stambenih prostora</div>
          </div>
          <div className="prodaja-stan">
            <div className="prodaja-stan-item"><span className="bold bold-no-margin">Stan 1</span><span className="grey">44m2</span></div>
            <div className="prodaja-stan-item"><span className="bold bold-no-margin">Stan 2</span><span className="grey">48m2</span></div>
          </div>
          <div className="prodaja-stanovi-linkovi page-container">
            <div className="prodaja-stan-link stan1">
              <h1 className="prodaja-stan-h1">Stan 1</h1>
              <Link to="">Pogledaj još<img className="arrow" src={arrow} alt="arrow"/></Link>
            </div>
            <div className="prodaja-stan-link stan2">
              <h1 className="prodaja-stan-h1">Stan 2</h1>
              <Link to="">Pogledaj još<img className="arrow" src={arrow} alt="arrow"/></Link>
            </div>
            <div className="prodaja-stan-link stan3">
              <h1 className="prodaja-stan-h1">Stan 3</h1>
              <Link to="">Pogledaj još<img className="arrow" src={arrow} alt="arrow"/></Link>
            </div>
          </div>
          </div>
        </div>
        </div>

        <Footer />

      </div>
    );
  }
}

export default HomePage;
