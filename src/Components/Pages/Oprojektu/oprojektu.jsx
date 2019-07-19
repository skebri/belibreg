import React from 'react';
import './oprojektu.scss';
import Header from '../../../Common/Header/Header';
import Title from '../../../Common/Title/Title';
import pic3 from '../../../assets/pic3.png';
import spec from '../../../assets/spec.png';
import Image from 'react-image-resizer';

class oprojektu extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="oprojektu">
        <Header />
        <div className="op-wrapper">
          <div className="pics-slider" />
          <div className="o-projektu-content">
            <h1>O PROJEKTU</h1>
            <p>
              Beli Breg rezidencijalni kompleks je smešten u novom centru Rume na izmedju
              ulica Matije Gupca 17 i Iriške. Lokacija je izuzetno dobro povezana sa centrom grada
              i glavnim ulicama grada koje vode ka izlazu.
            </p>

            <img src={spec} />

            <p>
              Beli Breg rezidencijalni kompleks je smešten u novom centru Rume na izmedju
              ulica Matije Gupca 17 i Iriške. Lokacija je izuzetno dobro povezana sa centrom grada
              i glavnim ulicama grada koje vode ka izlazu.
            </p>
          </div>
        </div>
      </div>
    )
  }
}


export default oprojektu;
