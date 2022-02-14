import React from 'react';
import { useState } from 'react';
import { Grid } from '@material-ui/core';
import { useCart } from '../../context/CartContext';

const CartCounter = ({id, stock, originalQty}) => {
    const [qty, setQty] = useState(originalQty);
    const [cart, setCart] = useCart(); 
    const decrementer = () => {
			if (qty > 0) {
					setQty ((prev) => prev - 1);
                    (cart.find(product => product.id == id)).qty = (cart.find(product => product.id == id)).qty - 1;
                    setCart(cart);
                };
	};

	const incrementer = () => {
			if (qty < stock) {
					setQty ((prev) => prev + 1);
                    (cart.find(product => product.id == id)).qty = (cart.find(product => product.id == id)).qty + 1;
                    setCart(cart);
			};
	};

	return (
		<div>
				<Grid container>
					<Grid item>
						<button className='substract-button' onClick={decrementer}>-</button>
					</Grid>
					<Grid item>
						<p className='counter'>{qty}</p>
					</Grid>
					<Grid item>
						<button className='add-button' onClick={incrementer}>+</button>
					</Grid>
				</Grid>
		</div>
	)
};

export default CartCounter;