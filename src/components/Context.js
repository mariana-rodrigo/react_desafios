import React, { useContext, useState } from 'react';

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider =({children}) => {
    
    const [count, setCount] = useState(0);
    const updateCartCount = (cantidad) => {
        setCount(previo => previo+cantidad)
        
    }

    const [cart, setCart] =useState([]);
    const updateCarrito = ({producto}) =>{
        setCart(cart.concat([producto]))
    }
    
    return(
        <CartContext.Provider value={{  count, updateCartCount, updateCarrito, cart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider