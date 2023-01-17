import React from "react";
import { CardProps } from "./card.props";
import styles from "./card.module.scss";
import shoppingBasketImg from "../../assets/images/shopping-basket.png";
import { formatCurrency } from "../../utilities/formatCurrency";
import { useShoppingCart } from "../../context/shopping-cart-context";

export const Card = (props: CardProps) => {
  const { id, name, caption, price, image } = props;

  const { increaseCartQuantity } = useShoppingCart();

  return (
    <div className={styles.card} key={id}>
      <img src={image} className={styles.image} alt={name + " image"} />
      <div className={styles.cardDetails}>
        <p className={styles.name}>{name}</p>
        <p className={styles.caption}>{caption}</p>
        <p className={styles.price}>{formatCurrency(price)}</p>
      </div>
      <div className={styles.shoppingBasketBox} onClick={() => increaseCartQuantity(id)}>
        <img src={shoppingBasketImg} alt="basketImage" />
      </div>
    </div>
  );
};
