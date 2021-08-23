import React from 'react';
import {ModalStyled, CardModalStyled} from './style'
import { CloseButton } from '../Buttons'

export default function Modal({children}) {
    return(
        <ModalStyled>
            <CardModalStyled>
                <CloseButton/>
                <div>
                    {children}
                </div>
            </CardModalStyled>
        </ModalStyled>
    )
}
