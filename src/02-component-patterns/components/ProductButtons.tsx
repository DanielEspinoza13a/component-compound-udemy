import styles from "../styles/styles.module.css";

import { useContext } from "react";
import { ProductContext } from "./ProductCard";

export const ProductButtons = ({ className }: { className: string }) => {
  const { increaseBy, counter } = useContext(ProductContext);

  return (
    <div className={`${styles.buttonsContainer} ${className}`}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}> {counter} </div>
      <button onClick={() => increaseBy(+1)} className={styles.buttonAdd}>
        +
      </button>
    </div>
  );
};
