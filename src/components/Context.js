import React, { useContext, useState } from 'react';

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider =({children}) => {
    
    const [cartCount, setCartCount] = useState(0);
    
    
    
    const updateCartCount = cantidad => {
        setCartCount(previo => previo+cantidad)
    }
    
    return(
        <CartContext.Provider value={{  cartCount, updateCartCount  }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider