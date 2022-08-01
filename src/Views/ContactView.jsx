import React from 'react'
import Field, { Textarea } from '../components/uiElements/Fields'
import { FaEnvelope } from 'react-icons/fa'
import Form from '../components/uiElements/Form'
import { useParams } from 'react-router-dom'
export default function ContactView({ withLabel = false }) {
  const { label } = useParams()
  return (
    <div className='view contact-view'>
      <div className="special-banner">
        <div className="inner">
          <h1 className='title-dot'>Contacter Nous</h1>
        </div>
      </div>
      <div className="page-content">
        <section className="form-contact">
          <div className="title title-dot">Remplissez le formulaire de contact</div>
          <div className="w1">
            <Form buttonLabel='Envoyer'>
              <Field label='Votre nom complet' />
              <Field defaultValue={label} activated={withLabel} label='Objet' Ico={FaEnvelope} />
              <Textarea label='Votre Message' />
            </Form>
          </div>
        </section>
      </div>
    </div>
  )
}
