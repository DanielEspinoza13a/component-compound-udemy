import { Product } from "../interfaces/ProductInterfaces";

const product1 = {
    id: "1",
    title: "coffe",
    img: "./coffee-mug.png",
  };
  
  const product2 = {
    id: "2",
    title: "coffe-meme",
    img: "./coffee-mug2.png",
  };
  
 const products: Product[] = [product1, product2];

 export default products