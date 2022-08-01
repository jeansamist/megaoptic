import React, { useState, useEffect } from 'react'
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa'
import Field, { Textarea } from '../components/uiElements/Fields'
import { Button } from '../components/uiElements/Buttons'
import settings from '../helpers/settings'
export default function BasketView() {
  const [products, setproducts] = useState([])
  useEffect(() => {
    let basket = localStorage.getItem('basket')
    if (basket) setproducts(JSON.parse(basket))
    else setproducts(false)
  }, [])
  
  return (
    <div className='view contact-view basket-view'>
      <div className="special-banner">
        <div className="inner">
          <h1 className='title-dot'>Votre Pannier</h1>
        </div>
      </div>
      <div className="page-content">
        <section className="form-contact">
        {products ? <div className="title title-dot">Remplissez le formulaire de pour pouvoir avoir une facture</div> : '' }
          <div className="w1 w2">
            {products ? 
            <>
              <div className="form">
                <div className="grid-2">
                  <Field label='Votre nom complet' />
                  <Field label='Votre numero de telephone' type='tel' Ico={FaPhone} />
                  <Field label='Votre addresse e-mail' Ico={FaEnvelope} />
                  <Field label='Votre addresse' Ico={FaMapMarker} />
                </div>
                <Textarea label="Message a laisser pour la reception" />
              </div>
              <h2 style={{textAlign: 'center'}}>Produits du pannier</h2>
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
                    {
                      products.map(({cover, color, price, name}, key) => (
                        <tr key={key}>
                          <td className='image'><img src={cover} alt="" /></td>
                          <td>{name}</td>
                          <td>{price} <b>{settings.devise}</b></td>
                          <td><div className="color" style={{ background: color }}></div></td>
                          <td><Button>&times;</Button></td>
                        </tr>
                        ))
                    }
                  </tbody>
                </table>
              </div>
              <div className="grid-2" style={{marginTop: '1em'}}>
                <Button>Payer en ligne</Button>
                <Button>Reserver</Button>
              </div>
            </> : <h2 style={{textAlign: 'center'}}>Votre pannier est vide :(</h2>}
          </div>
        </section>
      </div>
    </div>
  )
}
