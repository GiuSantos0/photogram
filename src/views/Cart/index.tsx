import React from "react";
import { useSelector } from "react-redux";
import { ICartItem } from "../../store/modules/cart/types";
import { IState } from "../../store";

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);
  
  console.log(cart);

  cart.map((item) => console.log(item));
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr>
            <td>{item.product.name}</td>
            <td>{(item.product.price * item.quantity).toFixed(2)}</td>
          </tr>
        ))};
      </tbody>
    </table>
  );
};

export default Cart;
