import React, { useState } from "react"




function ItemCount(props) {
    const [value, setValue] = useState(1);
    const producto=props.nombreTorta
    const precio =props.precio
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
            <button  onClick={() => props.onAdd(value, producto, precio)}>Agregar al carrito</button>
        </div>
    )

}

export default ItemCount;