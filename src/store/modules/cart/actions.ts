import { IProduct } from "./types";

export function addProductToCart(product: IProduct) {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: {
      product
    }
  };
}

export function incrementProductQuantity(productId: number, quantity: number ) {
  return {
    type: "INCREMENT_PRODUCT",
    payload: {
      productId,
      quantity
    }
  };
}

export function decrementProductQuantity(productId: number, quantity: number ) {
  return {
    type: "DECREMENT_PRODUCT",
    payload: {
      productId,
      quantity
    }
  };
}
