import React, { useState, useEffect } from 'react'
import HomeBanner from '../components/home/HomeBanner'
import serviceCover1 from './../assets/images/test03.jpg'
import serviceCover2 from './../assets/images/image02.jpg'
import serviceCover3 from './../assets/images/image03.jpg'
import serviceCover4 from './../assets/images/image04.jpg'
import man01 from './../assets/images/man01.jpg'
import woman01 from './../assets/images/woman01.jpg'
import child01 from './../assets/images/child01.jpg'
import product1 from './../assets/images/image01.jpg'
import { ServiceCard, ProductCard, CategoryCard, InfoCard } from '../components/uiElements/Cards'
import { Button } from '../components/uiElements/Buttons'
import { FaCalendarDay, FaClock, FaShieldAlt } from 'react-icons/fa'
export default function HomeView() {

  const [loading, setloading] = useState(true)
  const [solde, setsolde] = useState(null)
  const [productsSolde, setproductsSolde] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setsolde({
        cover: serviceCover3,
        title: '-30% sur toutes vos montures',
        long_speech: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, fugiat quidem? Debitis ipsam laborum dolore vitae expedita veniam omnis eum, officiis modi dolorum hic, minima, ea laudantium voluptatum explicabo suscipit.',
        short_speech: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,',
        value: 30
      })
      setproductsSolde([{
        cover: product1,
        creator: 'Blue Magic',
        name: 'Lunettes de soleil',
        price: 74,
        solde: 10,
        colors: ['#aaa', '#f44336', '#4caf50'],
        category: 'man'
      },{
        cover: product1,
        creator: 'Blue Magic',
        name: 'Lunettes de soleil',
        price: 74,
        solde: 10,
        colors: ['#aaa', '#f44336', '#4caf50'],
        category: 'man'
      },{
        cover: product1,
        creator: 'Blue Magic',
        name: 'Lunettes de soleil',
        price: 74,
        solde: 10,
        colors: ['#aaa', '#f44336', '#4caf50'],
        category: 'man'
      },{
        cover: product1,
        creator: 'Blue Magic',
        name: 'Lunettes de soleil',
        price: 74,
        solde: 10,
        colors: ['#aaa', '#f44336', '#4caf50'],
        category: 'man'
      }])
      setloading(false)
    }, 3000);
  }, [])
  
  if (loading) {
    return (
      <div className='view home-view'>
        {loading ? <div className='loading'></div> : ''}
      </div>
    )
  }
  return (
    <div className='view home-view'>
      <HomeBanner />
      <div className="page-content">
        <section className="soldes-presentation">
          <div className="title title-dot">{solde ? 'Soldes' : 'Decouvrer'} Sur Le Site</div>
          <div className="soldes-products">
            {productsSolde.map((product, key) => <ProductCard key={key} image={product.cover} price={product.price} solde={product.solde} colors={product.colors} name={product.name} creator={product.creator} />)}
            {/* <ProductCard image={product1} price={55} solde={30} />
            <ProductCard image={product1} price={55} solde={3} colors={['#aaa', '#f44336']} />
            <ProductCard image={product1} price={55} solde={8} colors={['#aaa', '#f44336', '#4caf50']} />
            <ProductCard image={product1} price={55} solde={50} colors={['#ffc107', '#a5f8e2']} /> */}
          </div>
        </section>
        <section className="category-presentation">
          <div className="title title-dot">Faites Vos Commades Depuis Le Site</div>
          <div className="categories">
            <CategoryCard name='Lunettes Hommes' cover={man01} />
            <CategoryCard name='Lunettes Femmes' cover={woman01} />
            <CategoryCard name='Lunettes Enfants' cover={child01} />
          </div>
        </section>
        <section className="services-presentation">
          <div className="title title-dot">Services D'optometrie Complets</div>
          <div className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem nam distinctio optio fugit eligendi sapiente corporis ipsam, quis sit pariatur id et nemo labore placeat rerum commodi officia at suscipit.
          </div>
          <div className="services">
            <ServiceCard imageCover={serviceCover1} name="Services D'optometrie Complets"  />
            <ServiceCard imageCover={serviceCover2} name="Large Choix De Lunettes" />
            <ServiceCard imageCover={serviceCover3} name="Vente De Montures Pour Vos Lunettes" />
            <ServiceCard imageCover={serviceCover4} name="Entretient De Vos Lunettes Gratuit" />
          </div>
        </section>
        {solde ? <section className="section-promo"  style={{background: 'url("' + solde.cover + '") no-repeat center / cover'}}>
          <div className="content">
            <div className="promo-title">{solde.title}</div>
            <div className="promo-text">
              {solde.long_speech}
            </div>
            <Button label='Acheter une maintenant' />
          </div>
        </section> : ''}
        
        <section className="section-infos">
          <div className="title title-dot">Mega Optic Cameroun</div>
          <div className="infos">
            <InfoCard Ico={FaCalendarDay} title='Ouvert 7j/7' details='9h - 19h' />
            <InfoCard Ico={FaClock} title='Service Rapide' details='Obtenez rapidement vos lunettes' />
            <InfoCard Ico={FaShieldAlt} title='Garantie' details='Garanties limite sur nos produits' />
          </div>
        </section>
      </div>
    </div>
  )
}
