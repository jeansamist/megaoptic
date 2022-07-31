import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaShoppingBasket } from 'react-icons/fa'
import { ButtonLink } from '../components/uiElements/Buttons'
import { ProductCard } from '../components/uiElements/Cards'
import settings from '../helpers/settings'
import product1 from './../assets/images/image01.jpg'
import addToBasket from '../functions/addToBasket'
export default function ProductView() {
  const [loading, setloading] = useState(true)
  // const [solde, setsolde] = useState(null)
  let { id } = useParams()
  const [productsSolde, setproductsSolde] = useState([])
  useEffect(() => {
    setTimeout(() => {
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
        colors: ['#aaa', '#f44336'],
        category: 'man'
      },{
        cover: product1,
        creator: 'Blue Magic',
        name: 'Lunettes de soleil',
        price: 74,
        solde: 10,
        colors: ['#aaa', '#4caf50'],
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
        colors: ['#aaa', '#f44336'],
        category: 'man'
      },{
        cover: product1,
        creator: 'Blue Magic',
        name: 'Lunettes de soleil',
        price: 74,
        solde: 10,
        colors: ['#aaa', '#4caf50'],
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
    }, 1000);
  }, [])
  window.scrollTo(0, 0)
  const colors = ['#000']
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
    <div className='view product-view'>
      <section className='product'>
        <motion.div {...MOTIONSSETTINGS.card} transition={{...TRANSITION, bounce: 0.7, delay: 0.5}} className="cover">
          <img src={product1} alt="" />
        </motion.div>
        <div className="details">
          <motion.div {...MOTIONSSETTINGS.sectionTitle} className="infos">
            <b>Empty</b> - Empty
          </motion.div>
          <motion.div {...MOTIONSSETTINGS.sectionText} className="price">55 {settings.devise}</motion.div>
          <motion.div {...MOTIONSSETTINGS.sectionText} className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laborum dolorem, minima id atque numquam rem voluptas, eaque nisi deserunt ea. Et facilis harum sunt, placeat nesciunt beatae explicabo culpa.
          </motion.div>
          <h1>Colors</h1>
          <div className="colors">
            {colors.map((color, key) => (<div className='color' style={{ background: color }} key={key}></div>))}
          </div>
          <ButtonLink to='/basket' onClick={() => addToBasket(id)}><FaShoppingBasket size={20} /> Ajouter au panier</ButtonLink>
        </div>
      </section>
      <div className="page-content">
        <section className="man">
          <motion.div {...MOTIONSSETTINGS.sectionTitle} className="title">Dans la meme categorie</motion.div>
          <div className="soldes-products">
            {productsSolde.map((product, key) => (
              <motion.div key={key} {...MOTIONSSETTINGS.card} transition={{...TRANSITION, delay: (-0.25 + ((key + 0.25) / 2)),}}>
                <ProductCard image={product.cover} price={product.price} solde={product.solde} colors={product.colors} name={product.name} creator={product.creator} />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
