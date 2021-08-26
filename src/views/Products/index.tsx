import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import api from "../../services/api";

import { ProductsListStyled } from "./style";
import { ButtonPrimary } from "../../components/Buttons";
import Card from "../../components/Card";
import Title from "../../components/Title";
// import {Modal, ImageModal} from "../../components/Modal";
import { IProduct } from "../../store/modules/cart/types";
import { addProductToCart } from "../../store/modules/cart/actions";
import formatMoneyToReal from "../../utils/formatMoneyToReal";

const Products: React.FC = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState<IProduct[]>([]);
    {/* A ideia era que aqui tivesse um modal para abrir a imagem */}
    {/* vai ficar para uma prox feature */}
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [productSelected, setProductSelected] = useState<IProduct>();

    useEffect(() => {
        api.get("/product").then((response) => {
            setProducts(response.data);
            (response.data);
        });
    }, []);

    const openModal = (product: IProduct) => {
        setIsModalVisible(true);
        setProductSelected(product);
    };

    const handleAddProductToCart = useCallback((product: IProduct) => {
        dispatch(addProductToCart(product));
    }, [dispatch]);

    return (
        <>
            <Title>Imagens mais populares</Title>
            <ProductsListStyled>
                {products.map((product) => (
                    <Card>
                        <img alt={product.name} src={product.image} onClick={() => openModal(product)} />
                        <ul>
                            <li key={`${product.id}-name`}>
                                <b>
                                    {product.name}
                                </b>
                            </li>
                            <li key={`${product.id}-price`}>{formatMoneyToReal(product.price)}</li>
                        </ul>
                        <ButtonPrimary onClick={() => handleAddProductToCart(product)}>
                            Comprar
                        </ButtonPrimary>
                    </Card>
                ))};
            </ProductsListStyled>
        </>
    );
};

export default Products;
