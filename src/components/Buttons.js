import styled from "styled-components";

export const ButtonPrimary = styled.button`
    width: 100%;
    height: 50px;
    background: #4dc2d0;
    color: #FFF;
    border-radius: 10px;
    border: 0;
    font-weight: bold;
    text-transform: uppercase;
    padding: 10px;

    &:hover {
        background: #53c9d8e3;
    }

`;

// It should be called: <CloseButton/>
export const CloseButton = styled.button`
        background-color: transparent;
        outline: none;
        width: 32px;
        height: 32px;
        border: none;
        right: calc(-100% + 20px);
        top: 0px;
        display: flex;
        position: relative;
        align-items: center;

        &:before, &:after {
            content: '';
            position: absolute;
            width: 2.5px;
            height: 24px;
            background-color: #7a7878;
        }

        &:before {
            transform: rotate(45deg);
        }

        &:after {
            transform: rotate(-45deg);
        }

`;
