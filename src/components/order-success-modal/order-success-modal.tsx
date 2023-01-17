import React from "react";
import { Button } from "../button/button";
import styles from "./order-success-modal.module.scss";
import { OrderSuccessModalProps } from "./order-success-modal.props";

 export const OrderSuccessModal = (props: OrderSuccessModalProps) => {
  const { onClose } = props;
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>Congratulations</h3>
        <p>Your order it’s on its way.</p>
        <Button text="Ok" onClick={onClose} />
      </div>
    </div>
  );
};


