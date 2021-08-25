import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const IconButtonWithBadge = styled(Link)`
    position: relative;
    color: #3498db;
    padding: 10px 10px;
    outline: 0;

    &:after {
        content: attr(data-badge);
        position: absolute;
        top: -8px;
        right: -3px;
        background: #585656;
        color: #fff;
        padding: 3px;
        border-radius: 50%;
        font-size: .8em;
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
