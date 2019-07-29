import React from 'react';
import './galerija.scss';
import pic1 from '../../../assets/pic1.png';
import pic2 from '../../../assets/povezanost.png';
import pic3 from '../../../assets/spec.png';
import Header from '../../../Common/Header/Header';
import Footer from '../../../Common/Footer/Footer';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";


const images = [
  pic1,
  pic2,
  pic3
];

class galerija extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div className="gal">
        <Header />
      <div className="bcg">
        <button className="gal-btn" type="button" onClick={() => this.setState({ isOpen: true })}>
          ZA VISE SLIKA KLIKNITE OVDE
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}

      </div>
    </div>
    );
  }
}


export default galerija;
