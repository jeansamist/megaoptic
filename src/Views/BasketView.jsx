import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa'
import Field, { Textarea } from '../components/uiElements/Fields'
import product1 from './../assets/images/lunettes-44979e.jpg'
import { Button } from '../components/uiElements/Buttons'
export default function BasketView() {
  return (
    <div className='view contact-view basket-view'>
      <div className="special-banner">
        <div className="inner">
          <h1 className='title-dot'>Votre Pannier</h1>
        </div>
      </div>
      <div className="page-content">
        <section className="form-contact">
          <div className="title title-dot">Remplissez le formulaire de pour pouvoir avoir une facture</div>
          <div className="w1 w2">
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
                  <tr>
                    <td className='image'><img src={product1} alt="" /></td>
                    <td><b>Empty - </b> empty</td>
                    <td>50000 <b>XAF</b></td>
                    <td><div className="color" style={{ background: '#000' }}></div></td>
                    <td><Button>&times;</Button></td>
                  </tr>
                  <tr>
                    <td className='image'><img src={product1} alt="" /></td>
                    <td><b>Empty - </b> empty</td>
                    <td>50000 <b>XAF</b></td>
                    <td><div className="color" style={{ background: '#000' }}></div></td>
                    <td><Button>&times;</Button></td>
                  </tr>
                  <tr>
                    <td className='image'><img src={product1} alt="" /></td>
                    <td><b>Empty - </b> empty</td>
                    <td>50000 <b>XAF</b></td>
                    <td><div className="color" style={{ background: '#000' }}></div></td>
                    <td><Button>&times;</Button></td>
                  </tr>
                  <tr>
                    <td className='image'><img src={product1} alt="" /></td>
                    <td><b>Empty - </b> empty</td>
                    <td>50000 <b>XAF</b></td>
                    <td><div className="color" style={{ background: '#000' }}></div></td>
                    <td><Button>&times;</Button></td>
                  </tr>
                  <tr>
                    <td className='image'><img src={product1} alt="" /></td>
                    <td><b>Empty - </b> empty</td>
                    <td>50000 <b>XAF</b></td>
                    <td><div className="color" style={{ background: '#000' }}></div></td>
                    <td><Button>&times;</Button></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid-2" style={{marginTop: '1em'}}>
              <Button>Payer en ligne</Button>
              <Button>Reserver</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
