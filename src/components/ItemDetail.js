import ItemCount from "./ItemCount";

function ItemDetail(props){
    
    return (
        <div>
            <h2>
                {props.nombreTorta}
            </h2>
            <img src={props.imagenTorta} alt="torta"/>
            <p>
                {props.descripcionTorta}
            </p>
            <h3>
                {props.precio}
            </h3>
            <ItemCount/>

        </div>
    )

}

export default ItemDetail; 