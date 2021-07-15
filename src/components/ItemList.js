import Bomba from '../imagenes/Bomba.jpg'
import Infierno from '../imagenes/Infierno.jpeg'
import Item from './Item'
import React from 'react'

class ItemList extends React.Component{ 
    constructor(props) {
        super(props);
        this.timer = null;
    }
  
    componentDidMount() {
        this.timer = setTimeout(() => console.log('Hello, World!'), 2000)
    }
  
    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        const tortas =[
            {nombre: "Bomba",
            imagen: Bomba},
            {nombre: "Infierno",
            imagen: Infierno}
        ]
        return (
            <div>
                
                {tortas.map(torta => <Item nombreTorta ={torta.nombre} imagenTorta={torta.imagen}/>)}
                
            </div>
        )
    }

}

export default ItemList