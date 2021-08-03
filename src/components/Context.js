import React, { useContext, useState } from 'react';

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider =({children}) => {
    
    const [count, setCount] = useState(0);
    const updateCartCount = (cantidad) => {
        setCount(cantidad)
        
    }

    const [cart, setCart] =useState([]);
    const updateCarrito = (producto) =>{
        setCart(cart.concat([producto]))
    }

    const eliminarProducto = (productoAEliminar) => {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].producto === productoAEliminar) {
                
                cart.splice(i,1)
            }
        }
        setCart(cart);
    }
    
    return(
        <CartContext.Provider value={{  count, updateCartCount, updateCarrito, cart, eliminarProducto }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider