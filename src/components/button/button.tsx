import React from "react";
import styles from "./button.module.scss";
import { ButtonProps } from "./button.props";

export const Button = (props: ButtonProps) => {
  const { text, ...rest } = props;
  return (
    <button className={styles.button} {...rest}>
      {text}
    </button>
  );
};


