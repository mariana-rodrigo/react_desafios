import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import {useCartContext } from './Context'

function ItemDetail(props){
    const stock = props.stockTorta;
    const [agregoProducto, setAgregoProducto] = useState (false);
    

    
    const { updateCartCount} = useCartContext();
    
    const onAdd=(cantidadDeTortas, producto)=>{
        setAgregoProducto(true)
        
        updateCartCount (cantidadDeTortas);
    }

    

    if (agregoProducto===true){
        return(
        <div>
            <Link to={'/cart'}><button> Terminar mi compra</button> </Link>
        </div>
        )
    }else{
        return (
            <div>
                <h2>
                    {props.nombreTorta}
                </h2>
                <img src={props.imagenTorta} alt="torta"/>
                <p>
                    {props.descripcionTorta}
                </p>
                <h3>
                    {props.precio}
                </h3>
                
                <ItemCount stock ={stock} onAdd={onAdd} nombreTorta={props.nombreTorta} />
    
            </div>
        )
    
    }
    
        
    
}

export default ItemDetail; 