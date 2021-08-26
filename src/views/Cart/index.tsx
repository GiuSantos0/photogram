import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ICartItem } from "../../store/modules/cart/types";
import { IState } from "../../store";
import CartItem from "./Cartitem";
import Title from "../../components/Title";
import { ButtonPrimary } from "../../components/Buttons";
import { CardTotal } from "./style";

import formatMoneyToReal from "../../utils/formatMoneyToReal";

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);

  console.log(cart);

  const cartTotalValue = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0,
    )
  }, [cart])

  const cartFinalFormattedValue = useMemo(
    () => formatMoneyToReal(cartTotalValue),
    [cartTotalValue],
  )
  // const incrementQuantity = useCallback(
  //   (cartProduct: ICartItem) => {

  //     const product = cart[cartProduct.id]

  //     if (cartProduct.quantity === product.quantity) return

  //     dispatch(incrementCartProductQuantity(cartProduct))
  //   },
  //   [dispatch, cart],
  // )

  // const handleAddProductToCart = useCallback((product: IProduct) => {
  //     dispatch(addProductToCart(product));
  // }, [dispatch]);

  const handleClickCheckout = () => 
    toast.success('Compra Finalizada!');


  return (
    <>
      <ToastContainer />
      <Title>Carrinho:</Title>
      <CardTotal>
        {cart.length !== 0 ? (
          <>
            {cart.map((item) => (
              <CartItem
                name={item.product.name}
                imageUrl={item.product.image}
                price={item.product.price}
                quantity={item.quantity}
                stock={item.product.stock}
              // onIncrementQuantity={() => incrementQuantity(product)}
              // onDecrementQuantity={() => decrementQuantity(product)}
              // onRemoveItem={() => dispatch(removeCartProduct(product.id))}
              />
            ))}
            <div className="total-price">
              <span>
                <b>Total: </b>
                {cartFinalFormattedValue}
              </span>
            </div>
            <div>
              <ButtonPrimary
                onClick={handleClickCheckout}
              >
                Finalizar Compra
              </ButtonPrimary>
            </div>
          </>
        )
          :
          <span className="empty-cart">Carrinho vazio :(</span>
        }
      </CardTotal>

    </>
  );
};

export default Cart;
