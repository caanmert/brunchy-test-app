import React from "react";
import styles from "./order-box-modal.module.scss";
import { useShoppingCart } from "../../context/shopping-cart-context";
import { formatCurrency } from "../../utilities/formatCurrency";
import { items } from "../../data/items";
import { OrderBoxModalItem } from "../order-box-modal-item/order-box-modal-item";

export const OrderBoxModal = () => {
  const { cartItems } = useShoppingCart();
  return (
    <div className={styles.container}>
      {cartItems.map((item) => (
        <OrderBoxModalItem key={item.id} {...item} />
      ))}
      <hr />

      <div className={styles.total}>
        <p>Total</p>
        <p>
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = items.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0),
          )}
        </p>
      </div>
    </div>
  );
};
