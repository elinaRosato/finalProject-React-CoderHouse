import React from 'react';

//Styled Components
import { CounterContainer, CounterBtn, CounterQty } from '../styled/Counter.styled';

const ItemCount = ({stock, qty, setQty}) => {

	const decrementer = () => {
			if (qty > 0) {
					setQty ((prev) => prev - 1)
			};
	};

	const incrementer = () => {
			if (qty < stock) {
					setQty ((prev) => prev + 1)
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

export default ItemCount;
