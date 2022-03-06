import React, { createContext, useContext, useState } from 'react';

//Create Cart Context
const CartContext = React.createContext();

//Costum Hook
export function useCart() {
  return useContext(CartContext);
}

//Create CartProvider Component -> Cleaner way of using <CartContext.Provider>
const CartProvider = ( {children} ) => {
    
  const [cart, setCart] = useState([]);

	const addItem = (product, qty) => {
		const productIndex = cart.indexOf(product);
		if (productIndex===-1) {
			console.log('el producto no esta en el cart');
			console.log('cantidad: ', qty);
			product.qty =  qty;
			setCart([...cart, product]);
		} else {
			console.log('el producto ya existe');
			console.log('product index: ', cart[productIndex])
			console.log('cantidad: ', cart[productIndex].qty)
			cart[productIndex].qty= cart[productIndex].qty + qty
			setCart(cart);
		}
	}

	const itemsInCart = cart.reduce((acc, curr) => acc + curr.qty, 0)

	const totalPrice = cart.reduce((acc, curr) => acc + curr.price*curr.qty, 0);

  return (
		<CartContext.Provider value={ [ cart, addItem, itemsInCart, totalPrice ] } >
			{ children }
		</CartContext.Provider>
	);
};

export default CartProvider;
