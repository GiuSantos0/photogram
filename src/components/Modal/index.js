import React from 'react';
import styled from 'styled-components';
import Card from '../Card';

import { CloseButton } from '../Buttons'

const Backdrop = styled.div`
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

export const TitleModal = styled.h3`
    font-size: 25px;
    line-height: 30px;
`

export const ImageModal = styled.img`
    width: 60%;
    margin: 20px 0;
    border-radius: 5px;
`

// we can pass the id as a parameter because 
// we have to know exactly where to close
export function Modal({id="modal", title, onClose = () => {}, children}) {
    const handleClickBackdrop = (e) => {
        if(e.target.id === id) {
            onClose();
        }
    }
    
    return(
        <Backdrop id={id} onClick={(e) => handleClickBackdrop(e)}>
            <CardModalStyled>
                <div>
                    <CloseButton onClick={onClose}/>
                    <TitleModal>{title}</TitleModal>
                </div>
                <div>
                    {children}
                </div>
            </CardModalStyled>
        </Backdrop>
    )
}
