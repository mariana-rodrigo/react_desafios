import React, {useContext} from 'react'
import  {CartContext, useCartContext} from './Context'




function Cart(){
    const {  cart } = useCartContext();
    console.log (cart)
    return(
        <div>
            <h1> Carrito</h1>
            
            <p> {cart}</p>
        </div>
    )
}

export default Cart;