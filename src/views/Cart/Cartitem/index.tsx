import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Plus, Minus } from "react-feather";
import { CartItemStyled, Price, Quantity, QuantityField, Image, ProductInfo, Total } from "./style";
import { ButtonWarning } from "../../../components/Buttons";
import formatMoneyToReal from "../../../utils/formatMoneyToReal";
import { decrementProductQuantity, incrementProductQuantity } from "../../../store/modules/cart/actions";

interface IProps {
  id: number
  name: string
  imageUrl: string
  quantity: number
  price: number
  stock: number
}

const CartItem: React.FC<IProps> = ({
  id,
  name,
  imageUrl,
  quantity,
  price,
  stock
}) => {
  const dispatch = useDispatch();
  const [newQuantity, setNewQuantity] = useState(quantity);
  const priceInReal = formatMoneyToReal(price);

  const incrementQuantity = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
      setNewQuantity(newQuantity + 1);
      dispatch(incrementProductQuantity(id, newQuantity))
  }
  
  const decrementQuantity = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
      setNewQuantity(newQuantity - 1);
      dispatch(decrementProductQuantity(id, newQuantity))
    }

  return (
    <CartItemStyled>
      <div>
        <Image src={imageUrl} />
      </div>
      <ProductInfo>
        <div className="text">
          <span>{name}</span>
          <span className="stock">{stock} restantes</span>
        </div>
        <Quantity>
          <h6>Quantidade</h6>
          <QuantityField>
            <button
              type="button"
              disabled={quantity === 1}
              onClick={(e) => decrementQuantity(e, id)}
            >
              <Minus />
            </button>
            <label>{quantity}</label>
            <button
              type="button"
              disabled={quantity >= stock}
              onClick={(e) => incrementQuantity(e, id)}
            >
              <Plus />
            </button>
          </QuantityField>
        </Quantity>
        <Total>
          <Price>{formatMoneyToReal(price * quantity)}</Price>
          <label className="unitary-price">
            {quantity > 1 ? `Valor únitário: ${priceInReal}` : null}
          </label>
        </Total>
      </ProductInfo>
      <ButtonWarning type="button"
      // onClick={onRemoveItem}
      >
        Remover
      </ButtonWarning>
    </CartItemStyled>
  );
};

export default React.memo(CartItem);
