import '../Item.css';
import ItemCount from "./ItemCount"




const data = () => {
    return new Promise ((resolve, rejected) => {
        setTimeout ( () => {
            resolve ('Resuelto');
        }, 2000);
        setTimeout(()=>{
            rejected('Rechazado');
        }, 6000);
    });
};




function Item (props){
    data().then(resolve=>console.log(resolve)).catch(error=>console.col(error))
    
    return(
            <div className='item'> 
                <img src={props.imagenTorta} alt="torta" className='imagen'/>
                <h2>{props.nombreTorta}</h2>
                <h3>
                    {props.precioTorta}
                </h3>
                <ItemCount/>
            </div>
        )
    }





export default Item;