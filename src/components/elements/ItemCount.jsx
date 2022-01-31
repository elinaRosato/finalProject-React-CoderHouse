import React from 'react';

const ItemCount = ({ itemsQty, stock, setItemsQty}) => {

    const decrementer = () => {
        if (itemsQty > 0) {
            setItemsQty ((prev) => prev - 1)
        };
    };

    const incrementer = () => {
        if (itemsQty < stock) {
            setItemsQty ((prev) => prev + 1)
        };
    };
    return (
        <div>
            <div className='counter-div'>
                    <button className='substract-button' onClick={decrementer}>-</button>
                    <p className='counter'>{itemsQty}</p>
                    <button className='add-button' onClick={incrementer}>+</button>
                </div>
        </div>
    )
};

export default ItemCount;
