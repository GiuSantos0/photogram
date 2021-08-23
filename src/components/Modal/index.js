import React from 'react';
import {Backdrop, CardModalStyled} from './style'
import { CloseButton } from '../Buttons'

// we can pass the id as a parameter because 
// we have to know exactly where to close
export default function Modal({id="modal", onClose = () => {}, children}) {
    const handleClickBackdrop = (e) => {
        if(e.target.id === id) {
            onClose();
        }
    }
    
    return(
        <Backdrop id={id} onClick={(e) => handleClickBackdrop(e)}>
            <CardModalStyled>
                <CloseButton onClick={onClose}/>
                <div>
                    {children}
                </div>
            </CardModalStyled>
        </Backdrop>
    )
}
