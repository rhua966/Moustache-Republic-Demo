export type Size = "S" | "M" | "L" | null;

export type CartItem = {
  key: string;
  name: string;
  size: Size;
  image: string;
  price: number;
  amount: number;
};

export type ProductItem = {
  id: string;
  key: string;
  name: string;
  description: string;
  avaliableSizes: Size[];
  image: string;
  price: number;
};

export type State = {
  cart: CartItem[];
  totalAmount: number;
  totalPrice: number;
};

export type Action = {
  type: "ADD" | "REMOVE" | "CLEAR";
  item: CartItem;
};
