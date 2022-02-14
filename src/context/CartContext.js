import React, {createContext, useContext, useState} from 'react';

//Create Cart Context
const CartContext = React.createContext();

//Costum Hook
export function useCart() {
  return useContext(CartContext);
}

//Create CartProvider Component -> Cleaner way of using <CartContext.Provider>
const CartProvider = ( {children} ) => {
    
  const [cart, setCart] = useState([]);


  return (
		<CartContext.Provider value={[cart, setCart]} >
			{ children }
		</CartContext.Provider>
	);
};

export default CartProvider;
