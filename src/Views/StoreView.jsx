import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Promotion from "../components/Promotion";
import StoreBanner from "../components/store/StoreBanner";
import { ButtonLink } from "../components/uiElements/Buttons";
import { ProductCard } from "../components/uiElements/Cards";
import serviceCover3 from "./../assets/images/image03.jpg";
import product3 from "./../assets/images/lunettes-20160d.jpg";
import product1 from "./../assets/images/lunettes-44979e.jpg";
import product2 from "./../assets/images/lunettes-da867a.jpg";
import product4 from "./../assets/images/lunettes-fff493.jpg";
export default function StoreView() {
  window.scrollTo(0, 0);
  const [loading, setloading] = useState(true);
  const [solde, setsolde] = useState(null);
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setsolde({
        cover: serviceCover3,
        title: "-30% sur toutes vos montures",
        long_speech:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, fugiat quidem? Debitis ipsam laborum dolore vitae expedita veniam omnis eum, officiis modi dolorum hic, minima, ea laudantium voluptatum explicabo suscipit.",
        short_speech:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,",
        value: 30,
      });
      setcategories([
        {
          name: "Lunettes Hommes",
          products: [
            {
              cover: product1,
              creator: "Blue Magic",
              name: "Lunettes de soleil",
              price: 74,
              solde: 10,
              colors: ["#44979e", "#549e3f", "#7c1337"],
              category: "man",
            },
            {
              cover: product2,
              creator: "Blue Magic",
              name: "Lunettes de soleil",
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
          ],
        },
        {
          name: "Lunettes Femmes",
          products: [
            {
              cover: product1,
              creator: "Blue Magic",
              name: "Lunettes de soleil",
              price: 74,
              solde: 10,
              colors: ["#44979e", "#549e3f", "#7c1337"],
              category: "man",
            },
            {
              cover: product2,
              creator: "Blue Magic",
              name: "Lunettes de soleil",
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
          ],
        },
        {
          name: "Lunettes Enfants",
          products: [
            {
              cover: product1,
              creator: "Blue Magic",
              name: "Lunettes de soleil",
              price: 74,
              solde: 10,
              colors: ["#44979e", "#549e3f", "#7c1337"],
              category: "man",
            },
            {
              cover: product2,
              creator: "Blue Magic",
              name: "Lunettes de soleil",
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
          ],
        },
      ]);
      setloading(false);
    }, 1000);
  }, []);

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
  return (
    <div className="view home-view">
      <StoreBanner />
      <div className="page-content">
        {categories.map((category, key_) => (
          <section className="category" key={key_}>
            <motion.div {...MOTIONSSETTINGS.sectionTitle} className="title">
              {category.name}
            </motion.div>
            <div className="soldes-products">
              {category.products.map((product, key) => (
                <motion.div
                  {...MOTIONSSETTINGS.card}
                  transition={{ ...TRANSITION, delay: -0.5 + (key + 1) / 2 }}
                >
                  <ProductCard
                    key={key}
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
            <div className="load-more">
              <ButtonLink largeBtn={true} to="/store/category/man">
                Voir plus
              </ButtonLink>
            </div>
          </section>
        ))}
        <br />
        {solde ? <Promotion {...solde} /> : ""}
      </div>
    </div>
  );
}
