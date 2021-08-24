import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Title, ProductsListStyled } from './style';
import { ButtonPrimary } from '../../components/Buttons';
import Card from '../../components/Card';
import {Modal, ImageModal} from '../../components/Modal';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [productSelected, setProductSelected] = useState(null);

    useEffect(() => {
        api.get('/product').then(response => {
            setProducts(response.data)
            console.log(response.data)
        })
    }, [])

    const openModal = (product) => {
        setIsModalVisible(true)
        setProductSelected(product)
    }

    return (
        <> 
            <Title>Produtos</Title>
            <ProductsListStyled>
                {products.map(product => (
                    <Card>
                        <img alt={product.name} src={product.image} onClick={() => openModal(product)}/>
                        <ul>
                            <li key={`${product.id}-name`}>
                                <b>
                                    {product.name}
                                </b>
                            </li>
                            <li key={`${product.id}-price`}>{product.price}</li>
                        </ul>
                        <ButtonPrimary>Comprar</ButtonPrimary>
                    </Card>
                ))}
            </ProductsListStyled>
            {isModalVisible && 
                <Modal title={productSelected.name} onClose={() => setIsModalVisible(false)}>
                        <ImageModal alt={productSelected.name} src={productSelected.image} />
                        <ul>
                            <li>{productSelected.price}</li>
                            <li>{productSelected.stock}</li>
                            {/* <li>{productSelected.price}</li> */}
                        </ul>
                </Modal>
            }
        </>
    )
}