import React from 'react'
import { Button, ButtonLink } from '../components/uiElements/Buttons'
import StoreBanner from '../components/store/StoreBanner'
import { ProductCard } from '../components/uiElements/Cards'
import serviceCover3 from './../assets/images/image03.jpg'
import product1 from './../assets/images/image01.jpg'
export default function StoreView() {
  const carouselSettings = {
    autoPlay: false,
    transitionTime: 1000,
    showStatus: false,
    // renderArrowNext: () => (<div className='slider-btn next'><MdChevronRight size={30} /></div>),
    // renderArrowPrev: () => (<div className='slider-btn'><MdChevronLeft size={30} /></div>)
  };
  return (
    <div className='view home-view'>
      <StoreBanner />
      <div className="page-content">
        <section className="man">
          <div className="title">Lunettes Homme</div>
          <div className="soldes-products">
            <ProductCard image={product1} price={55} solde={30} />
            <ProductCard image={product1} price={55} solde={3} colors={['#aaa', '#f44336']} />
            <ProductCard image={product1} price={55} solde={8} colors={['#aaa', '#f44336', '#4caf50']} />
            <ProductCard image={product1} price={55} solde={50} colors={['#ffc107', '#a5f8e2']} />
          </div>
          <div className="load-more">
            <ButtonLink largeBtn={true} to='/store/category/man'>Voir plus</ButtonLink>
          </div>
        </section>
        <section className="woman">
          <div className="title">Lunettes Femme</div>
          <div className="soldes-products">
            <ProductCard image={product1} price={55} solde={30} />
            <ProductCard image={product1} price={55} solde={3} colors={['#aaa', '#f44336']} />
            <ProductCard image={product1} price={55} solde={8} colors={['#aaa', '#f44336', '#4caf50']} />
            <ProductCard image={product1} price={55} solde={50} colors={['#ffc107', '#a5f8e2']} />
          </div>
          <div className="load-more">
            <ButtonLink largeBtn={true} to=''>Voir plus</ButtonLink>
          </div>
        </section>
        <section className="child">
          <div className="title">Lunettes Enfant</div>
          <div className="soldes-products">
            <ProductCard image={product1} price={55} solde={30} />
            <ProductCard image={product1} price={55} solde={3} colors={['#aaa', '#f44336']} />
            <ProductCard image={product1} price={55} solde={8} colors={['#aaa', '#f44336', '#4caf50']} />
            <ProductCard image={product1} price={55} solde={50} colors={['#ffc107', '#a5f8e2']} />
          </div>
          <div className="load-more">
            <ButtonLink largeBtn={true} to=''>Voir plus</ButtonLink>
          </div>
        </section>
        <section className="section-promo"  style={{background: 'url("' + serviceCover3 + '") no-repeat center / cover', marginTop: '3em'}}>
          <div className="content">
            <div className="promo-title">-30% sur toutes vos montures</div>
            <div className="promo-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, fugiat quidem? Debitis ipsam laborum dolore vitae expedita veniam omnis eum, officiis modi dolorum hic, minima, ea laudantium voluptatum explicabo suscipit.
            </div>
            <Button label='Acheter une maintenant' />
          </div>
        </section>
      </div>
    </div>
  )
}
