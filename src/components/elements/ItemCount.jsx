import React from 'react';
import { useState } from 'react';
import { Grid } from '@material-ui/core';

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

export default ItemCount;
