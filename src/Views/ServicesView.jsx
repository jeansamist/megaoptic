import React, { useState, useEffect } from "react";
import ServiceBanner from "../components/services/ServiceBanner";
import serviceCover2 from "./../assets/images/image02.jpg";
import serviceCover3 from "./../assets/images/image03.jpg";
import serviceCover4 from "./../assets/images/image04.jpg";
import serviceCover1 from "./../assets/images/test03.jpg";
import Promotion from "../components/Promotion";
export default function ServicesView() {
  window.scrollTo(0, 0);
  const [loading, setloading] = useState(true);
  const [solde, setsolde] = useState(false);
  const [services, setservices] = useState([]);

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
      setservices([
        {
          cover: serviceCover1,
          name: "Services D'optometrie Complets",
          description:
            "Suscipit consequatur sunt perspiciatis ipsa soluta neque error, enim voluptas explicabo commodi amet unde itaque voluptates! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quos illo repellat fugit. Esse voluptas necessitatibus itaque. Perferendis, consequuntur eius, laboriosam velit, temporibus nisi aliquid sequi iusto repudiandae possimus iure!",
          link: "#",
        },
        {
          cover: serviceCover2,
          name: "Large Choix De Lunettes",
          description:
            "Suscipit consequatur sunt perspiciatis ipsa soluta neque error, enim voluptas explicabo commodi amet unde itaque voluptates! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quos illo repellat fugit. Esse voluptas necessitatibus itaque. Perferendis, consequuntur eius, laboriosam velit, temporibus nisi aliquid sequi iusto repudiandae possimus iure!",
          link: "#",
        },
        {
          cover: serviceCover3,
          name: "Vente De Montures Pour Vos Lunettes",
          description:
            "Suscipit consequatur sunt perspiciatis ipsa soluta neque error, enim voluptas explicabo commodi amet unde itaque voluptates! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quos illo repellat fugit. Esse voluptas necessitatibus itaque. Perferendis, consequuntur eius, laboriosam velit, temporibus nisi aliquid sequi iusto repudiandae possimus iure!",
          link: "#",
        },
        {
          cover: serviceCover4,
          name: "Entretient De Vos Lunettes Gratuit",
          description:
            "Suscipit consequatur sunt perspiciatis ipsa soluta neque error, enim voluptas explicabo commodi amet unde itaque voluptates! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quos illo repellat fugit. Esse voluptas necessitatibus itaque. Perferendis, consequuntur eius, laboriosam velit, temporibus nisi aliquid sequi iusto repudiandae possimus iure!",
          link: "#",
        },
      ]);
      setloading(false);
    }, 1000);
  }, []);

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
    <div className="view services-view">
      {services.map((service, key) => (
        <ServiceBanner key={key} {...service} />
      ))}
      <br />
      <br />
      {solde ? <Promotion {...solde} /> : ""}
    </div>
  );
}
