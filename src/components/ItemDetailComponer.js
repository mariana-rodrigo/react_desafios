import Bomba from '../imagenes/Bomba.jpg'
import Infierno from '../imagenes/Infierno.jpeg'
import ItemDetail from './components/ItemDetail';
import React, { useState, useEffect } from "react";




function ItemDetailComponer(){
    const [detallesTortas, setDetallesTortas] = useState([]);

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
        const detallesTortas =[
            {nombre: "Bomba",
            imagen: Bomba,
            descripcion: "Bizcochuelo húmedo de chocolate, merengue Italiano, mouse de chocolate" ,
            precio: "$1700"},
            {nombre: "Infierno",
            imagen: Infierno,
            descripcion: "Bizcochuelo Red Velvet, crema de Maracuyá y cardamomo ,ganache de chocolate blanco",
            precio: "$1600"}
        ]

      setTimeout(() => {
        resolve(detallesTortas);
      }, 2000);
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
    
    return(
        <div>
            <ItemDetail nombreTorta = {detallesTortas.nombre} imagenTorta = {detallesTortas.imagen} descripcionTorta ={detallesTortas.descripcion} precio = {detallesTortas.precio} />
        </div>
    )
}

export default ItemDetailComponer; 