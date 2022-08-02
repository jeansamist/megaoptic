import { motion } from "framer-motion";
import React from "react";
import { Button } from "../components/uiElements/Buttons";
export default function Promotion({ cover, title, long_speech }) {
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
    <section
      className="section-promo"
      style={{ background: 'url("' + cover + '") no-repeat center / cover' }}
    >
      <div className="content">
        <motion.div {...MOTIONSSETTINGS.sectionTitle} className="promo-title">
          {title}
        </motion.div>
        <motion.div {...MOTIONSSETTINGS.sectionText} className="promo-text">
          {long_speech}
        </motion.div>
        <Button label="Acheter une maintenant" />
      </div>
    </section>
  );
}
