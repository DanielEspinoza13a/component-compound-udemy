import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

import { useContext } from "react";
import { ProductContext } from "./ProductCard";

export const ProductImage = ({ img, className, style }:{img?:string, className?: string, style?: React.CSSProperties }) => {

    const {product} = useContext(ProductContext)
    const imgToShow = img ?? product.img ?? noImage;
  
    return (
      <img
        className={`${styles.productImg} ${className}`}
        style={ style }
        src={imgToShow}
        alt="Product img"
      />
    );
  };