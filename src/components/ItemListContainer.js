import ItemList from './ItemList'
import React, { useState, useEffect } from "react";
import Bomba from "../imagenes/Bomba.jpg";
import Infierno from "../imagenes/Infierno.jpeg";
import Macarons from "../imagenes/Macarons.jfif";
import Cupcake from "../imagenes/Cupcake.jpg"
import { useParams } from 'react-router';


function ItemListContainer() {
    const [tortas, setTortas] = useState([]);

    useEffect(() => {
        const task = new Promise((resolve, reject) => {
            const tortas = [
                { nombre: "Torta Bomba", imagen: Bomba, precio: '$1500', categoria: "tortas", id: 1 },
                { nombre: "Torta Infierno", imagen: Infierno, precio: '$1800', categoria: "tortas", id: 2 },
                { nombre: "Macarons", imagen: Macarons, precio: '$800', categoria: "pasteleria", id: 3 },
                { nombre: "Cupcakes", imagen: Cupcake, precio: '$500', categoria: "pasteleria", id: 4 }
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

    const { categoria } = useParams();
    if (categoria === undefined) {
        return (
            <div>
                <ItemList tortas={tortas} />
            </div>
        )

    } else {
        const tortasQueSonDeLaCategoria = tortas.filter((producto) => categoria === producto.categoria)

        return (
            <div>
                <ItemList tortas={tortasQueSonDeLaCategoria} />
            </div>
        )
    }
}

export default ItemListContainer