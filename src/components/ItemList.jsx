import Bomba from "../imagenes/Bomba.jpg";
import Infierno from "../imagenes/Infierno.jpeg";
import Item from "./Item";
import React, { useState, useEffect } from "react";

export default function ItemList() {
  const [tortas, setTortas] = useState([]);

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      const tortas = [
        { nombre: "Bomba", imagen: Bomba },
        { nombre: "Infierno", imagen: Infierno },
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
    <div>
      {tortas.map((torta) => (
        <Item nombreTorta={torta.nombre} imagenTorta={torta.imagen} />
      ))}
    </div>
  );
}
