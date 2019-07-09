import React from 'react';
import './pStanova.scss';
import Header from '../../../Common/Header/Header';
import Footer from '../../../Common/Footer/Footer';
import Title from '../../../Common/Title/Title';
import lam1Diz from '../../../assets/lamela_1.png';
import lam1Poz from '../../../assets/lam1Poz.jpg';
import lam1Dvo from '../../../assets/lam1Dvo.jpg';
import lam2Diz from '../../../assets/lamela_2.png';
import lam2Poz from '../../../assets/lam2Poz.jpg';
import lam2Dvo from '../../../assets/lam2Dvo.jpg';
import lam3Diz from '../../../assets/lamela_3.png';
import lam3Poz from '../../../assets/lam2Poz.jpg';
import lam3Dvo from '../../../assets/lam2Dvo.jpg';
import lam4Diz from '../../../assets/lamela_4.png';
import lam4Poz from '../../../assets/lam2Poz.jpg';
import lam4Dvo from '../../../assets/lam2Dvo.jpg';
import { Link } from 'react-router-dom';

class pStanova extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.match.params.id,
      dpd: "diz",
      showItmes: false,
      sprat: "1"
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleSpec = this.handleSpec.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.generateStan = this.generateStan.bind(this);
  }

handleClick = e =>
  this.setState({
    activeTab: e.target.value
  });

handleSpec = e =>
  this.setState({
    dpd: e.target.value
  });

toggleMenu = () => {
  this.setState(prevState => ({
    showItmes: !prevState.showItmes
  }))
};

generateStan = e =>
this.setState({
  sprat: e.target.value
});

  render() {
  const { activeTab, dpd, sprat, showItmes } = this.state;
    return (
      <div className="pstanova">
        <Header />
      <Title text="PONUDA STANOVA" />
      <div className="lamel">

        <div className="prodaja-nav-wrapper">
          <div className="lamela-nav">
            <div className="lamela-nav-title">
              <div className="line left right"></div>
            <h1 className="descrip">PONUDA STANOVA</h1>
            </div>
            <div className="test">
            <button onClick={this.handleClick} value="1" className={ activeTab === "1" ? "nav-btn active" : "nav-btn"}>Lamela 1</button>
            <button onClick={this.handleClick} value="2" className={ activeTab === "2" ? "nav-btn active" : "nav-btn"}>Lamela 2</button>
            <button onClick={this.handleClick} value="3" className={ activeTab === "3" ? "nav-btn active" : "nav-btn"}>Lamela 3</button>
            <button onClick={this.handleClick} value="4" className={ activeTab === "4" ? "nav-btn active" : "nav-btn"}>Lamela 4</button>
            </div>
          </div>

          <div className="spec-nav">
            <button value="diz" onClick={this.handleSpec} className={dpd === "diz" ? "spec-btn active" : "spec-btn" }>Dizajn</button>
            <button value="poz" onClick={this.handleSpec} className={dpd === "poz" ? "spec-btn active" : "spec-btn" }>Pozicija</button>
            <button value="dvo" onClick={this.handleSpec} className={dpd === "dvo" ? "spec-btn active" : "spec-btn" }>Dvoriste</button>
          </div>
        </div>

        {/*LAMELA1>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

        {activeTab === "1" && dpd === "diz" &&
          <div className="prodaja-cont">
            <div className="prodaja-heading">
              <div className="line left right"></div>
              <h1 className="prodaja-text descrip">Lamela 1</h1>
            </div>
              <img className="prodaja-img" src={lam1Diz} alt="lam1-diz"/>
            <p className="prodaja-p about">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </p>
          </div>
        }

        {activeTab === "1" && dpd === "poz" &&
          <div className="prodaja-cont">
              <div className="prodaja-heading">
                <div className="line left right"></div>
                <h1 className="prodaja-text descrip">Lamela 1</h1>
              </div>
              <img className="prodaja-img" src={lam1Poz} alt="lam1-diz"/>
            <p className="prodaja-p about">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </p>
          </div>
        }

        {activeTab === "1" && dpd === "dvo" &&
          <div className="prodaja-cont">
              <div className="prodaja-heading">
                <div className="line left right"></div>
                <h1 className="prodaja-text descrip">Lamela 1</h1>
              </div>
              <img className="prodaja-img" src={lam1Dvo} alt="lam1-diz"/>
            <p className="prodaja-p about">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </p>
          </div>
        }

        {/*LAMELA2>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

        {activeTab === "2" && dpd === "diz" &&
          <div className="prodaja-cont">
              <div className="prodaja-heading">
                <div className="line left right"></div>
                <h1 className="prodaja-text descrip">Lamela 2</h1>
              </div>
              <img className="prodaja-img" src={lam2Diz} alt="lam2-diz"/>
            <p className="prodaja-p about">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </p>
          </div>
        }

        {activeTab === "2" && dpd === "poz" &&
          <div className="prodaja-cont">
              <div className="prodaja-heading">
                <div className="line left right"></div>
                <h1 className="prodaja-text descrip">Lamela 2</h1>
              </div>
              <img className="prodaja-img" src={lam2Poz} alt="lam2-poz"/>
            <p className="prodaja-p about">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </p>
          </div>
        }

        {activeTab === "2" && dpd === "dvo" &&
          <div className="prodaja-cont">
              <div className="prodaja-heading">
                <div className="line left right"></div>
                <h1 className="prodaja-text descrip">Lamela 2</h1>
              </div>
              <img className="prodaja-img" src={lam2Dvo} alt="lam2-dvo"/>
            <p className="prodaja-p about">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </p>
          </div>
        }

        {/*LAMELA3>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

        {activeTab === "3" && dpd === "diz" &&
          <div className="prodaja-cont">
            <div className="prodaja-heading">
              <div className="line left right"></div>
              <h1 className="prodaja-text descrip">Lamela 3</h1>
            </div>
            <img className="prodaja-img" src={lam3Diz} alt="lam3-diz"/>
            <p className="prodaja-p about">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </p>
          </div>
        }

        {activeTab === "3" && dpd === "poz" &&
          <div className="prodaja-cont">
            <div className="prodaja-heading">
              <div className="line left right"></div>
              <h1 className="prodaja-text descrip">Lamela 3</h1>
            </div>
            <img className="prodaja-img" src={lam3Poz} alt="lam3-poz"/>
            <p className="prodaja-p about">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </p>
          </div>
        }

        {activeTab === "3" && dpd === "dvo" &&
          <div className="prodaja-cont">
              <div className="prodaja-heading">
                <div className="line left right"></div>
                <h1 className="prodaja-text descrip">Lamela 3</h1>
              </div>
              <img className="prodaja-img" src={lam3Dvo} alt="lam3-dvo"/>
            <p className="prodaja-p about">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </p>
          </div>
        }

      {/*LAMELA4>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      {activeTab === "4" && dpd === "diz" &&
        <div className="prodaja-cont">
            <div className="prodaja-heading">
              <div className="line left right"></div>
              <h1 className="prodaja-text descrip">Lamela 4</h1>
            </div>
            <img className="prodaja-img" src={lam4Diz} alt="lam4-diz"/>
          <p className="prodaja-p about">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
        </div>
      }

      {activeTab === "4" && dpd === "poz" &&
        <div className="prodaja-cont">
            <div className="prodaja-heading">
              <div className="line left right"></div>
              <h1 className="prodaja-text descrip">Lamela 4</h1>
            </div>
            <img className="prodaja-img" src={lam4Poz} alt="lam4-poz"/>
          <p className="prodaja-p about">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
        </div>
      }


      {activeTab === "4" && dpd === "dvo" &&
        <div className="prodaja-cont">
            <div className="prodaja-heading">
              <div className="line left right"></div>
              <h1 className="prodaja-text descrip">Lamela 4</h1>
            </div>
          <img className="prodaja-img" src={lam4Dvo} alt="lam4-dvo"/>
          <p className="prodaja-p about">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
        </div>
      }
      </div>

      <div className="stanovi">
        <div className="drop-down">
          <button onClick={this.toggleMenu} className="dd-main-btn">Po spratu <span className={showItmes === true ? "arrow-down" : "arrow-up"}></span></button>
          <div className={showItmes === true ? "menu" : "none"}>

            {activeTab === "1" &&
            <div>
              <button onClick={this.generateStan} value= "1" className="dd-sprat-btn">Sprat 1</button>
              <button onClick={this.generateStan} value= "2" className="dd-sprat-btn">Sprat 2</button>
              <button onClick={this.generateStan} value= "3" className="dd-sprat-btn">Sprat 3</button>
            </div>
            }

            {activeTab === "2" &&
            <div>
              <button onClick={this.generateStan} value= "1" className="dd-sprat-btn">Sprat 1</button>
              <button onClick={this.generateStan} value= "2" className="dd-sprat-btn">Sprat 2</button>
            </div>
            }

            {activeTab === "3" &&
            <div>
              <button onClick={this.generateStan} value= "1" className="dd-sprat-btn">Sprat 1</button>
              <button onClick={this.generateStan} value= "2" className="dd-sprat-btn">Sprat 2</button>
            </div>
            }

            {activeTab === "4" &&
            <div>
              <button onClick={this.generateStan} value= "1" className="dd-sprat-btn">Sprat 1</button>
            </div>
            }

          </div>
        </div>

      <div className="ponuda">

          {activeTab === "1" && sprat === "1" &&
          <div>
            <div className="stan"><span className="bold">Stan 1</span><span className="grey">32 m2</span><span className="grey">1050$</span><Link className="stan-link" to="/stan/lam=1&stan=1">Detaljnije</Link></div>
            <div className="stan"><span className="bold">Stan 2</span><span className="grey">32 m2</span><span className="grey">1050$</span><Link className="stan-link" to="">Detaljnije</Link></div>
          </div>
          }

          {activeTab === "1" && sprat === "2" &&
          <div className="stan"><span className="bold">Stan 1</span><span className="grey">32 m2</span><span className="grey">1050$</span><Link className="stan-link" to="">Detaljnije</Link></div>
          }

          {activeTab === "1" && sprat === "3" &&
          <div>
            <div className="stan"><span className="bold">Stan 1</span><span className="grey">32 m2</span><span className="grey">1050$</span><Link className="stan-link" to="">Detaljnije</Link></div>
            <div className="stan"><span className="bold">Stan 2</span><span className="grey">32 m2</span><span className="grey">1050$</span><Link className="stan-link" to="">Detaljnije</Link></div>
            <div className="stan"><span className="bold">Stan 3</span><span className="grey">32 m2</span><span className="grey">1050$</span><Link className="stan-link" to="">Detaljnije</Link></div>
          </div>
          }

          {activeTab === "2" && sprat === "1" &&
          <div className="stan"><span className="bold">Stan 1</span><span className="grey">32 m2</span><span className="grey">1050$</span><Link className="stan-link" to="">Detaljnije</Link></div>
          }

          {activeTab === "2" && sprat === "2" &&
          <div>
            <div className="stan"><span className="bold">Stan 1</span><span className="grey">32 m2</span><span className="grey">1050$</span><Link className="stan-link" to="">Detaljnije</Link></div>
            <div className="stan"><span className="bold">Stan 2</span><span className="grey">32 m2</span><span className="grey">1050$</span><Link className="stan-link" to="">Detaljnije</Link></div>
          </div>
          }

          {activeTab === "3" && sprat === "1" &&
          <div>
            <div className="stan"><span className="bold">Stan 1</span><span className="grey">32 m2</span><span className="grey">1050$</span><Link className="stan-link" to="">Detaljnije</Link></div>
            <div className="stan"><span className="bold">Stan 2</span><span className="grey">32 m2</span><span className="grey">1050$</span><Link className="stan-link" to="">Detaljnije</Link></div>
          </div>
          }

          {activeTab === "3" && sprat === "2" &&
          <div>
            <div className="stan"><span className="bold">Stan 1</span><span className="grey">32 m2</span><span className="grey">1050$</span><Link className="stan-link" to="">Detaljnije</Link></div>
            <div className="stan"><span className="bold">Stan 2</span><span className="grey">32 m2</span><span className="grey">1050$</span><Link className="stan-link" to="">Detaljnije</Link></div>
            <div className="stan"><span className="bold">Stan 3</span><span className="grey">32 m2</span><span className="grey">1050$</span><Link className="stan-link" to="">Detaljnije</Link></div>
          </div>
          }

          {activeTab === "4" && sprat === "1" &&
          <div>
            <div className="stan"><span className="bold">Stan 1</span><span className="grey">32 m2</span><span className="grey">1050$</span><Link className="stan-link" to="">Detaljnije</Link></div>
            <div className="stan"><span className="bold">Stan 2</span><span className="grey">32 m2</span><span className="grey">1050$</span><Link className="stan-link" to="">Detaljnije</Link></div>
          </div>
          }

        </div>
      </div>

        <Footer />
      </div>
    )
  }
}

export default pStanova;
