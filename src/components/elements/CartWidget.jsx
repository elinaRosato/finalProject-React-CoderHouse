import { IconButton, Badge } from '@material-ui/core';
import { useState } from 'react';
import { useCart } from "../../context/CartContext";


const CartWidget = () => {
    const [cart, setCart] = useCart();
    const itemsInCart = cart.reduce((acc, curr) => acc + curr.qty, 0);


    // items.length
    return (
        <IconButton>
            <Badge badgeContent={itemsInCart}>
                <img src="https://img.icons8.com/ios/50/000000/shopping-basket-2.png"/>
            </Badge>
        </IconButton>
    )
}

export default CartWidget;