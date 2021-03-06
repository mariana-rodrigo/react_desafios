import {React, useState} from 'react'
import { useCartContext} from './Context'
import { Link } from "react-router-dom";
import { getFirestore } from '../firebase';
import '../Cart.css'
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
    let precioFinalPorProducto = 0;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].producto === nombreDelProducto) {

            precioFinal=cart[i].precioFinal + precioFinal;
            precioFinalPorProducto=cart[i].precioFinal + precioFinalPorProducto;
        }
    }
    return  precioFinal
    
}


const sumaTotal = (cart) => {

    let precioFinalTotal = 0;
    for (let i = 0; i < cart.length; i++) {
        precioFinalTotal=precioFinalTotal+cart[i].precioFinal
    }
    return  precioFinalTotal
}


function Cart() {
    const { cart, eliminarProducto, updateCartCount, count } = useCartContext();
    
    const eliminarProductoDelCarrito = (productoElegido) => {
        
        let productosTotales = count-agruparTortas(cart, productoElegido);
        updateCartCount(productosTotales);
        eliminarProducto(productoElegido);
    }
    const productosElegidos = cart.map((itemDelCarrito) => itemDelCarrito.producto)
    
    const [confirmacion, setConfirmacion] = useState(false);
    const crearOrden= (event) =>{
        event.preventDefault();
        const nuevaOrden = {
            buyer : {
                name: event.target.nombre.value,
                phone: event.target.telefono.value,
                email: event.target.mail.value
            },
            ordenes :  cart,

        }

        const firestore = getFirestore();
        const collection = firestore.collection("ordenes");
        const query = collection.add(nuevaOrden)

        query.then ((resultado) =>{
            setConfirmacion(resultado.id)
        }).catch ((error)=>{
            console.log(error)
        })
    }


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
                <table className='tabla'>
                    <tr>
                        <td className='titulo'>Nombre</td>
                        <td className='titulo'>Cantidad</td>
                        <td className='titulo'>Precio</td>
                    </tr>
                    {productosElegidos.map((productoElegido) => (
                        <tr>
                            <td>{productoElegido}</td>
                            <td>{agruparTortas(cart, productoElegido)}</td>
                            <td>${sumaPrecio(cart, productoElegido)}</td>
                            <td>
                            <button onClick={()=> eliminarProductoDelCarrito(productoElegido)}>
                                Eliminar del carrito
                            </button>
                            </td>
                        </tr>
                    ))}
                </table>
                <h2> Total a pagar ${sumaTotal(cart)}</h2>
                <form onSubmit={crearOrden} className='form'>    
                    <h2> Completa la siguiente informaci??n para terminar tu compra</h2>
                    <h3 > Nombre y Apellido </h3>
                    <input name="nombre" ></input>
                    <h3> Telefono</h3>
                    <input name="telefono"></input>
                    <h3>Mail</h3>
                    <input name="mail" ></input>
                    <button>Terminar compra!</button>
                    {confirmacion&& <h2>Confirmaci??n de compra: {confirmacion}</h2>}
                </form>
                
            </div>

        )
    }
}
export default Cart;