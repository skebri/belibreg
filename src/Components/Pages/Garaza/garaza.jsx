import React from 'react';
import './garaza.scss';
import Header from '../../../Common/Header/Header';
import Title from '../../../Common/Title/Title';
import spec from '../../../assets/spec.png';
import Image from 'react-image-resizer';

class garaza extends React.Component {
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
            <h1>GARAŽA</h1>
            <p>
              Stanare Belog Breg-a imaju izuzento pristupačan prilaz u podzemne garaže, čime se dodatno doprinosi udobnosti i efikasnosti svakodnevnog života.
            </p>

          </div>
        </div>
      </div>
    )
  }
}


export default garaza;
