import Bomba from '../imagenes/Bomba.jpg'
import Infierno from '../imagenes/Infierno.jpeg'
import Item from './Item'

function ItemList(){
    const tortas =[
        {nombre: "Bomba",
        imagen: Bomba},
        {nombre: "Infierno",
        imagen: Infierno}
    ]
    return(
        <div>
            
            {tortas.map(torta => <Item nombreTorta ={torta.nombre} imagenTorta={torta.imagen}/>)}
            
        </div>
    )
}
export default ItemList;