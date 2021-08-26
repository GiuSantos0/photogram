import styled from "styled-components";

export const ProductsListStyled = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    gap: 15px;
    justify-content: space-between;
    margin-bottom: 80px;

    font-size: 20px;

    img {
        width: 100%;
        border-radius: 10px;
        cursor: pointer;
    }

    ul {
        list-style: none;
        margin: 10px 0px;
        color: #585656;
    }

    li {
        &:first-child {
            color: #343333;
            font-size: 23px;
        }
    }

`;
