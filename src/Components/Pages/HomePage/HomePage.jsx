import React, { Component } from 'react';
import './HomePage.scss';
import Header from '../../../Common/Header/Header';
import { Link } from 'react-router-dom';
import arrow from '../../../assets/arrow.png';
import prodaja0 from '../../../assets/lamela_0.png';
import prodaja1 from '../../../assets/lamela_1.png';
import prodaja2 from '../../../assets/lamela_2.png';

const slides = [prodaja0, prodaja1, prodaja2];

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
      selectedSlide: slides[0],
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

    if (newIndex === 3) {
      newIndex = 0;
    }
    const timeout = setTimeout(() => {
      this.goToNextSlide();
    }, 5000);
    this.setState({
      selectedIndex: newIndex,
      selectedSlide: slides[newIndex],
      timeout,
    });
  }

  render() {
    return (
      <div className="home-page">
        <Header />
          <div className="hero-section">
            <div
              key={this.state.selectedIndex}
              className="bg-image"
              style={{
                backgroundImage: `url('${this.state.selectedSlide}')`,
              }}
            />

            <div className="overlay">

            </div>
              <div className="bg-content">
                <h1 className="bg-title">Blizu. <br /> Daleko. Ispred.</h1>
                <Link to="/oprojektu" className="bg-button">O projektu</Link>
              </div>
          </div>
      </div>
    );
  }
}

export default HomePage;
