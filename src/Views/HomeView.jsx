import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import HomeBanner from '../components/home/HomeBanner'
import { CategoryCard, InfoCard, ProductCard, ServiceCard } from '../components/uiElements/Cards'
import child01 from './../assets/images/child01.jpg'
import product1 from './../assets/images/image01.jpg'
import serviceCover2 from './../assets/images/image02.jpg'
import serviceCover3 from './../assets/images/image03.jpg'
import serviceCover4 from './../assets/images/image04.jpg'
import man01 from './../assets/images/man01.jpg'
import serviceCover1 from './../assets/images/test03.jpg'
import woman01 from './../assets/images/woman01.jpg'
import { FaCalendarDay, FaClock, FaShieldAlt } from 'react-icons/fa'
import Promotion from '../components/Promotion'
export default function HomeView() {
  window.scrollTo(0, 0)
  const [loading, setloading] = useState(true)
  const [solde, setsolde] = useState(null)
  const [productsSolde, setproductsSolde] = useState([])
  const [categories, setcategories] = useState([])
  const [services, setservices] = useState([])

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
      setservices([
        {
          cover: serviceCover1,
          name: "Services D'optometrie Complets",
          description: "Suscipit consequatur sunt perspiciatis ipsa soluta neque error, enim voluptas explicabo commodi amet unde itaque voluptates!",
          link: '#'
        },
        {
          cover: serviceCover2,
          name: "Large Choix De Lunettes",
          description: "Suscipit consequatur sunt perspiciatis ipsa soluta neque error, enim voluptas explicabo commodi amet unde itaque voluptates!",
          link: '#'
        },
        {
          cover: serviceCover3,
          name: "Vente De Montures Pour Vos Lunettes",
          description: "Suscipit consequatur sunt perspiciatis ipsa soluta neque error, enim voluptas explicabo commodi amet unde itaque voluptates!",
          link: '#'
        },
        {
          cover: serviceCover4,
          name: "Entretient De Vos Lunettes Gratuit",
          description: "Suscipit consequatur sunt perspiciatis ipsa soluta neque error, enim voluptas explicabo commodi amet unde itaque voluptates!",
          link: '#'
        },
      ])
      setcategories([
        {
          name: 'Lunettes Hommes',
          cover: man01
        },
        {
          name: 'Lunettes Femmes',
          cover: woman01
        },
        {
          name: 'Lunettes Enfants',
          cover: child01
        }
      ])
      setloading(false)
    }, 1000);
  }, [])
  
  if (loading) {
    return (
      <div className='view home-view'>
        {loading ? <div className='loading'>
          <div className="loading-bar">
          </div>
        </div> : ''}
      </div>
    )
  }
  const TRANSITION = { duration: 2, type: 'spring' }
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
      transition: { ...TRANSITION, delay: 0.5 }
    },
    card: {
      initial:{ scale: 0.8, opacity: 0 },
      viewport: { once: true },
      whileInView:{ scale: 1, opacity: 1 },
    },
    card2: {
      initial:{ y: -50, opacity: 0 },
      viewport: { once: true },
      whileInView:{ y: 0, opacity: 1 },
    }
  }
  return (
    <div className='view home-view'>
      <HomeBanner />
      <div className="page-content">
        <section className="soldes-presentation">
          <motion.div {...MOTIONSSETTINGS.sectionTitle} className="title title-dot">{solde ? 'Soldes' : 'Decouvrer'} Sur Le Site</motion.div>
          <div className="soldes-products">
            {productsSolde.map((product, key) => (
              <motion.div {...MOTIONSSETTINGS.card} transition={{...TRANSITION, delay: (-0.5 + ((key + 1) / 2)),}}>
                <ProductCard key={key} image={product.cover} price={product.price} solde={product.solde} colors={product.colors} name={product.name} creator={product.creator} />
              </motion.div>
            ))}
          </div>
        </section>
        <section className="category-presentation">
          <motion.div {...MOTIONSSETTINGS.sectionTitle} className="title title-dot">Faites Vos Commades Depuis Le Site</motion.div>
          <div className="categories">
            {categories.map((category, key) => (
              <motion.div {...MOTIONSSETTINGS.card2} transition={{...TRANSITION, delay: (-0.5 + ((key + 2) / 2)),}}>
                <CategoryCard {...category} />
              </motion.div>
            ))}
          </div>
        </section>
        <section className="services-presentation">
          <motion.div {...MOTIONSSETTINGS.sectionTitle} className="title title-dot">Services D'optometrie Complets</motion.div>
          <motion.div {...MOTIONSSETTINGS.sectionText} className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem nam distinctio optio fugit eligendi sapiente corporis ipsam, quis sit pariatur id et nemo labore placeat rerum commodi officia at suscipit.
          </motion.div>
          <div className="services">
            {services.map((service, key) => (
              <motion.div {...MOTIONSSETTINGS.card} transition={{duration: 3, type: 'spring', delay: (-0.5 + ((key + 1) / 2)),}}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </section>
        {solde ? <Promotion {...solde} /> : ''}
        
        <section className="section-infos">
          <motion.div {...MOTIONSSETTINGS.sectionTitle} className="title title-dot">Mega Optic Cameroun</motion.div>
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
