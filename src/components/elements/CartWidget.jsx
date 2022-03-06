import React from 'react';
import { IconButton, Badge } from '@material-ui/core';

// ContextsA
import { useCart } from "../../context/CartContext";

const CartWidget = () => {
  const itemsInCart = useCart()[2];

	return (
		<IconButton>
			<Badge badgeContent={itemsInCart}>
				<img src="https://img.icons8.com/ios/50/000000/shopping-basket-2.png"/>
			</Badge>
		</IconButton>
	)
};

export default CartWidget;