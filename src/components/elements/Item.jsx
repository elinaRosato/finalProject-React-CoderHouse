import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import CardContainer from '../styled/CardContainer.styled';

const Item = ({id, title, description, price, stock, image}) => {
    let navigate = useNavigate();

    const goToProductDetailPage = (event) => {
        event.stopPropagation();
        navigate(`products/${id}`)
    };

    return (
        <CardContainer>
            <div onClick={goToProductDetailPage}>
                <img src={image} alt={title} />
                <h2 className='item-name'>{title}</h2>
                <p className='product-description'>{description}</p>
                <p className='product-stock'>Only {stock} left!</p>
                <p className='product-price'>$ {price}</p>
            </div>
            <button className='add-to-cart-btn'>Add to cart</button>
        </CardContainer>
    );
}

export default Item;