import React from "react";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <>
      <h3 className={styles.title}>
        The fastest brunch delivery in <span>Your city</span>
      </h3>
      <p className={styles.subTitle}>
        This is my Exploration for Fruit - Food Delivery Landing Page 🍕. How about you ?
      </p>
    </>
  );
};
