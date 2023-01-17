import React, { useState } from "react";
import styles from "./landing-page.module.scss";
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";
import { useShoppingCart } from "../../context/shopping-cart-context";
import { CardList, Header, Hero, OrderBox, OrderSuccessModal } from "../../components";

const LandingPage = () => {
  const [isOrderSuccessModalVisible, setOrderSuccessModalVisible] = useState(false);

  const { removeAllCartItems } = useShoppingCart();

  const scrollRef = useHorizontalScroll();

  const handleOrder = () => {
    setOrderSuccessModalVisible(true);
    removeAllCartItems();
  };
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      <section className={styles.heroContainer}>
        <Hero />
      </section>
      <section className={styles.cards} ref={scrollRef}>
        <CardList />
      </section>

      <section className={styles.orderBoxContainer}>
        <OrderBox handleOrder={handleOrder} />
      </section>
      {isOrderSuccessModalVisible && (
        <>
          <div className={styles.modalContainer} onClick={() => setOrderSuccessModalVisible(false)} />
          <OrderSuccessModal onClose={() => setOrderSuccessModalVisible(false)} />
        </>
      )}
    </div>
  );
};

export default LandingPage;
