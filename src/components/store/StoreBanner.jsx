import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { FaShoppingCart } from "react-icons/fa";
import { ButtonLink } from '../uiElements/Buttons';
import { Carousel } from 'react-responsive-carousel';
export default class StoreBanner extends Component{
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
      <Carousel {...settings} interval={5000} showThumbs={false}>
        <div className='banner b4'>
          <div className="content">
            <div className="text">
              <i>SOLDE</i><br />
              -30%  Sur Toutes<br />
              Vos Montures
            </div>
            <div>
            <ButtonLink to=""><FaShoppingCart /> Decouvrir</ButtonLink>
            </div>
          </div>
        </div>
        <div className='banner b2'>
          <div className="content">
            <div className="text">
              Commandez <br />
              En ligne
            </div>
            <div className="short">
              Nous disposons d'une Boutique en ligne
            </div>
            <div>
            </div>
          </div>
        </div>
      </Carousel>
    )
  }
}
