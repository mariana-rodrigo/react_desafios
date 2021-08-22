import React, { useState } from "react"
import { useCartContext } from './Context';


function isInCart(elCarrito, productoAEncontrar) {
    for (let i = 0; i < elCarrito.length; i++) {
        if (elCarrito[i].producto === productoAEncontrar) {
            return true;
        }
    }
    return false;
}


function ItemCount(props) {
    const { cart } = useCartContext();
    const [value, setValue] = useState(1);
    const producto = props.nombreTorta
    const precio = props.precio;



    const estaEnElCarrito = isInCart(cart, producto);

    if (estaEnElCarrito===true) {
        return (
            <div>
                <h4>Este producto ya está agregado a tu carrito!</h4>
            </div>
        )
    } else {
        return (
            <div>
                <p>
                    {value}
                </p>

                {value < props.stock
                    ? <button className="botonSuma" onClick={() => setValue(value + 1)}>+</button>
                    : <button className="botonSumaDeshabilitado"> + </button>
                }

                {value > 1
                    ? <button className="botonResta" onClick={() => setValue(value - 1)}>-</button>
                    : <button className="botonRestaDeshabilitado"> - </button>
                }
                <button onClick={() => props.onAdd(value, producto, precio)}>Agregar al carrito</button>
            </div>
        )
    }
}


export default ItemCount;