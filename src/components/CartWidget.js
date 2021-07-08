import carrito from '../imagenes/carrito.jpg'
import "./CartWidget.css"

function CartWidget(){
    return(
        <div>
            <img src={carrito} alt="carrito" class="carrito"></img>
        </div>

    )
}

export default CartWidget;