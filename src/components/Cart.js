import React from 'react'
import { useCartContext } from './Context'

const agruparTortas = (cart, nombreDelProducto) => {
    let cantidadDeTortaBomba = 0;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].producto === nombreDelProducto) {
            cantidadDeTortaBomba = cantidadDeTortaBomba + cart[i].cantidadDeTortas;
        }
    }
    return cantidadDeTortaBomba;
}
function uniq(a) {
    return Array.from(new Set(a));
}

function Cart() {
    const { cart } = useCartContext();

    const productosElegidos = cart.map((itemDelCarrito) => itemDelCarrito.producto)
    const productosElegidosSinDuplicados = uniq(productosElegidos);
    return (
        <div>
            <h1> Carrito</h1>

            {productosElegidosSinDuplicados.map((productoElegido) => (
                <p> {productoElegido} x {agruparTortas(cart, productoElegido)}</p>
            ))}
        </div>
    )
}

export default Cart;