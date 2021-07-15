// let ServerOnline = true;
function Item (props){
    
    

        return(
            <div>
                <img src={props.imagenTorta} alt="torta"/>
                <h2>{props.nombreTorta}</h2>
            </div>
        )
    }




    // let ServerOnline = true;
    // let promesa = new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         if(ServerOnline){
    //             resolve("[{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"}]");
    //         }else{
    //             reject( new Error('Servidor sin conexion'));
    //         }
    //     },3000);    
    // });
    // console.log(promesa);
    //  let data = await promesa;
    //  console.log(data);
    //  data = JSON.parse(data);

    //  setProducts(data); 


export default Item;