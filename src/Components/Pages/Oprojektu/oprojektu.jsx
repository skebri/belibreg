import React from 'react';
import './oprojektu.scss';
import Header from '../../../Common/Header/Header';
import Footer from '../../../Common/Footer/Footer';
import Title from '../../../Common/Title/Title';
import pic1 from '../../../assets/pic1.png';
import pic2 from '../../../assets/povezanost.png';
import pic3 from '../../../assets/spec.png';
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
             Sledeći osnovnu ideju, kreirali smo bezbedan i luksuzan stambeni ambijent,
             satkan od prirodnih materijala u kojem preovlađuju kamen i drvo, dok velike staklene površine
             naglašavaju eleganciju životnog prostora i ispunjavaju ga svetlošću. Sledeći osnovnu ideju,
             kreirali smo bezbedan i luksuzan stambeni ambijent, satkan od prirodnih materijala u kojem preovlađuju
             kamen i drvo, dok velike staklene površine naglašavaju eleganciju životnog prostora i ispunjavaju ga svetlošću.
          </p>

          <div className="povezanost">
            <img src={pic2} alt="povezanost"/>
            <div className="povez-text">
              <div>
                <h1 className="descrip">POVEZANOST</h1>
              <div className="line left"></div>
              </div>
              <h1 className="povez-title title">PRISTUP I IZLAZ</h1>
            </div>
          </div>
          <div className="povezanost-p">
            <p className="povez-tekst about">
               Sledeći osnovnu ideju, kreirali smo bezbedan i luksuzan stambeni ambijent,
               satkan od prirodnih materijala u kojem preovlađuju kamen i drvo, dok velike staklene površine
               naglašavaju eleganciju životnog prostora i ispunjavaju ga svetlošću. Sledeći osnovnu ideju,
               kreirali smo bezbedan i luksuzan stambeni ambijent, satkan od prirodnih materijala u kojem preovlađuju
               kamen i drvo, dok velike staklene površine naglašavaju eleganciju životnog prostora i ispunjavaju ga svetlošću.</p>
          </div>

          <div className="spec">
            <div className="spec-title">
              <div className="spec1 line right"></div>
            <h1 className="descrip">SOFISTICIRANA <br />SPECIFIKACIJA</h1>
            <h1 className="title">NOVI KOMPLEKS<br /> BELI BREG - RUMA</h1>
            </div>
            <div className="spec-img">
              <img src={pic3} alt="spec"/>
            </div>
          </div>
          <div className="spec-p">
            <p className="spec-tekst about">
               Sledeći osnovnu ideju, kreirali smo bezbedan i luksuzan stambeni ambijent,
               satkan od prirodnih materijala u kojem preovlađuju kamen i drvo, dok velike staklene površine
               naglašavaju eleganciju životnog prostora i ispunjavaju ga svetlošću. Sledeći osnovnu ideju,
               kreirali smo bezbedan i luksuzan stambeni ambijent, satkan od prirodnih materijala u kojem preovlađuju
               kamen i drvo, dok velike staklene površine naglašavaju eleganciju životnog prostora i ispunjavaju ga svetlošću.</p>
          </div>

        </div>

        <Footer />
      </div>
    )
  }
}


export default oprojektu;
