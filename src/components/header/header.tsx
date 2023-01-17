import React from "react";
import styles from "./header.module.scss";
import motorcycleImg from "../../assets/images/motorcycle.png";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h3 className={styles.title}>BRUNCHY</h3>
      <div className={styles.navItems}>
        <a href="http://dreamshot.bg" className={styles.navItem}>
          About
        </a>
        <a href="http://dreamshot.bg" className={styles.navItem}>
          Call Us
        </a>
        <div className={styles.freeDelivery}>
          <div className={styles.navItem}>
            Free Delivery
            <img src={motorcycleImg} alt="deliveryImage" />
          </div>
        </div>
      </div>
    </header>
  );
};
