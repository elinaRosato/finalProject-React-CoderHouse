import React, {useState, useEffect} from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Item = (props) => {
    let navigate = useNavigate();

    const goToProductDetailPage = (event) => {
        event.stopPropagation();
        navigate(`products/${props.id}`)
    };

    return (
        <div className='item-container'>
            <div onClick={goToProductDetailPage}>
                <img src={props.image} alt={props.title} />
                <h2 className='item-name'>{props.title}</h2>
                <p className='product-description'>{props.description}</p>
                <p className='product-stock'>Only {props.stock} left!</p>
                <p className='product-price'>$ {props.price}</p>
            </div>
            <button className='add-to-cart-btn'>Add to cart</button>
        </div>
    );
}

export default Item;