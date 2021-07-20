



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
            <div>
                <img src={props.imagenTorta} alt="torta"/>
                <h2>{props.nombreTorta}</h2>
            </div>
        )
    }





export default Item;