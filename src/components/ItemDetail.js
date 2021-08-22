import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import {useCartContext } from './Context';
import '../Item.css';


function ItemDetail(props){
    const stock = props.stockTorta;
    const [agregoProducto, setAgregoProducto] = useState (false);
    
    const {updateCarrito } = useCartContext();
    
    const { updateCartCount, count} = useCartContext();
    
    const onAdd=(cantidadDeTortas, producto, precio)=>{
        setAgregoProducto(true)
        
        updateCartCount (cantidadDeTortas + count);
        const precioFinal= cantidadDeTortas*precio;
        const productoElegido = {cantidadDeTortas, producto, precioFinal}
        
        updateCarrito(productoElegido)
        
    }
    
const precio = props.precio;
    

    if (agregoProducto===true){
        return(
        <div>
            <Link to={'/cart'}><button> Terminar mi compra</button> </Link>
        </div>
        )
    }else{
        return (
            <div >
                <h2>
                    {props.nombreTorta}
                </h2>
                <img src={props.imagenTorta} alt="torta" className='imagen'/>
                <p>
                    {props.descripcionTorta}
                </p>
                <h3>
                    ${precio}
                </h3>

                
                <ItemCount stock ={stock} onAdd={onAdd} nombreTorta={props.nombreTorta} precio ={precio} />
    
            </div>
        )
    
    }
    
        
    
}

export default ItemDetail; 