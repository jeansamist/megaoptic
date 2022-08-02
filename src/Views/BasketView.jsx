import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaMapMarker, FaPhone } from "react-icons/fa";
import { Button } from "../components/uiElements/Buttons";
import Field, { Textarea } from "../components/uiElements/Fields";
import settings from "../helpers/settings";
import checkImage from "./../assets/images/gif/check01.gif";
import outlineImage from "./../assets/images/gif/outiline01.gif";

function Modal({ image, message, active = false }) {
  return (
    <div className={"modal-action " + (active ? "active " : "")}>
      <div className="modal">
        <div className="animation">
          <img src={outlineImage} alt="" className="outline" />
          <img
            src={image ? image : checkImage}
            alt=""
            className="illustration"
          />
        </div>
        {message ? (
          <h3
            style={{
              textAlign: "center",
              padding: "0 0.5em",
              marginTop: "0.5em",
            }}
          >
            {message}
          </h3>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default function BasketView() {
  const [products, setproducts] = useState(false);
  // const [onlineCheckout, setonlineCheckout] = useState(false)
  const [loading, setloading] = useState(true);
  const [command, setcommand] = useState(false);
  useEffect(() => {
    document.title = "Mon Panier - Mega Optic Cameroun";
    let basket = localStorage.getItem("basket");
    if (basket) setproducts(JSON.parse(basket));
    else setproducts(false);
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);
  const TRANSITION = { duration: 2, type: "spring" };
  const MOTIONSSETTINGS = {
    sectionTitle: {
      initial: { y: -20, opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
      viewport: { once: true },
      transition: TRANSITION,
    },
    sectionText: {
      initial: { y: -20, opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
      viewport: { once: true },
      transition: { ...TRANSITION, delay: 0.5 },
    },
    card2: {
      initial: { y: 10, opacity: 0 },
      viewport: { once: true },
      whileInView: { y: 0, opacity: 1 },
    },
  };

  if (loading) {
    return (
      <div className="view home-view">
        {loading ? (
          <div className="loading">
            <div className="loading-bar"></div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }

  return (
    <div className="view contact-view basket-view">
      <Modal active={command} message="Reservation effectuer" />
      <div className="special-banner b5">
        <div className="inner">
          <motion.div {...MOTIONSSETTINGS.sectionTitle}>
            <h1 className="title-dot">Votre Pannier</h1>
          </motion.div>
        </div>
      </div>
      <div className="page-content">
        <section className="form-contact">
          <div className="w1 w2">
            {products ? (
              <>
                <motion.div {...MOTIONSSETTINGS.sectionText}>
                  <h2 style={{ textAlign: "center" }}>Produits du pannier</h2>
                </motion.div>
                <div className="table">
                  <table>
                    <thead>
                      <tr>
                        <th>img</th>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th>Couleur</th>
                        <th>Retirer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map(({ cover, color, price, name }, key) => (
                        <motion.tr
                          {...MOTIONSSETTINGS.card2}
                          transition={{ ...TRANSITION }}
                          key={key}
                        >
                          <td className="image">
                            <img src={cover} alt="" />
                          </td>
                          <td>{name}</td>
                          <td>
                            {price} <b>{settings.devise}</b>
                          </td>
                          <td>
                            <div
                              className="color"
                              style={{ background: color }}
                            ></div>
                          </td>
                          <td>
                            <Button>&times;</Button>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <motion.h2
                  {...MOTIONSSETTINGS.sectionText}
                  style={{ textAlign: "center", margin: "1em 0" }}
                >
                  Remplissez le formulaire de pour pouvoir avoir une facture
                </motion.h2>
                <motion.div
                  {...MOTIONSSETTINGS.card2}
                  transition={{ ...TRANSITION }}
                  className="form"
                >
                  <div className="grid-2">
                    <Field label="Votre nom complet" />
                    <Field
                      label="Votre numero de telephone"
                      type="tel"
                      Ico={FaPhone}
                    />
                    <Field label="Votre addresse e-mail" Ico={FaEnvelope} />
                    <Field label="Votre addresse" Ico={FaMapMarker} />
                  </div>
                  <Textarea label="Message a laisser pour la reception" />
                </motion.div>
                <motion.div
                  {...MOTIONSSETTINGS.card2}
                  transition={{ ...TRANSITION }}
                  className="grid-2"
                  style={{ marginTop: "1em" }}
                >
                  <Button>Payer en ligne</Button>
                  <Button
                    onClick={() => {
                      localStorage.removeItem("basket");
                      setproducts(false);
                      setcommand(true);
                    }}
                  >
                    Reserver
                  </Button>
                </motion.div>
              </>
            ) : (
              <h2 style={{ textAlign: "center" }}>Votre pannier est vide :(</h2>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
