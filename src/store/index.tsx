import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./modules/cart/reducer";
import { ICartState } from "./modules/cart/types";

export interface IState {
  // auth: AuthState
  // products: ProductsState
  cart: ICartState
}

const rootReducer = combineReducers({
  //   auth: authReducer,
  //   products: productsReducer,
  cart: cartReducer,
});

// const loggerMiddleware = createLogger();

const store = createStore(rootReducer, composeWithDevTools());

export default store;
