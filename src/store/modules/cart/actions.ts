import { IProduct } from "./types";

export function addProductToCart(product: IProduct) {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: {
      product
    }
  };
}

export function incrementProductQuantity(productId: number) {
  return {
    type: "INCREMENT_PRODUCT",
    payload: {
      productId
    }
  };
}

export function decrementProductQuantity(productId: number) {
  return {
    type: "DECREMENT_PRODUCT",
    payload: {
      productId
    }
  };
}

export function removeProduct(productId: number) {
  return {
    type: "REMOVE_PRODUCT",
    payload: {
      productId
    }
  };
}
