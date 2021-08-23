import styled from 'styled-components';
import Card from '../Card';

export const ModalStyled = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0px;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;

`

export const CardModalStyled = styled(Card)`
    width: 60%;
    height: 60%;
`