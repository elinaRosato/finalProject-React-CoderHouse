import React, { useState } from 'react';

// Contexts
import { useCart } from '../../context/CartContext';

//Styled Components
import { CounterContainer, CounterBtn, CounterQty } from '../styled/Counter.styled';

const CartCounter = ({id, stock, originalQty}) => {
  const [qty, setQty] = useState(originalQty);
    const [cart, setCart] = useCart()[0]; 

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
		<CounterContainer>
			<CounterBtn onClick={decrementer}>-</CounterBtn>
			<CounterQty>{qty}</CounterQty>
			<CounterBtn onClick={incrementer}>+</CounterBtn>
		</CounterContainer>
	)
};

export default CartCounter;