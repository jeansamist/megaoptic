import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { FaShoppingCart, FaPhone } from "react-icons/fa";
import { ButtonLink } from "../uiElements/Buttons";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
export default class HomeBanner extends Component {
  render() {
    const settings = {
      autoPlay: true,
      infiniteLoop: true,
      transitionTime: 1000,
      showStatus: false,
      interval: 5000,
      // renderArrowNext: () => (<div className='slider-btn next'><MdChevronRight size={30} /></div>),
      // renderArrowPrev: () => (<div className='slider-btn'><MdChevronLeft size={30} /></div>)
    };
    const TRANSITION = { duration: 2, type: "spring", delay: 1 };
    const MOTIONSSETTINGS = {
      sectionTitle: {
        initial: { y: -20, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        // viewport: { once: true },
        transition: TRANSITION,
      },
      sectionText: {
        initial: { y: -20, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        // viewport: { once: true },
        transition: { ...TRANSITION, delay: 1.5 },
      },
    };
    return (
      <Carousel stopOnHover={false} {...settings} showThumbs={false}>
        <div className="banner">
          <div className="content">
            <motion.div {...MOTIONSSETTINGS.sectionTitle} className="text">
              Agence <br />
              Professionnelle <br />
              Optique
            </motion.div>
            <motion.div {...MOTIONSSETTINGS.sectionText} className="short">
              Mega Optic Cameroun
            </motion.div>
            <div>
              <ButtonLink to="">
                <FaPhone /> Prendre un rendez-vous
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="banner b2">
          <div className="content">
            <motion.div {...MOTIONSSETTINGS.sectionTitle} className="text">
              Commandez <br />
              En ligne
            </motion.div>
            <motion.div {...MOTIONSSETTINGS.sectionText} className="short">
              Nous disposons d'une Boutique en ligne
            </motion.div>
            <div>
              <ButtonLink to="">
                <FaShoppingCart /> Voir les lunettes
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="banner b3">
          <div className="content">
            <motion.div {...MOTIONSSETTINGS.sectionTitle} className="text">
              Entretient <br />
              Gratuit
            </motion.div>
            <motion.div {...MOTIONSSETTINGS.sectionText} className="short">
              Entretient de vos lunettes medicales
            </motion.div>
            <div>
              <ButtonLink to="">
                <FaPhone /> Prendre un rendez-vous
              </ButtonLink>
            </div>
          </div>
        </div>
      </Carousel>
    );
  }
}
