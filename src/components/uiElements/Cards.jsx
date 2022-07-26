import React from "react";
import { FaChevronRight, FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";
import settings from "../../helpers/settings";
import { ButtonLink } from "./Buttons";
export function ServiceCard({
  cover,
  name = "Empty",
  description = "Suscipit consequatur sunt perspiciatis ipsa soluta neque error, enim voluptas explicabo commodi amet unde itaque voluptates!",
  id = "0",
}) {
  return (
    <div className="service-card">
      <div
        className="cover"
        style={{ background: 'url("' + cover + '") no-repeat center / cover' }}
      ></div>
      <div className="name">{name}</div>
      <div className="description">{description}</div>
      <ButtonLink to={"/contact/" + name} largeBtn={true}>
        Demander
        <FaChevronRight size={20} />
      </ButtonLink>
    </div>
  );
}

export function ProductCard({
  id = 0,
  image,
  name = "Empty",
  price = 0,
  solde = 0,
  creator = "Empty",
  colors = ["#000"],
}) {
  return (
    <div className="product-card">
      {solde > 0 ? <div className="solde-bubble">-{solde}%</div> : ""}
      <div className="img">
        <img src={image} alt="" />
      </div>
      <div className="infos">
        <b>{creator}</b> - {name}
      </div>
      <div className="price">
        {solde > 0 ? (
          <>
            <div className="newprice">
              {price - (price * solde) / 100} {settings.devise}
            </div>
            <div className="oldprice">
              {price} {settings.devise}
            </div>
          </>
        ) : (
          <div className="newprice">
            {price} {settings.devise}
          </div>
        )}
      </div>
      <div className="colors">
        {colors.map((color, key) => (
          <div className="color" style={{ background: color }} key={key}></div>
        ))}
      </div>
      <ButtonLink to={"/store/product/" + id} largeBtn={true}>
        <FaShoppingBasket size={20} /> Details
      </ButtonLink>
    </div>
  );
}

export function CategoryCard({ name = "Empty", cover }) {
  return (
    <Link
      to={"/store/category/man"}
      className="category-card"
      style={{ background: 'url("' + cover + '") no-repeat center / cover' }}
    >
      <div className="name">{name}</div>
    </Link>
  );
}

export function InfoCard({ title = "Empty", Ico, details = "Empty" }) {
  return (
    <div className="info-card">
      <div className="ico">
        <Ico size={30} />
      </div>
      <div className="info">
        <h3>{title}</h3>
        <div className="details">{details}</div>
      </div>
    </div>
  );
}
