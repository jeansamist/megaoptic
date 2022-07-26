import React, { useEffect } from "react";
import { FaPhone, FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ButtonLink } from "../uiElements/Buttons";
import logo from "./../../assets/images/logo.png";
// import settings from './../../helpers/settings'

export default function Navbar() {
  useEffect(() => {
    const navbarDOM = document.querySelector(".navbar");
    const brand = navbarDOM.querySelector(".brand");
    const linksConatainer = navbarDOM.querySelector(".links");
    brand.addEventListener("click", () =>
      linksConatainer.classList.toggle("active")
    );
    // brand.addEventListener('touch', () => linksConatainer.classList.toggle('active'))
    const links = Array.from(linksConatainer.querySelectorAll(".nav-link"));
    links.forEach((link) =>
      link.addEventListener("click", () => {
        let oldActive = navbarDOM.querySelector(".nav-link.active");
        oldActive.classList.remove("active");
        link.classList.add("active");
        linksConatainer.classList.toggle("active");
      })
    );
  }, []);

  return (
    <>
      <div className="promo">-30% Sur vos montures</div>
      <div className="navbar">
        <div className="brand">
          <img src={logo} alt="" />
        </div>
        <div className="links">
          <Link to="/" className="link nav-link active">
            Accueil
          </Link>
          <Link to="/store/" className="link nav-link">
            Boutique
          </Link>
          <Link to="/services/" className="link nav-link">
            Services
          </Link>
          {/* <Link to="/about/" className="link nav-link">A propos</Link> */}
          <Link to="/basket/" className="link nav-link">
            <FaShoppingBasket size={20} /> Pannier
          </Link>
          <ButtonLink to="/contact">
            <FaPhone size={18} /> Nous contacter
          </ButtonLink>
        </div>
      </div>
    </>
  );
}
