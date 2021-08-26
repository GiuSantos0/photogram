import { IProduct } from "./types";

export function addProductToCart(product: IProduct) {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: {
      product
    }
  };
}

export function incrementProduct(product: IProduct) {
  return {
    type: "INCREMENT_PRODUCT",
    payload: {
      product
    }
  };
}

export function decrementProduct(product: IProduct) {
  return {
    type: "DECREMENT_PRODUCT",
    payload: {
      product
    }
  };
}
