
import Item from "./Item";

import '../ItemListContainer.css';



export default function ItemList(props) {
  
  const tortas= props.tortas;
  

  return (
    <div className='itemListContainer'>
      {tortas.map((torta) => (
        <Item key={torta.id} nombreTorta={torta.nombre} imagenTorta={torta.imagen} precioTorta={torta.precio} idTorta={torta.id} categoriaTorta={torta.categoria}/>
      ))}
      
    </div>
  );
} 
