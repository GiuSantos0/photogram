import styled from 'styled-components';

export const Header = styled.header`
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    height: 55px;
    min-height: 55px;
    background: #4DC2D0;
    top: 0;
    right: 0;
    left: 0;
    z-index: 2;

    nav {
        display: flex;
        flex: 1 1;
        justify-content: flex-end;
        height: 100%;

    }
`

export const Logo = styled.img`
    position: absolute;
    width: 178px;
    height: 40px;
    left: 25px;
    top: 7px;
`

export const ListOptionsHeader = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0 10px;

    li, a {
        margin: 0 10px 0 5px;
        color: #FFF;
        cursor: pointer;
    }
`