import React, {useState, useEffect} from 'react';
import '../App.css';

const Item = (props) => {

    const [itemsQty, setItemsQty] = useState(0);

    const decrementer = () => {
        if (itemsQty > 0) {
            setItemsQty ((prev) => prev - 1)
        };
    };

    const incrementer = () => {
        if (itemsQty < props.stock) {
            setItemsQty ((prev) => prev + 1)
        };
    };

    return (
        <div className='item-container'>
            <img src={props.productPictureURL} alt={props.productName} />
            <h2 className='item-name'>{props.productName}</h2>
            <p className='product-description'>{props.productDescription}</p>
            <p className='product-stock'>Only {props.stock} left!</p>
            <p className='product-price'>$ {props.productPrice}</p>
            <div className='counter-div'>
                <button className='substract-button' onClick={decrementer}>-</button>
                <p className='counter'>{itemsQty}</p>
                <button className='add-button' onClick={incrementer}>+</button>
            </div>
            <button className='add-to-cart-btn'>Add to cart</button>
        </div>
    );
}

export default Item;