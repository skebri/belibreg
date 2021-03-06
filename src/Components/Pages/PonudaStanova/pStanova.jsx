import React from 'react';
import './pStanova.scss';
import Header from '../../../Common/Header/Header';
import Footer from '../../../Common/Footer/Footer';
import { Link } from 'react-router-dom';
import stan1 from '../../../assets/lamela_1.png';
import stan2 from '../../../assets/lamela_1.png';
import stan3 from '../../../assets/lamela_1.png';

class pStanova extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }

  }



  render() {
    return (
      <div className="pstanova">
        <Header />
      <div className="stanovi">

          <Link className="stan-tip" to="/stan1">
            <img className="stan-img" src={stan1} alt="stan1"/>
          <div className="box">
            <div className="stan-about">
              <h1 className="stan-title">Jednosobni</h1>
              <p className="kvadratura">31M2</p>
              <Link className="stan-link" to="/stan1">POGLEDAJTE</Link>
            </div>
          </div>
          </Link>

          <Link className="stan-tip" to="/stan2">
            <img className="stan-img" src={stan2} alt="stan2"/>
          <div className="box">
            <div className="stan-about">
              <h1 className="stan-title">Jednosobni</h1>
              <p className="kvadratura">31M2</p>
              <Link className="stan-link" to="/stan2">POGLEDAJTE</Link>
            </div>
          </div>
          </Link>

          <Link className="stan-tip" to="/stan2">
            <img className="stan-img" src={stan3} alt="stan3"/>
          <div className="box">
            <div className="stan-about">
              <h1 className="stan-title">Jednosobni</h1>
              <p className="kvadratura">31M2</p>
              <Link className="stan-link" to="/stan3">POGLEDAJTE</Link>
            </div>
        </div>
        </Link>

      </div>
      </div>
    )
  }
}

export default pStanova;
