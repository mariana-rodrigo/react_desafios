

function Item (props){
    
    

    return(
        <div>
            <img src={props.imagenTorta} alt="torta"/>
            <h2>{props.nombreTorta}</h2>
        </div>
    )
}


export default Item;