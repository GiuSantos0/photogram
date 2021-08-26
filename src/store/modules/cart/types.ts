export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
}

export interface ICartItem  {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
}
