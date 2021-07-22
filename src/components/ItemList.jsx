import Bomba from "../imagenes/Bomba.jpg";
import Infierno from "../imagenes/Infierno.jpeg";
import Macarons from "../imagenes/Macarons.jfif";
import Cupcake from "../imagenes/Cupcake.jpg"
import Item from "./Item";
import React, { useState, useEffect } from "react";
import '../ItemListContainer.css';



export default function ItemList() {
  const [tortas, setTortas] = useState([]);

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      const tortas = [
        { nombre: "Torta Bomba", imagen: Bomba, precio: '$1500', categoria: "torta", id: 1 },
        { nombre: "Torta Infierno", imagen: Infierno, precio: '$1800', categoria: "torta", id: 2 },
        { nombre: "Macarons", imagen: Macarons, precio: '$800', categoria: "pasteleria", id:3},
        {nombre: "Cupcakes", imagen: Cupcake, precio: '$500', categoria: "pasteleria", id: 4}
      ];

      setTimeout(() => {
        resolve(tortas);
      }, 2000);
    });

    task.then(
      (resultadoDelPromise) => {
        setTortas(resultadoDelPromise);
      },
      (rej) => {
        console.log("Error");
      }
    );
  }, []);
  
  

  return (
    <div className='itemListContainer'>
      {tortas.map((torta) => (
        <Item nombreTorta={torta.nombre} imagenTorta={torta.imagen} precioTorta={torta.precio} idTorta={torta.id} categoriaTorta={torta.categoria}/>
      ))}
      
    </div>
  );
} 
