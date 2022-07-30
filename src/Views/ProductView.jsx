import React from 'react'
import { ButtonLink } from '../components/uiElements/Buttons'
import { FaShoppingBasket } from 'react-icons/fa'
import { ProductCard } from '../components/uiElements/Cards'
import product1 from './../assets/images/image01.jpg'
import settings from '../helpers/settings'
export default function ProductView() {
  const colors = ['#000']
  return (
    <div className='view product-view'>
      <section className='product'>
        <div className="cover">
          <img src={product1} alt="" />
        </div>
        <div className="details">
          <div className="infos">
            <b>Empty</b> - Empty
          </div>
          <div className="price">55 {settings.devise}</div>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laborum dolorem, minima id atque numquam rem voluptas, eaque nisi deserunt ea. Et facilis harum sunt, placeat nesciunt beatae explicabo culpa.
          </div>
          <h1>Colors</h1>
          <div className="colors">
            {colors.map((color, key) => (<div className='color' style={{ background: color }} key={key}></div>))}
          </div>
          <ButtonLink to='/contact/command'><FaShoppingBasket size={20} /> Commander Maintenant</ButtonLink>
        </div>
      </section>
      <div className="page-content">
        <section className="man">
          <div className="title">Dans la meme categorie</div>
          <div className="soldes-products">
            <ProductCard image={product1} price={55} solde={30} />
            <ProductCard image={product1} price={55} solde={3} colors={['#aaa', '#f44336']} />
            <ProductCard image={product1} price={55} solde={8} colors={['#aaa', '#f44336', '#4caf50']} />
            <ProductCard image={product1} price={55} solde={50} colors={['#ffc107', '#a5f8e2']} />
            <ProductCard image={product1} price={55} solde={30} />
            <ProductCard image={product1} price={55} solde={3} colors={['#aaa', '#f44336']} />
            <ProductCard image={product1} price={55} solde={8} colors={['#aaa', '#f44336', '#4caf50']} />
            <ProductCard image={product1} price={55} solde={50} colors={['#ffc107', '#a5f8e2']} />
          </div>
        </section>
      </div>
    </div>
  )
}
