import React, {createContext, useContext, useState} from 'react';

//Create Cart Context
const CartContext = React.createContext();

//Costum Hook
export function useCart() {
  return useContext(CartContext)
}
const [cart, setCart] = useState({})

export const handlerAddToCart = async (product, qty) => {
    product.qty = qty
    setCart([...cart, product])
  }

//Create CartProvider Component -> Cleaner way of using <CartContext.Provider>
const CartProvider = ( {children} ) => {
    
    const cartItems = () => {
        return cart.length
    }
  return (
		<CartContext.Provider value={cart} >
			{ children }
		</CartContext.Provider>
	);
};

export default CartProvider;
