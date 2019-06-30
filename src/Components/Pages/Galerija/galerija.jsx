import React from 'react';
import './galerija.scss';
import pic1 from '../../../assets/pic1.png';
import pic2 from '../../../assets/povezanost.png';
import pic3 from '../../../assets/spec.png';
import Gallery from 'react-photo-gallery';
import { photos } from '../../../assets/gallery/photos';
import Header from '../../../Common/Header/Header';
import Footer from '../../../Common/Footer/Footer';
import Title from '../../../Common/Title/Title';


const galerija = () =>
  <div className="galerija">
    <Header />
    <Title text="GALERIJA" />
    <Gallery photos={photos} />
    <Footer />
  </div>


export default galerija;
