import styled from "styled-components";

export const CartItemStyled = styled.li`
    position: relative;
    height: 160px;
    padding: 30px 25px;

    align-items: center;
    justify-content: space-around;

    background-color: white;
    border-radius: 16px;
    border-bottom: 2px solid #EFEFEF;

    display: grid;
    grid-template-columns: 100px 1fr;
    padding: 10px 5px;
    gap: 10px;

    @media screen and (max-width: 560px) {
        height: 200px;
        align-items: center;
        justify-content: center;
    }
`;

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap:  5px;
  position: relative;

  .unitary-price{
    font-size: 10px;
    color: #585858;
  }
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap:  5px;
  position: relative;

  & > button {
    position: absolute;
    bottom: -20px;
    font-size: 15px;
    color: red;
  }
`;

export const QuantityField = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  border: 1px solid #585656;
  border-radius: 20px;
  padding: 0 10px;
  input {
    padding: 10px 0;
    text-align: center;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    max-width: 25px;
  }
  button {
    font-weight: bold;
    background: transparent;
    border: none;
    &:disabled {
      color: #c5c2c2;
      cursor: default;
    }
  }
`;

export const Price = styled.span`
    text-align: right;
    color: #585656;
    font-weight: bold;
    @media screen and (max-width: 450px) {
        margin-top: 10px;
    }
`;

export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap:  5px;
    position: relative;
`;

export const Image = styled.img`
    border-radius: 9px;
    width: 6rem;

    @media screen and (max-width: 450px) {
        margin-top: 10px;
        align-self: flex-start;
    }
`;

export const ProductInfo = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 2fr;
  align-items: center;
  .text {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }
  .stock {
    color: #585858;
    font-size: 15px;
  }
  @media screen and (max-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: var(--gap-regular);
  }
  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    gap: 5px;
    align-items: center;
    justify-items: center;
  }
`;
