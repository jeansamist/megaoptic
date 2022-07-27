import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { Carousel } from 'react-responsive-carousel';
export default class HomeBanner extends Component{
  render () {
    const settings = {
      autoPlay: true,
      infiniteLoop: true,
      transitionTime: 1000,
      showStatus: false,
      // renderArrowNext: () => (<div className='slider-btn next'><MdChevronRight size={30} /></div>),
      // renderArrowPrev: () => (<div className='slider-btn'><MdChevronLeft size={30} /></div>)
    };
    return (
      <Carousel {...settings} showThumbs={false}>
        <div className='home-banner'>
          <div className="content">
            <div className="text">
              Agence <br />
              Professionnelle <br />
              Optique
            </div>
            <div className="short">
              Mega Optic Cameroun
            </div>
            <div>
            <a href="" className="btn">Prendre un rendez-vous</a>
            </div>
          </div>
        </div>
        <div className='home-banner b2'>
          <div className="content">
            <div className="text">
              Commandez <br />
              En ligne
            </div>
            <div className="short">
              Nous disposons d'une Boutique en ligne
            </div>
            <div>
            <a href="" className="btn">Voir les lunettes</a>
            </div>
          </div>
        </div>
        <div className='home-banner b3'>
          <div className="content">
            <div className="text">
              Entretient <br />
              Gratuit
            </div>
            <div className="short">
              Entretient de vos lunettes medicales
            </div>
            <div>
            <a href="" className="btn">Prendre un rendez-vous</a>
            </div>
          </div>
        </div>
      </Carousel>
    )
  }
}
