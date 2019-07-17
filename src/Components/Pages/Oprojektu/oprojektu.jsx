import React from 'react';
import './oprojektu.scss';
import Header from '../../../Common/Header/Header';
import Footer from '../../../Common/Footer/Footer';
import Title from '../../../Common/Title/Title';
import pic1 from '../../../assets/pic1.png';
import pic2 from '../../../assets/pic2.png';
import pic3 from '../../../assets/pic3.png';
import povezanost from '../../../assets/povezanost.png';
import spec from '../../../assets/spec.png';
import video from '../../../assets/video.mp4';
import Image from 'react-image-resizer';

class oprojektu extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        imgSrc: pic1
      }
      this.changePic = this.changePic.bind(this);
  }

changePic = e =>
  this.setState({
    imgSrc: e.target.src
  })

  render() {
    const { imgSrc } = this.state;
    return (
      <div className="oprojektu">
        <Header />
        <Title text="O PROJEKTU" />
      <div className="page-container">
        <div className="pics-slider">
          <div className="side-pics">
            <div className="pics-text">
              <div className="line right"></div>
              <div className="pics-descrip descrip">IDEJA</div>
              <div className="title">NOVI KOMPLEKS<br /> BELI BREG - RUMA</div>
            </div>
          <div className="imgs">
            <img className="side-pic" onClick={this.changePic} src={pic1} alt="side-pic"/>
            <img className="side-pic" onClick={this.changePic} src={pic2} alt="side-pic"/>
            <img className="side-pic" onClick={this.changePic} src={pic3} alt="side-pic"/>
          </div>
          </div>
        </div>
        <div className="main-pic-div">
          <img className="main-pic" src={imgSrc} alt="main-pics"/>
        </div>

          <p className="slider-text about">
             Beli Breg rezidencijalni kompleks je smešten u novom centru Rume na izmedju
             ulica Matije Gupca 17 i Iriške. Lokacija je izuzetno dobro povezana sa centrom grada
             i glavnim ulicama grada koje vode ka izlazu.
          </p>

          <div className="povezanost">
            <video controls autoplay className="povezanost-pic">
              <source src={video} type="video/mp4" />
            </video>

            <div className="povez-text">
              <div>
                <h1 className="descrip">POVEZANOST</h1>
              <div className="line left"></div>
              </div>
              <h1 className="povez-title title">PRISTUP I IZLAZ</h1>
            </div>
          </div>
          <div className="povezanost-p">

          <ul className="povez-tekst about">
            <li>
              - Ulaz:<br />
              1. Iriška<br />
              2. Matije Gupca<br />
            </li>
          </ul>
          <ul className="povez-tekst about">
            <li>
              - Pogled:<br />
              Grad<br />
              Centar<br />
            </li>
          </ul>
          <ul className="povez-tekst about">
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

          <div className="spec">
            <div className="spec-title">
              <div className="spec1 line right"></div>
            <h1 className="descrip">SOFISTICIRANA <br />SPECIFIKACIJA</h1>
            <h1 className="title">NOVI KOMPLEKS<br /> BELI BREG - RUMA</h1>
            </div>
            <div className="spec-img">
              <img className="spec-pic" src={spec} alt="spec"/>
            </div>
          </div>
          <div className="spec-p">
            <p className="spec-tekst about">
               Sledeći osnovnu ideju, kreirali smo bezbedan i luksuzan stambeni ambijent,
               satkan od prirodnih materijala u kojem preovlađuju kamen i drvo, dok velike staklene površine
               naglašavaju eleganciju životnog prostora i ispunjavaju ga svetlošću.</p>
          </div>

        </div>

        <Footer />
      </div>
    )
  }
}


export default oprojektu;
