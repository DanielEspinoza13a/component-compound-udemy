import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import data from '../data/products'
import { useShoppingCart } from '../hooks/useShoppingCart';


export const ShoppingPage = () => {

  const {shoppingCart, onProductCountChange} = useShoppingCart()

  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {data.map((product) => (
          <ProductCard
            key={product.id}
            className={` bg-dark`}
            product={product}
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image" img={product.img} />
            <ProductTitle className="text-white" title={product.title} />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark text-white custom-width"
            onChange={onProductCountChange}
            value={product.count}
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
