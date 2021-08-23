import React from 'react';
import {ModalStyled, CardModalStyled} from './style'
import { CloseButton } from '../Buttons'

export default function Modal({children, onClose}) {
    return(
        <ModalStyled>
            <CardModalStyled>
                <CloseButton onClick={onClose}/>
                <div>
                    {children}
                </div>
            </CardModalStyled>
        </ModalStyled>
    )
}
