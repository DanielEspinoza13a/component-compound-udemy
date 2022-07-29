export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface Props {
  product: Product;
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number
}

export interface ProductContextProps {
  counter: number;
  //el increaseBy es una funcion que no retorna nada, por ende, es void
  increaseBy: (value: number) => void;
  product: Product;
}

export interface onChangeArgs {
  product: Product
  count: number
}

export interface ProductInCart extends Product {
  count: number;
}