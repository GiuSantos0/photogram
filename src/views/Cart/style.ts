import styled from "styled-components";
import Card from "../../components/Card";

export const CardTotal = styled(Card)`
  text-align: center;

  span.empty-cart {
    color: rgb(206, 206, 206);
  }

  .total-price {
    margin: 20px 0;
    font-size: 25px;
  }
`;