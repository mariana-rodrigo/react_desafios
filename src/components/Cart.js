import React from 'react'
import { useCartContext } from './Context'
import { Link } from "react-router-dom";

const agruparTortas = (cart, nombreDelProducto) => {
    let cantidad = 0;
    
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].producto === nombreDelProducto) {
            cantidad = cantidad + cart[i].cantidadDeTortas;
            
        }
    }
    return cantidad
}

const sumaPrecio = (cart, nombreDelProducto) => {
    
    let precioFinal = 0;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].producto === nombreDelProducto) {
            
            precioFinal=cart[i].precioFinal + precioFinal;
        }
    }
    return  precioFinal
}



function uniq(a) {
    return Array.from(new Set(a));
}

function Cart() {
    const { cart, eliminarProducto, updateCartCount, count } = useCartContext();
    
    const eliminarProductoDelCarrito = (productoElegido) => {
        
        let productosTotales = count-agruparTortas(cart, productoElegido);
        updateCartCount(productosTotales);
        eliminarProducto(productoElegido);
    }

    const productosElegidos = cart.map((itemDelCarrito) => itemDelCarrito.producto)
    const productosElegidosSinDuplicados = uniq(productosElegidos);
    if (cart.length===0){
        return(
            <Link to={'/'}><button >
                Ir a la tienda
            </button></Link>
        )
    }
    else{
        return (
            <div>
                <h1> Carrito</h1>

                {productosElegidosSinDuplicados.map((productoElegido) => (
                    <div key ={productoElegido}>
                        <h3> {productoElegido} x {agruparTortas(cart, productoElegido)} {sumaPrecio(cart, productoElegido)}</h3>
                        <button onClick={()=> eliminarProductoDelCarrito(productoElegido)}>
                            Eliminar del carrito
                        </button>
                    </div>
                ))}
            </div>
            
        )
    }
}

export default Cart;