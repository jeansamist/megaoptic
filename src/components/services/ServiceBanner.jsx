import React from "react";
import { motion } from "framer-motion";
import { ButtonLink } from "../uiElements/Buttons";
import { FaPhone } from "react-icons/fa";
export default function ServiceBanner({ cover, name, description, id = 0 }) {
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
  };
  return (
    <div
      className="service-banner"
      style={{ background: 'url("' + cover + '") no-repeat center / cover' }}
    >
      <div className="content">
        <motion.div {...MOTIONSSETTINGS.sectionTitle} className="title">
          {name}
        </motion.div>
        <motion.div {...MOTIONSSETTINGS.sectionText} className="description">
          {description}
        </motion.div>
        <ButtonLink to={"/contact/" + name}>
          <FaPhone /> Demander le service
        </ButtonLink>
      </div>
    </div>
  );
}
