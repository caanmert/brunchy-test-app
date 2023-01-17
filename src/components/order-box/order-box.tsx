import React, { useRef, useState } from "react";
import styles from "./order-box.module.scss";
import basketIcon from "../../assets/images/shopping-basket.png";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { formatCurrency } from "../../utilities/formatCurrency";
import { useShoppingCart } from "../../context/shopping-cart-context";
import { items } from "../../data/items";
import { OrderBoxProps } from "./order-box.props";
import { Button } from "../button/button";
import { OrderBoxModal } from "../order-box-modal/order-box-modal";

export const OrderBox = (props: OrderBoxProps) => {
  const [isBoxVisible, setBoxVisible] = useState(false);

  const { handleOrder } = props;
  const { cartItems } = useShoppingCart();
  const ref = useRef(null);
  const onBasketIconPress = () => {
    setBoxVisible(true);
  };
  const handleClickOutside = () => {
    setBoxVisible(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div className={styles.orderBox}>
      <img onClick={onBasketIconPress} width={30} height={30} src={basketIcon} alt="basketIcon" />
      <p className={styles.total}>
        {formatCurrency(
          cartItems.reduce((total, cartItem) => {
            const item = items.find((i) => i.id === cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
          }, 0),
        )}
      </p>
      <Button text="Order Now" onClick={handleOrder} />
      {isBoxVisible && (
        <>
          <div className={styles.modalContainer} onClick={() => setBoxVisible(false)} />
          <OrderBoxModal />
        </>
      )}
    </div>
  );
};
