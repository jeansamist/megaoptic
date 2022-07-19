import React from 'react'
import logo from './../../assets/images/logo.jpg'
import settings from './../../helpers/settings'

export default function Navbar() {
  return (
    <>
      <div className="promo">
        -30% Sur vos montures
      </div>
      <div className='navbar'>
        <div className="brand">
          <img src={logo} alt="" />
        </div>
        <div className="links">
          <a href="" className="link active">Accueil</a>
          <a href="" className="link">Boutique</a>
          <a href="" className="link">Services</a>
          <a href="" className="link">Mon compte</a>
          <a href="" className="link">A propos</a>
          <a href="" className="link btn">Nous contacter</a>
        </div>
      </div>
    </>
  )
}
