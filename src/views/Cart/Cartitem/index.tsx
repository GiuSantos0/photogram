import React from "react";
import { Plus, Minus } from "react-feather";
import { CartItemStyled, Price, Quantity, QuantityField, Image, ProductInfo, Total } from "./style";
import { ButtonWarning } from "../../../components/Buttons";
import formatMoneyToReal from "../../../utils/formatMoneyToReal";

interface IProps {
  name: string
  imageUrl: string
  quantity: number
  price: number
  stock: number
  // onIncrementQuantity: () => void
  // onDecrementQuantity: () => void
  // onRemoveItem: () => void
}

const CartItem: React.FC<IProps> = ({
  name,
  imageUrl,
  quantity,
  price,
  stock,
  // onIncrementQuantity,
  // onDecrementQuantity,
  // onRemoveItem,
}) => {
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
            // onClick={onDecrementQuantity}
            >
              <Minus />
            </button>
            <input
              type="text"
              value={quantity || ''}
            // onChange={(e) =>
            //   handleCartProductInputQuantityChange(e, product?.id)
            // }
            />
            <button
              type="button"
              disabled={quantity >= stock}
            // onClick={onIncrementQuantity}
            >
              <Plus />
            </button>
          </QuantityField>
        </Quantity>
        <Total>
          <Price>{formatMoneyToReal(price * quantity)}</Price>
        </Total>
        <ButtonWarning type="button"
        // onClick={onRemoveItem}
        >
          Remover
        </ButtonWarning>
      </ProductInfo>
    </CartItemStyled>
  );
};

export default React.memo(CartItem);
