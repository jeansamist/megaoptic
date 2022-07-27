import React from 'react'
import { Button } from './Buttons'
import settings from '../../helpers/settings'
export function ServiceCard({imageCover, name = 'Empty', description = 'Suscipit consequatur sunt perspiciatis ipsa soluta neque error, enim voluptas explicabo commodi amet unde itaque voluptates!', link = '#'}) {
  return (
    <div className='service-card'>
      <div className="cover" style={{background: 'url("' + imageCover + '") no-repeat center / cover'}}></div>
      <div className="name">{name}</div>
      <div className="description">{description}</div>
      <Button label='Decouvrir' largeBtn={true} />
    </div>
  )
}

export function ProductCard({ image, name = 'Empty', price = 0, solde = 0, creator = 'Empty', colors = ['#000']}) {
  return (
    <div className='product-card'>
      {solde > 0 ? <div className='solde-bubble'>-{solde}%</div> : ""}
      <div className="img">
        <img src={image} alt="" />
      </div>
      <div className="infos">
        <b>{creator}</b> - {name}
      </div>
      <div className="price">{solde > 0 ? <><div className="newprice">{price - ((price * solde) / 100)} {settings.devise}</div><div className="oldprice">{price} {settings.devise}</div></> : <div className='newprice'>{price} {settings.devise}</div>}</div>
      <div className="colors">
        {colors.map((color, key) => (<div className='color' style={{ background: color }} key={key}></div>))}
      </div>
      <Button label='Commander' largeBtn={true} />
    </div>
  )
}

export function CategoryCard({ name = 'Empty', cover }) {
  return (
    <div className='category-card' style={{background: 'url("' + cover + '") no-repeat center / cover'}}>
      <div className="name">{name}</div>
    </div>
  )
}
