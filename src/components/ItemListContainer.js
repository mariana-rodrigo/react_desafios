import ItemList from './ItemList'
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { getFirestore } from '../firebase'


function ItemListContainer() {
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

    const { categoria } = useParams();
    if (categoria === undefined) {
        return (
            <div>
                <ItemList tortas={tortas} />
            </div>
        )

    } else {
        const tortasQueSonDeLaCategoria = tortas.filter((tortas) => categoria === tortas.categoria)
        return (
            <div>
                <ItemList tortas={tortasQueSonDeLaCategoria} />
            </div>
        )
    }
}

export default ItemListContainer