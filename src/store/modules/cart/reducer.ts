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

                console.log(action.payload);
                console.log(state, draft);
                const productInCartIndex = draft.items.findIndex((item) =>
                    item.product.id === product.id,
                );

                if (productInCartIndex >= 0) {
                    draft.items[productInCartIndex].quantity++;
                } else {
                    draft.items.push({
                        product,
                        quantity: 1,
                    });
                }
                console.log(draft.items);

                localStorage.setItem(CART_PRODUCTS, JSON.stringify(draft.items));

                break;
            }
            default: {
                return draft;
            }
        }
    });
};

export default cart;
