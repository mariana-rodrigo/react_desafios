import './NavBar.css'
import './CartWidget.js'
import CartWidget from './CartWidget.js'

function NavBar() {
    return (
        
        <nav>
            
                <div>
                    
                    <ul className="listaNav">
                        <li className="elementoListaNav">Inicio</li> 
                        <li className="elementoListaNav">Productos</li>
                        <li className="elementoListaNav">Galería</li>
                        <li className="elementoListaNav"><CartWidget/></li>
                        
                        
                    </ul>
                </div>
            
        </nav>
    
    );
}

export default NavBar;