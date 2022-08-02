import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { FaShoppingCart } from "react-icons/fa";
// import { ButtonLink } from '../uiElements/Buttons';
import { Carousel } from "react-responsive-carousel";
export default class StoreCategoryBanner extends Component {
  render() {
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
        <div
          className="banner"
          style={{
            background:
              'url("' + this.props.imageCover + '") no-repeat center / cover',
            backgroundPositionY: "25%",
          }}
        >
          <div className="content">
            <div className="text">{this.props.name}</div>
            <div></div>
          </div>
        </div>
      </Carousel>
    );
  }
}
