import './NavBar.css'
import './CartWidget.js'
import CartWidget from './CartWidget.js'
import {Link} from'react-router-dom'


function NavBar() {
    return (
        
        <nav>
            
                <div className='nav'>
                    
                    <ul className="listaNav">
                        <li className="elementoListaNav"><Link to={'/'}>Todos</Link></li> 
                        <li className="elementoListaNav"><Link to={'/tortas'}> Tortas </Link></li>
                        <li className="elementoListaNav"> <Link to={'/pasteleria'}>Pastelería </Link></li>
                        
                        <li className="elementoListaNav"><CartWidget/></li>
                        
                        
                    </ul>
                </div>
            
        </nav>
    
    );
}

export default NavBar;