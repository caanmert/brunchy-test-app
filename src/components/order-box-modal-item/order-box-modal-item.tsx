import React from "react";
import { useShoppingCart } from "../../context/shopping-cart-context";
import { items } from "../../data/items";
import { formatCurrency } from "../../utilities/formatCurrency";
import styles from "./order-box-modal-item.module.scss";
import { OrderBoxModalItemProps } from "./order-box-modal-item.props";

export const OrderBoxModalItem = (props: OrderBoxModalItemProps) => {
  const { id, quantity } = props;
  const { removeFromCart } = useShoppingCart();
  const item = items.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <div className={styles.item}>
      <p className={styles.itemName}>
        {" "}
        {item.name} {quantity > 1 && <span>x{quantity}</span>}
      </p>
      <p className={styles.itemPrice}>{formatCurrency(item.price)}</p>
    </div>
  );
};
