import Bomba from '../imagenes/Bomba.jpg'
import Infierno from '../imagenes/Infierno.jpeg'
import ItemDetail from './ItemDetail';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';
import Macarons from '../imagenes/Macarons.jfif';
import Cupcakes from '../imagenes/Cupcake.jpg'

function ItemDetailComponer() {
  const [detallesTortas, setDetallesTortas] = useState([]);

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      const detallesTortas = [
        {
          id: '1',
          nombre: "Torta Bomba",
          imagen: Bomba,
          descripcion: "Bizcochuelo húmedo de chocolate, merengue Italiano, mouse de chocolate",
          precio: 1500,
          stock: 10
        },
        {
          id: '2',
          nombre: "Torta Infierno",
          imagen: Infierno,
          descripcion: "Bizcochuelo Red Velvet, crema de Maracuyá y cardamomo ,ganache de chocolate blanco",
          precio: 1600,
          stock: 10
        },
        {
          id: '3',
          nombre: "Macarons x6",
          imagen: Macarons,
          descripcion: "Super caja customizable: elegí tus propios sabores y armá tu caja como vos quieras!",
          precio: 700,
          stock: 10
        },
        {
          id: '4',
          nombre: "Infierno",
          imagen: Cupcakes,
          descripcion: "Bizcochuelo Red Velvet, crema de Maracuyá y cardamomo ,ganache de chocolate blanco",
          precio: 1600,
          stock: 10
        }
      ]

      setTimeout(() => {
        resolve(detallesTortas);
      }, 500);
    });

    task.then(
      (resultadoDelPromise) => {
        setDetallesTortas(resultadoDelPromise);
      },
      (rej) => {
        console.log("Error");
      }
    );
  }, []);

  const { id } = useParams();
  if (detallesTortas.length > 0) {

    
    const productoSeleccionado = detallesTortas.find( (unaTorta) => id === unaTorta.id )
    return (
      <div>
        <ItemDetail nombreTorta={productoSeleccionado.nombre} imagenTorta={productoSeleccionado.imagen} descripcionTorta={productoSeleccionado.descripcion} 
        precio={productoSeleccionado.precio} idTorta={productoSeleccionado.id} stockTorta ={productoSeleccionado.stock}/>
      </div>)
  } else {
    return <div>Cargando</div>;
  }
}

export default ItemDetailComponer;