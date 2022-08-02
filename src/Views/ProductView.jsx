import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { ButtonLink } from "../components/uiElements/Buttons";
import { ProductCard } from "../components/uiElements/Cards";
import addToBasket from "../functions/addToBasket";
import settings from "../helpers/settings";
import product3 from "./../assets/images/lunettes-20160d.jpg";
import product1 from "./../assets/images/lunettes-44979e.jpg";
import product02 from "./../assets/images/lunettes-549e3f.jpg";
import product03 from "./../assets/images/lunettes-7c1337.jpg";
import product2 from "./../assets/images/lunettes-da867a.jpg";
import product4 from "./../assets/images/lunettes-fff493.jpg";
export default function ProductView() {
  const [loading, setloading] = useState(true);
  // const [solde, setsolde] = useState(null)
  let { id } = useParams();
  const [productsSolde, setproductsSolde] = useState([]);
  const [product, setproduct] = useState({});
  const [currentImage, setcurrentImage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setproduct({
        images: [product1, product02, product03],
        colors: ["#44979e", "#549e3f", "#7c1337"],
        cover: product1,
        creator: "Hick Man",
        name: "Lunettes de vue",
        price: 74000,
        solde: 30,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laborum dolorem, minima id atque numquam rem voluptas, eaque nisi deserunt ea. Et facilis harum sunt, placeat nesciunt beatae explicabo culpa.",
      });
      setproductsSolde([
        {
          cover: product1,
          creator: "Hick Man",
          name: "Lunettes de vue",
          price: 74,
          solde: 10,
          colors: ["#44979e", "#549e3f", "#7c1337"],
          category: "man",
        },
        {
          cover: product2,
          creator: "Monture",
          name: "Lunettes de vue",
          price: 74,
          solde: 10,
          colors: ["#da867a", "#7fef99"],
          category: "man",
        },
        {
          cover: product3,
          creator: "Blue Magic",
          name: "Lunettes de soleil",
          price: 74,
          solde: 10,
          colors: ["#20160d"],
          category: "man",
        },
        {
          cover: product4,
          creator: "Blue Magic",
          name: "Lunettes de soleil",
          price: 74,
          solde: 10,
          colors: ["#fff493"],
          category: "man",
        },
      ]);
      document.title =
        product.creator + " - " + product.name + " - Mega Optic Cameroun";
      setloading(false);
    }, 1000);
  }, []);
  window.scrollTo(0, 0);
  if (loading) {
    return (
      <div className="view home-view">
        {loading ? (
          <div className="loading">
            <div className="loading-bar"></div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
  const TRANSITION = { duration: 2, type: "spring" };
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
      transition: { ...TRANSITION, delay: 0.5 },
    },
    card: {
      initial: { scale: 0.8, opacity: 0 },
      viewport: { once: true },
      whileInView: { scale: 1, opacity: 1 },
    },
    card2: {
      initial: { y: -50, opacity: 0 },
      viewport: { once: true },
      whileInView: { y: 0, opacity: 1 },
    },
  };
  return (
    <div className="view product-view">
      <section className="product">
        {console.log((100 / product.images.length) * currentImage)}
        <motion.div
          {...MOTIONSSETTINGS.card}
          transition={{ ...TRANSITION, bounce: 0.7, delay: 0.5 }}
          className="cover"
        >
          <div
            className="images"
            style={{ transform: "translateX(-" + 100 * currentImage + "%)" }}
          >
            {product.images.map((image, key) => (
              <img src={image} key={key} alt="" />
            ))}
          </div>
        </motion.div>
        <div className="details">
          <motion.div {...MOTIONSSETTINGS.sectionTitle} className="infos">
            <b>{product.creator}</b> - {product.name}
          </motion.div>
          <motion.div {...MOTIONSSETTINGS.sectionText} className="price">
            {product.solde > 0 ? (
              <>
                <div className="newprice">
                  {product.price - (product.price * product.solde) / 100}{" "}
                  {settings.devise}
                </div>
                <div className="oldprice">
                  {product.price} {settings.devise}
                </div>
              </>
            ) : (
              <div className="newprice">
                {product.price} {settings.devise}
              </div>
            )}
          </motion.div>
          <motion.div {...MOTIONSSETTINGS.sectionText} className="description">
            {product.description}
          </motion.div>
          <h1>Colors</h1>
          <div className="colors">
            {product.colors.map((color, key) => (
              <div
                className="color"
                onClick={() => {
                  setcurrentImage(key);
                }}
                style={{ background: color }}
                key={key}
              ></div>
            ))}
          </div>
          <ButtonLink
            to="/basket"
            onClick={() =>
              addToBasket(
                id,
                product.cover,
                product.colors[currentImage],
                product.solde > 0
                  ? product.price - (product.price * product.solde) / 100
                  : product.price,
                product.name
              )
            }
          >
            <FaShoppingBasket size={20} /> Ajouter au panier
          </ButtonLink>
        </div>
      </section>
      <div className="page-content">
        <section className="man">
          <motion.div {...MOTIONSSETTINGS.sectionTitle} className="title">
            Dans la meme categorie
          </motion.div>
          <div className="soldes-products">
            {productsSolde.map((product, key) => (
              <motion.div
                key={key}
                {...MOTIONSSETTINGS.card}
                transition={{ ...TRANSITION, delay: -0.25 + (key + 0.25) / 2 }}
              >
                <ProductCard
                  image={product.cover}
                  price={product.price}
                  solde={product.solde}
                  colors={product.colors}
                  name={product.name}
                  creator={product.creator}
                />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
