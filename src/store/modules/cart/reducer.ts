import { Reducer } from "redux";
import produce from "immer";
import { ICartState } from "./types";

const CART_PRODUCTS = "@photogram/cart-products";

const INITIAL_STATE: ICartState = {
    items: []
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case "ADD_PRODUCT_TO_CART": {
                const { product } = action.payload;

                const productInCartIndex = draft.items.findIndex((item) =>
                    item.product.id === product.id,
                );

                if (productInCartIndex >= 0) {
                    // aqui caso a pessoa clique mais de uma vez 
                    // em comprar adicionamos + 1 a quantidade do produto
                    draft.items[productInCartIndex].quantity++;
                } else {
                    draft.items.push({
                        product,
                        quantity: 1,
                    });
                }
                break;
            }

            case "INCREMENT_PRODUCT": {
                const { productId, quantity } = action.payload;
                const productInCartIndex = draft.items.findIndex((items) =>
                    items.product.id === productId,
                );

                draft.items[productInCartIndex].quantity++;
                
                break;
            }
                
            case "DECREMENT_PRODUCT": {
                const { productId, quantity } = action.payload;
                const productInCartIndex = draft.items.findIndex((items) =>
                    items.product.id === productId,
                );

                draft.items[productInCartIndex].quantity--;
                
                break;
            }
                
            default: {
                return draft;
            }
        }
    });
};

export default cart;
