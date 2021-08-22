import ItemDetail from './ItemDetail';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';
import '../ItemDetailContainer.css';
import { getFirestore } from '../firebase'

function ItemDetailComponer() {
  
  const [tortas, setTortas] = useState([]);
    
    useEffect(() => {
        const firestore = getFirestore();
        const collection = firestore.collection('productos');
        const tortasArray = []
        const query = collection.get();

        query.then((resultado) => {
            resultado.forEach(documento => {
                tortasArray.push(documento.data())
            })
            setTortas(tortasArray)
        })
        
        
    }, [])

  const { id } = useParams();
  if (tortas.length > 0) {

    
    const productoSeleccionado = tortas.find( (unaTorta) => id === unaTorta.id )
    return (
      <div className='itemDetailContainer' >
        <ItemDetail nombreTorta={productoSeleccionado.nombre}  descripcionTorta={productoSeleccionado.descripcion} 
        precio={productoSeleccionado.precio} idTorta={productoSeleccionado.id} stockTorta ={productoSeleccionado.stock} imagenTorta={productoSeleccionado.imagen}/>
      </div>)
  } else {
    return <div>Cargando</div>;
  }
}

export default ItemDetailComponer;