import React, {useState} from 'react';
import '../App.css';

const ItemCount = (props) => {

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
        <div className='item-counter'>
            <h2 className='item-name'>Avena Arrollada</h2>
            <div className='counter-div'>
                <button className='substract-button' onClick={decrementer}>-</button>
                <p className='counter'>{itemsQty}</p>
                <button className='add-button' onClick={incrementer}>+</button>
            </div>
            <button className='add-to-cart-btn'>Add to cart</button>
        </div>
    );
}

export default ItemCount;